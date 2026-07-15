const bnNumber = value => new Intl.NumberFormat("bn-BD").format(value);

const formatDate = dateString => {
  if (!dateString) return "তথ্য নেই";
  const date = new Date(`${dateString}T00:00:00`);
  return new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
};

const escapeHTML = value => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

function renderNotices() {
  const grid = document.getElementById("noticeGrid");
  const sorted = [...notices].sort((a, b) => b.date.localeCompare(a.date));

  grid.innerHTML = sorted.map(notice => `
    <article class="notice-card ${notice.important ? "important" : ""}">
      <div class="notice-meta">
        <span class="notice-category">${escapeHTML(notice.category)}</span>
        <time class="notice-date" datetime="${escapeHTML(notice.date)}">${formatDate(notice.date)}</time>
      </div>
      <h3>${escapeHTML(notice.title)}</h3>
      <p>${escapeHTML(notice.description)}</p>
      ${notice.important ? '<span class="important-tag">● গুরুত্বপূর্ণ নোটিশ</span>' : ""}
    </article>
  `).join("");

  document.getElementById("noticeCount").textContent = bnNumber(sorted.length);
}

function populateUpazilaFilter() {
  const select = document.getElementById("upazilaFilter");
  const upazilas = [...new Set(donors.map(donor => donor.upazila).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "bn"));

  select.innerHTML = '<option value="">সব উপজেলা</option>' +
    upazilas.map(upazila => `<option value="${escapeHTML(upazila)}">${escapeHTML(upazila)}</option>`).join("");
}

function getFilteredDonors() {
  const term = document.getElementById("searchInput").value.trim().toLocaleLowerCase("bn");
  const bloodGroup = document.getElementById("bloodFilter").value;
  const upazila = document.getElementById("upazilaFilter").value;
  const availableOnly = document.getElementById("availableOnly").checked;

  return donors.filter(donor => {
    const searchable = [donor.name, donor.district, donor.upazila, donor.area]
      .join(" ")
      .toLocaleLowerCase("bn");

    return (!term || searchable.includes(term)) &&
      (!bloodGroup || donor.bloodGroup === bloodGroup) &&
      (!upazila || donor.upazila === upazila) &&
      (!availableOnly || donor.available);
  });
}

function renderDonors() {
  const donorGrid = document.getElementById("donorGrid");
  const emptyState = document.getElementById("emptyState");
  const filtered = getFilteredDonors();

  donorGrid.innerHTML = filtered.map(donor => {
    const realPhone = donor.phone && !donor.phone.includes("X");
    const tel = realPhone ? donor.phone.replace(/\D/g, "") : "";
    return `
      <article class="donor-card">
        <div class="donor-head">
          <div>
            <h3>${escapeHTML(donor.name)}</h3>
            <p class="donor-location">${escapeHTML(donor.area)}, ${escapeHTML(donor.upazila)}</p>
            <span class="status ${donor.available ? "available" : "unavailable"}">
              ${donor.available ? "বর্তমানে উপলভ্য" : "বর্তমানে অনুপলভ্য"}
            </span>
          </div>
          <span class="blood-badge">${escapeHTML(donor.bloodGroup)}</span>
        </div>
        <div class="donor-info">
          <div><span>জেলা</span><strong>${escapeHTML(donor.district)}</strong></div>
          <div><span>শেষ রক্তদান</span><strong>${formatDate(donor.lastDonation)}</strong></div>
          <div><span>যোগাযোগ</span><strong>${escapeHTML(donor.phone)}</strong></div>
        </div>
        ${donor.demo ? '<span class="demo-badge">ডেমো তথ্য</span>' : donor.verified ? '<span class="demo-badge">যাচাইকৃত</span>' : ""}
        <a class="phone-link ${!realPhone || !donor.available ? "disabled" : ""}"
           href="${realPhone ? `tel:${tel}` : "#"}"
           aria-disabled="${!realPhone || !donor.available}">
          ${realPhone && donor.available ? "কল করুন" : "যোগাযোগ নম্বর প্রকাশিত নয়"}
        </a>
      </article>
    `;
  }).join("");

  emptyState.hidden = filtered.length !== 0;
  document.getElementById("resultCount").textContent = bnNumber(filtered.length);

  const labels = [];
  const blood = document.getElementById("bloodFilter").value;
  const upazila = document.getElementById("upazilaFilter").value;
  const term = document.getElementById("searchInput").value.trim();
  if (blood) labels.push(blood);
  if (upazila) labels.push(upazila);
  if (term) labels.push(`“${term}”`);
  if (document.getElementById("availableOnly").checked) labels.push("উপলভ্য");

  document.getElementById("activeFilterText").textContent =
    labels.length ? labels.join(" • ") : "সকল রক্তদাতা";
}

function bindFilters() {
  ["searchInput", "bloodFilter", "upazilaFilter", "availableOnly"].forEach(id => {
    document.getElementById(id).addEventListener(id === "searchInput" ? "input" : "change", renderDonors);
  });

  document.getElementById("resetFilters").addEventListener("click", () => {
    document.getElementById("searchInput").value = "";
    document.getElementById("bloodFilter").value = "";
    document.getElementById("upazilaFilter").value = "";
    document.getElementById("availableOnly").checked = false;
    renderDonors();
  });
}

function setupNavigation() {
  const button = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", event => {
    if (event.target.tagName === "A") {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    }
  });
}

function setupBackToTop() {
  const button = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    button.classList.toggle("show", window.scrollY > 700);
  });
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

document.getElementById("currentYear").textContent = bnNumber(new Date().getFullYear());
document.getElementById("donorCount").textContent = bnNumber(donors.length);

renderNotices();
populateUpazilaFilter();
bindFilters();
renderDonors();
setupNavigation();
setupBackToTop();

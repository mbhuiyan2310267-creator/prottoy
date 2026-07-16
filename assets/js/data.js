/*
  প্রত্যয় ওয়েবসাইটের তথ্য
  --------------------------------
  নতুন নোটিশ বা রক্তদাতা যোগ/পরিবর্তন করতে শুধু এই ফাইলটি সম্পাদনা করুন।
  গুরুত্বপূর্ণ: রক্তদাতার অনুমতি ছাড়া ব্যক্তিগত ফোন নম্বর প্রকাশ করবেন না।
*/

const notices = [
  {
    id: 1,
    title: "প্রত্যয় ওয়েবসাইটের পরীক্ষামূলক সংস্করণ প্রকাশ",
    date: "2026-07-15",
    category: "সাধারণ",
    important: true,
    description: "সংগঠনের পরিচিতি, কার্যক্রম, নোটিশ ও রক্তদাতা খোঁজার সুবিধাসহ ওয়েবসাইটটির পরীক্ষামূলক সংস্করণ প্রকাশ করা হয়েছে।"
  },
  {
    id: 2,
    title: "গঠনতন্ত্রের ২য় সংস্করণ ওয়েবসাইটে সংযুক্ত",
    date: "2026-07-15",
    category: "প্রশাসনিক",
    important: false,
    description: "প্রত্যয় সংগঠনের গঠনতন্ত্রের ২য় সংস্করণ এখন ওয়েবসাইট থেকে পড়া ও ডাউনলোড করা যাবে।"
  },
  {
    id: 3,
    title: "রক্তদাতা তালিকা হালনাগাদ চলছে",
    date: "2026-07-15",
    category: "রক্তদান",
    important: true,
    description: "সক্রিয় রক্তদাতাদের সম্মতি নিয়ে তালিকা হালনাগাদ করা হচ্ছে। নিচের ডেমো তথ্যগুলো আসল রক্তদাতা তথ্য নয়।"
  }
];

const donors = [
  {
    id: 2,
    name: "নমুনা রক্তদাতা ২",
    bloodGroup: "B+",
    district: "কুমিল্লা",
    upazila: "নাঙ্গলকোট",
    area: "বাঙ্গড্ডা",
    phone: "01XXXXXXXXX",
    available: true,
    lastDonation: "2026-01-22",
    verified: false,
    demo: true
  },
  {
    id: 3,
    name: "নমুনা রক্তদাতা ৩",
    bloodGroup: "O+",
    district: "কুমিল্লা",
    upazila: "নাঙ্গলকোট",
    area: "হেসাখাল",
    phone: "01XXXXXXXXX",
    available: false,
    lastDonation: "2026-05-01",
    verified: false,
    demo: true
  },
  {
    id: 4,
    name: "নমুনা রক্তদাতা ৪",
    bloodGroup: "AB+",
    district: "কুমিল্লা",
    upazila: "নাঙ্গলকোট",
    area: "রায়কোট",
    phone: "01XXXXXXXXX",
    available: true,
    lastDonation: "",
    verified: false,
    demo: true
  },
    {
    id: 1,
    name: "Zobaid Rafi",
    bloodGroup: "O+",
    district: "কুমিল্লা",
    upazila: "নাঙ্গলকোট",
    Donation Area: "Dhaka",
    phone: "01568249004",
    available: true,
    lastDonation: "2026-03-10",
    verified: false,
    demo: true
  },
];

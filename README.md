# প্রত্যয় সংগঠনের ওয়েবসাইট

এটি একটি সম্পূর্ণ static website। GitHub Pages-এ প্রকাশ করার জন্য Node.js, npm, database বা server লাগবে না।

## ওয়েবসাইটে যা আছে

- সংগঠনের পরিচিতি
- লক্ষ্য ও উদ্দেশ্য
- গঠনতন্ত্রে উল্লেখিত কার্যক্রম
- নোটিশ বোর্ড
- রক্তদাতার তালিকা
- নাম, রক্তের গ্রুপ, উপজেলা ও availability filter
- গঠনতন্ত্র পড়া ও PDF download
- Mobile ও desktop responsive design

## কম্পিউটারে দেখার নিয়ম

`index.html` ফাইলটি double-click করে browser-এ খুলুন।

## নতুন নোটিশ যোগ করার নিয়ম

এই ফাইলটি খুলুন:

```text
assets/js/data.js
```

`notices` তালিকার মধ্যে নিচের মতো নতুন তথ্য যোগ করুন:

```javascript
{
  id: 4,
  title: "নোটিশের শিরোনাম",
  date: "2026-07-20",
  category: "সাধারণ",
  important: true,
  description: "নোটিশের বিস্তারিত লিখুন।"
}
```

আগের item-এর শেষে comma দিতে ভুলবেন না।

## নতুন রক্তদাতা যোগ করার নিয়ম

একই `assets/js/data.js` ফাইলের `donors` তালিকায় যোগ করুন:

```javascript
{
  id: 5,
  name: "রক্তদাতার নাম",
  bloodGroup: "O+",
  district: "কুমিল্লা",
  upazila: "নাঙ্গলকোট",
  area: "এলাকার নাম",
  phone: "01700000000",
  available: true,
  lastDonation: "2026-01-15",
  verified: true,
  demo: false
}
```

### গুরুত্বপূর্ণ গোপনীয়তা নির্দেশনা

- রক্তদাতার স্পষ্ট অনুমতি ছাড়া ফোন নম্বর প্রকাশ করবেন না।
- NID, পূর্ণ ঠিকানা, জন্মতারিখ বা অন্য সংবেদনশীল তথ্য প্রকাশ করবেন না।
- রক্তদাতা বর্তমানে উপলভ্য না হলে `available: false` দিন।
- নমুনা data মুছে তারপর আসল তথ্য যোগ করুন।

## সংগঠনের যোগাযোগ তথ্য যোগ করা

`index.html` ফাইলের footer অংশে placeholder লেখা আছে। সেখানে সংগঠনের আসল:

- ফোন নম্বর
- ইমেইল
- Facebook page/group link
- অফিসের ঠিকানা

যোগ করুন।

## GitHub Pages-এ প্রকাশ

1. GitHub-এ login করুন।
2. `prottoy` নামে নতুন public repository তৈরি করুন।
3. এই project-এর সব file repository-তে upload করুন।
4. Repository-এর `Settings` খুলুন।
5. বাম পাশ থেকে `Pages` নির্বাচন করুন।
6. `Build and deployment`-এ `Deploy from a branch` নির্বাচন করুন।
7. Branch হিসেবে `main` এবং folder হিসেবে `/ (root)` নির্বাচন করুন।
8. `Save` চাপুন।
9. কিছুক্ষণ পরে link হবে:

```text
https://YOUR-USERNAME.github.io/prottoy/
```

## Project structure

```text
prottoy-website/
├── index.html
├── .nojekyll
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── data.js
    │   └── app.js
    ├── images/
    │   └── prottoy-logo.png
    └── docs/
        └── prottoy-constitution-2nd-edition.pdf
```

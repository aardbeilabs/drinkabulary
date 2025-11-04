'use client';

const teamMembers = [
  {
    name: 'Finn',
    role: 'Founder & Owner',
    bio: 'A craft beer enthusiast from Oslo, Finn founded Valhalla Beer Club with a dream to bring the finest Nordic and international craft beers to Prague. With 15 years in the industry, he\'s passionate about creating a welcoming space where beer lovers can discover new favorites.',
    preferences: ['Imperial Stouts', 'Belgian Tripels', 'Barrel-aged']
  },
  {
    name: 'Serghei',
    role: 'Administrator',
    bio: 'Originally from Moldova, Serghei brings precision and organization to everything at Valhalla. He manages the day-to-day operations and ensures our beer selection stays fresh and exciting. His meticulous attention to detail keeps everything running smoothly behind the scenes.',
    preferences: ['Czech Pilsners', 'German Lagers', 'Session IPAs']
  },
  {
    name: 'Eitan',
    role: 'Administrator',
    bio: 'Tel Aviv native Eitan handles our social media, events, and customer experience. His vibrant personality and deep knowledge of craft beer culture make him a favorite among regulars. He\'s always excited to share stories about the breweries we partner with.',
    preferences: ['Hazy IPAs', 'Fruit Sours', 'Wheat Beers']
  },
  {
    name: 'Pol',
    role: 'Head Bartender',
    bio: 'Barcelona-born Pol is the heart of our bar. With expert knowledge of every beer on tap and an incredible ability to match customers with their perfect pint, he\'s the person you want serving you. His friendly demeanor and quick wit make every visit memorable.',
    preferences: ['American IPAs', 'Brown Ales', 'Porters']
  },
];

export default function TeamInfo() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 viking:text-[#F5E6D3] mt-12 mb-6 text-center">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-stone-800 viking:bg-[#3D2B1F] rounded-lg shadow-lg viking:shadow-[#8B1A1A]/30 p-6 hover:shadow-xl viking:hover:shadow-[#CD7F32]/40 transition-all viking:border viking:border-[#5C4A35]"
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 viking:text-[#F5E6D3] mb-1">{member.name}</h3>
                <p className="text-stone-600 dark:text-stone-400 viking:text-[#D4BFA0] font-medium mb-3">{member.role}</p>
              </div>
            </div>
            <p className="text-stone-700 dark:text-stone-300 viking:text-[#D4BFA0] mb-4">{member.bio}</p>
            <div>
              <h4 className="font-semibold text-stone-800 dark:text-stone-100 viking:text-[#F5E6D3] mb-2">Beer Preferences:</h4>
              <div className="flex flex-wrap gap-2">
                {member.preferences.map((pref, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-amber-100 dark:bg-amber-900 viking:bg-[#8B1A1A] text-amber-800 dark:text-amber-200 viking:text-[#F5E6D3] rounded-full text-sm"
                  >
                    {pref}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



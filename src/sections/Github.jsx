import React, { useEffect, useState } from 'react';

const cellColor = (level) => {
  switch (level) {
    case 1: return 'bg-[#0D4F3C]';
    case 2: return 'bg-[#0D7C5F]';
    case 3: return 'bg-[#20A87C]';
    case 4: return 'bg-[#64FFDA]';
    default: return 'bg-[#112240]';
  }
};

const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

export const Github = () => {
  const USERNAME = 'Abhisheksingh10734';
  const [userData, setUserData] = useState(null);
  const [contributions, setContributions] = useState([]);
  const [totalContribs, setTotalContribs] = useState(0);
  const [monthLabels, setMonthLabels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [graphLoading, setGraphLoading] = useState(true);

  // GitHub REST API — profile data
  useEffect(() => {
    fetch(`https://api.github.com/users/${USERNAME}`)
      .then(res => res.json())
      .then(data => { setUserData(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  // github-contributions-api — real contribution data, no token needed
  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
      .then(res => res.json())
      .then(data => {
        // data.contributions = array of { date, count, level }
        const allDays = data.contributions; // 365 days
        setTotalContribs(data.total?.lastYear ?? allDays.reduce((s, d) => s + d.count, 0));

        // Group into weeks (7 days each)
        const weeks = [];
        for (let i = 0; i < allDays.length; i += 7) {
          weeks.push(allDays.slice(i, i + 7));
        }
        setContributions(weeks);

        // Extract month labels from first day of each week
        const seen = new Set();
        const labels = weeks.map((week) => {
          const month = new Date(week[0].date).toLocaleString('default', { month: 'short' });
          if (!seen.has(month)) { seen.add(month); return month; }
          return '';
        });
        setMonthLabels(labels);
        setGraphLoading(false);
      })
      .catch(() => setGraphLoading(false));
  }, []);

  return (
    <div id='github' className='px-6 md:px-16 py-20 bg-[#0A1628] text-white flex flex-col gap-12'>

      {/* Section Header */}
      <div className='flex flex-col gap-2'>
        <h4 className='text-[#64FFDA] font-mono tracking-widest text-sm'>// 03. activity</h4>
        <div className='flex gap-4 items-center'>
          <h1 className='text-2xl md:text-3xl font-bold text-[#CCD6F6] whitespace-nowrap'>GitHub Activity</h1>
          <div className='flex-1 max-w-xs bg-[#1E3A5F] h-px' />
        </div>
      </div>

      <div className='bg-[#112240] border border-[#1E3A5F] rounded-2xl p-6 md:p-8 flex flex-col gap-8'>

        {/* Profile row */}
        <div className='flex items-center gap-4'>
          {loading ? (
            <div className='w-14 h-14 rounded-full bg-[#1E3A5F] animate-pulse' />
          ) : (
            <img
              src={userData?.avatar_url}
              alt={userData?.login}
              className='w-14 h-14 rounded-full border-2 border-[#1E3A5F]'
            />
          )}
          <div className='flex flex-col gap-1'>
            {loading ? (
              <div className='w-32 h-4 bg-[#1E3A5F] rounded animate-pulse' />
            ) : (
              <>
                <h3 className='text-[#CCD6F6] font-semibold text-base'>
                  {userData?.name || userData?.login}
                </h3>
                <a
                  href={userData?.html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='text-[#8892B0] text-sm font-mono hover:text-[#64FFDA] transition-colors duration-200'
                >
                  <span className='hidden sm:inline'>github.com/{USERNAME}</span>
                  <span className='sm:hidden'>@{USERNAME}</span>
                </a>
              </>
            )}
          </div>
        </div>

        {/* Contribution Graph */}
        <div className='flex flex-col gap-2'>
          <p className='text-[#8892B0] text-sm'>
            <span className='text-[#64FFDA] font-bold text-base'>{totalContribs}</span> contributions in the last year
          </p>

          {graphLoading ? (
            <div className='w-full h-24 bg-[#0A1628] rounded-xl animate-pulse' />
          ) : (
            <div className='overflow-x-auto pb-2'>

              {/* Month labels */}
              <div className='flex gap-[3px] pl-8 mb-1'>
                {monthLabels.map((m, i) => (
                  <div key={i} className='text-[#64748B] text-[10px] font-mono w-[14px] flex-shrink-0'>{m}</div>
                ))}
              </div>

              {/* Day labels + cells */}
              <div className='flex gap-[3px]'>
                <div className='flex flex-col gap-[3px] mr-1'>
                  {dayLabels.map((d, i) => (
                    <div key={i} className='text-[#64748B] text-[10px] font-mono w-7 text-right h-[11px] leading-[11px]'>{d}</div>
                  ))}
                </div>
                {contributions.map((week, wi) => (
                  <div key={wi} className='flex flex-col gap-[3px]'>
                    {week.map((day, di) => (
                      <div
                        key={di}
                        title={`${day.date}: ${day.count} contributions`}
                        className={`w-[11px] h-[11px] rounded-sm flex-shrink-0 cursor-pointer ${cellColor(day.level)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className='flex items-center gap-2 justify-end mt-2'>
                <span className='text-[#64748B] text-[10px] font-mono'>Less</span>
                {[0, 1, 2, 3, 4].map((l) => (
                  <div key={l} className={`w-[11px] h-[11px] rounded-sm ${cellColor(l)}`} />
                ))}
                <span className='text-[#64748B] text-[10px] font-mono'>More</span>
              </div>
            </div>
          )}
        </div>

        {/* Stats — real from API */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {[
            { label: 'Public Repos', value: userData?.public_repos },
            { label: 'Followers', value: userData?.followers },
            { label: 'Following', value: userData?.following },
            { label: 'Gists', value: userData?.public_gists },
          ].map((stat) => (
            <div
              key={stat.label}
              className='bg-[#0A1628] border border-[#1E3A5F] rounded-xl px-4 py-5 flex flex-col items-center gap-1
                         hover:border-[#64FFDA] hover:shadow-[0_0_20px_rgba(100,255,218,0.08)]
                         transition-all duration-300 group'
            >
              {loading ? (
                <div className='w-10 h-7 bg-[#1E3A5F] rounded animate-pulse' />
              ) : (
                <span className='text-2xl font-bold text-[#64FFDA] group-hover:scale-110 transition-transform duration-300'>
                  {stat.value ?? '—'}
                </span>
              )}
              <span className='text-[#8892B0] text-xs text-center'>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Streak + activity graph */}
        <div className='flex flex-col gap-4'>
          <img
            src={`https://github-readme-streak-stats.herokuapp.com?user=${USERNAME}&background=0A1628&ring=64FFDA&fire=64FFDA&currStreakLabel=64FFDA&border=1E3A5F&sideLabels=8892B0&dates=8892B0&sideNums=CCD6F6&currStreakNum=CCD6F6&border_radius=12`}
            alt="GitHub Streak"
            className='w-full rounded-xl'
            onError={(e) => e.target.style.display = 'none'}
          />
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${USERNAME}&bg_color=0A1628&color=64FFDA&line=64FFDA&point=CCD6F6&area=true&area_color=64FFDA&border_radius=12`}
            alt="Contribution Graph"
            className='w-full rounded-xl'
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>

      </div>
    </div>
  );
};
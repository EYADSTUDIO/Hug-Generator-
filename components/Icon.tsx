import React from 'react';

interface IconProps {
  name: 'hug' | 'person1' | 'person2' | 'sparkles' | 'sunset' | 'forest' | 'beach' | 'square' | 'landscape' | 'portrait' | 'download' | 'qualityStandard' | 'qualityHigh' | 'space' | 'underwater' | 'castle' | 'aurora' | 'mountains' | 'sakura' | 'rainyCity' | 'balloons' | 'hugTight' | 'hugSide' | 'hugPlayful';
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className = 'w-6 h-6' }) => {
  // Fix: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  const icons: Record<string, React.ReactElement> = {
    hug: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 0 1 0 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M12 12l-2.828-2.828a4.5 4.5 0 0 0-6.364 6.364l6.364-6.364zm-2.828 2.828l6.364 6.364a4.5 4.5 0 0 0 6.364-6.364l-6.364 6.364z" />
      </svg>
    ),
    person1: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    ),
    person2: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
    ),
    sparkles: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
        </svg>
    ),
    sunset: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636m12.728 0-1.591 1.591" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-18 0-1.5-1.5m1.5 1.5 1.5-1.5m13.5 0-1.5-1.5m1.5 1.5 1.5-1.5" />
        </svg>
    ),
    forest: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M18.75 14.25v6a3 3 0 0 1-3 3h-1.5a3 3 0 0 1-3-3v-6m0 0a3 3 0 0 0 3-3h1.5a3 3 0 0 0 3 3m-3.75 0h.008v.015h-.008V14.25Z" />
        </svg>
    ),
    beach: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75c-3 0-5.625-1.002-7.44-2.625" />
        </svg>
    ),
    square: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
      </svg>
    ),
    landscape: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h12A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6Z" />
      </svg>
    ),
    portrait: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.75A2.25 2.25 0 0 1 8.25 1.5h7.5A2.25 2.25 0 0 1 18 3.75v16.5A2.25 2.25 0 0 1 15.75 22.5h-7.5A2.25 2.25 0 0 1 6 20.25V3.75Z" />
      </svg>
    ),
    download: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    qualityStandard: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    qualityHigh: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    space: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 7.125a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 11.25a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
    underwater: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75c.621 0 1.242-.152 1.815-.435l.488-.292c.573-.342 1.233-.513 1.9-.513s1.327.171 1.9.513l.488.292c.573.283 1.194.435 1.815.435h.01c.621 0 1.242-.152 1.815-.435l.488-.292c.573-.342 1.233-.513 1.9-.513s1.327.171 1.9.513l.488.292c.573.283 1.194.435 1.815.435h.009" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 14.25c.621 0 1.242-.152 1.815-.435l.488-.292c.573-.342 1.233-.513 1.9-.513s1.327.171 1.9.513l.488.292c.573.283 1.194.435 1.815.435h.01c.621 0 1.242-.152 1.815-.435l.488-.292c.573-.342 1.233-.513 1.9-.513s1.327.171 1.9.513l.488.292c.573.283 1.194.435 1.815.435h.009" />
        </svg>
    ),
    castle: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M8.25 21H3v-8.25M12 12.75h3.75V9.75H12v3Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.545v3.013l-3.375-.675v-3.013l3.375.675Z" />
        </svg>
    ),
    aurora: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25c2.25 3 6 3 8.25 0S17.25 5.25 19.5 8.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12c2.25 3 6 3 8.25 0s6-3 8.25 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 15.75c2.25 3 6 3 8.25 0s6-3 8.25 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 3.375a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 6a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 5.25a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
    mountains: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0L6.75 12.75l5.25 5.25 4.5-4.5 3 3" />
      </svg>
    ),
    sakura: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v3" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.95 5.05l-2.122 2.121" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12h-3" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.95 18.95l-2.122-2.121" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25v-3" /><path strokeLinecap="round" strokeLinejoin="round" d="M7.05 18.95l2.122-2.121" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h3" /><path strokeLinecap="round" strokeLinejoin="round" d="M7.05 5.05l2.122 2.121" />
      </svg>
    ),
    rainyCity: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75h19.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 18.75h12" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 21.75h6" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v10.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.142 0-7.5 3.358-7.5 7.5 0 1.95.742 3.725 1.966 5.034" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4.142 0 7.5 3.358 7.5 7.5 0 1.95-.742 3.725-1.966 5.034" /><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75" />
      </svg>
    ),
    balloons: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75c-3.125 0-5.625-2.008-5.625-4.5S8.875.75 12 .75s5.625 2.008 5.625 4.5S15.125 9.75 12 9.75Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v2.25m-3-4.5v2.25m6-2.25v2.25" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 20.25h6" />
      </svg>
    ),
    hugTight: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.25v6.75a2.25 2.25 0 0 0 2.25 2.25h1.5a2.25 2.25 0 0 0 2.25-2.25v-6.75" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 14.25c-1.5 0-2.25-1.5-2.25-3s.75-3 2.25-3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 14.25c1.5 0 2.25-1.5 2.25-3s-.75-3-2.25-3" />
        </svg>
    ),
    hugSide: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 21V10.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 21V10.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.375 12c4-1.5 7.25-1.5 11.25 0" />
        </svg>
    ),
    hugPlayful: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V11.25" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75h7.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 12.75 8.25 15.75" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 12.75 15.75 15.75" />
        </svg>
    )
  };

  return icons[name] || <div />;
};
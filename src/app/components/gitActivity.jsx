import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubActivityCalendar = ({ username }) => {
  return (
    <div>
      <GitHubCalendar username={username} />
    </div>
  );
};

export default GithubActivityCalendar;

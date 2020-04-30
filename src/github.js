const fetch = require('node-fetch');
const API_URL = 'https://api.github.com';

async function getActivity (username, repo) {
  return await get(`/repos/${username}/${repo}/dev-recipes/stats/commit_activity`);
}

async function getRemainingRequests() {
  const status = await get(`/rate_limit`);
  return status.rate.remaining;
}

async function getCommitsCount (username, repo) {
  const contributors = await get(`/repos/${username}/${repo}/contributors`)
  let count = 0;
  for (let c of contributors) {
    count += c.contributions;
  }
  return count;
}

async function getRepoInfo (username) {
  const repos = await get(`/users/${username}/repos`);
  let languages = {};
  // count language occurrences
  for (let r of repos) {
    const lang = r.language;
    if (!languages[lang]) {
      languages[lang] = 1;
    } else {
      languages[lang]++;
    }
  }
  // count total commits
  let totalCommits = 0;
  const commits = await Promise.all(
    repos.map(r => getCommitsCount(username, r.name))
  );
  for (let c of commits) {
    totalCommits += c;
  }
  // calculate language percentages
  let total = 0;
  for (let lang in languages) {
    total += languages[lang];
  }
  let languageStats = [];
  for (let lang in languages) {
    languageStats.push({
      name: lang || 'Other',
      percentage: (languages[lang] / total) * 100
    });
  }
  return {
    commits: totalCommits,
    languages: languageStats
  }
}

async function getUserInfo (username) {
  const user = await get(`/users/${username}`);
  const followers = await get(`/users/${username}/followers`);

  return {
    avatar: user.avatar_url,
    username: user.login,
    fullName: user.name,
    followers: followers.length,
    bio: user.bio,
    registered: new Date(user.created_at),
  }
}

async function get (path) {
  try {
    const url = API_URL + path;
    const response = await fetch(url, {
      mode: 'cors',
    });
    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}

module.exports = {
  getUserInfo,
  getRepoInfo
}

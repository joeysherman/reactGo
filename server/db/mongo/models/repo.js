/**
 * Created by Joey on 6/23/2017.
 */

/**
 * Defining a Repo Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

import mongoose from 'mongoose';

/*
 Repo Schema
 */

const RepoSchema = new mongoose.Schema({
    github: {

    },
});

export default mongoose.model('Repo', RepoSchema);

/**
 * Repo -> Messages
 *
 *
 *
 *
 */

/**
 *  Single Repo Schema

 {
    "id": 87280279,
    "name": "admin-on-rest",
    "full_name": "joeysherman/admin-on-rest",
    "owner": {
        "login": "joeysherman",
        "id": 18039561,
        "avatar_url": "https://avatars1.githubusercontent.com/u/18039561?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/joeysherman",
        "html_url": "https://github.com/joeysherman",
        "followers_url": "https://api.github.com/users/joeysherman/followers",
        "following_url": "https://api.github.com/users/joeysherman/following{/other_user}",
        "gists_url": "https://api.github.com/users/joeysherman/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/joeysherman/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/joeysherman/subscriptions",
        "organizations_url": "https://api.github.com/users/joeysherman/orgs",
        "repos_url": "https://api.github.com/users/joeysherman/repos",
        "events_url": "https://api.github.com/users/joeysherman/events{/privacy}",
        "received_events_url": "https://api.github.com/users/joeysherman/received_events",
        "type": "User",
        "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/joeysherman/admin-on-rest",
    "description": "A frontend framework for building admin SPAs on top of REST services, using React and Material Design",
    "fork": true,
    "url": "https://api.github.com/repos/joeysherman/admin-on-rest",
    "forks_url": "https://api.github.com/repos/joeysherman/admin-on-rest/forks",
    "keys_url": "https://api.github.com/repos/joeysherman/admin-on-rest/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/joeysherman/admin-on-rest/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/joeysherman/admin-on-rest/teams",
    "hooks_url": "https://api.github.com/repos/joeysherman/admin-on-rest/hooks",
    "issue_events_url": "https://api.github.com/repos/joeysherman/admin-on-rest/issues/events{/number}",
    "events_url": "https://api.github.com/repos/joeysherman/admin-on-rest/events",
    "assignees_url": "https://api.github.com/repos/joeysherman/admin-on-rest/assignees{/user}",
    "branches_url": "https://api.github.com/repos/joeysherman/admin-on-rest/branches{/branch}",
    "tags_url": "https://api.github.com/repos/joeysherman/admin-on-rest/tags",
    "blobs_url": "https://api.github.com/repos/joeysherman/admin-on-rest/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/joeysherman/admin-on-rest/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/joeysherman/admin-on-rest/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/joeysherman/admin-on-rest/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/joeysherman/admin-on-rest/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/joeysherman/admin-on-rest/languages",
    "stargazers_url": "https://api.github.com/repos/joeysherman/admin-on-rest/stargazers",
    "contributors_url": "https://api.github.com/repos/joeysherman/admin-on-rest/contributors",
    "subscribers_url": "https://api.github.com/repos/joeysherman/admin-on-rest/subscribers",
    "subscription_url": "https://api.github.com/repos/joeysherman/admin-on-rest/subscription",
    "commits_url": "https://api.github.com/repos/joeysherman/admin-on-rest/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/joeysherman/admin-on-rest/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/joeysherman/admin-on-rest/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/joeysherman/admin-on-rest/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/joeysherman/admin-on-rest/contents/{+path}",
    "compare_url": "https://api.github.com/repos/joeysherman/admin-on-rest/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/joeysherman/admin-on-rest/merges",
    "archive_url": "https://api.github.com/repos/joeysherman/admin-on-rest/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/joeysherman/admin-on-rest/downloads",
    "issues_url": "https://api.github.com/repos/joeysherman/admin-on-rest/issues{/number}",
    "pulls_url": "https://api.github.com/repos/joeysherman/admin-on-rest/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/joeysherman/admin-on-rest/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/joeysherman/admin-on-rest/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/joeysherman/admin-on-rest/labels{/name}",
    "releases_url": "https://api.github.com/repos/joeysherman/admin-on-rest/releases{/id}",
    "deployments_url": "https://api.github.com/repos/joeysherman/admin-on-rest/deployments",
    "created_at": "2017-04-05T07:33:53Z",
    "updated_at": "2017-04-05T07:33:55Z",
    "pushed_at": "2017-04-05T06:58:21Z",
    "git_url": "git://github.com/joeysherman/admin-on-rest.git",
    "ssh_url": "git@github.com:joeysherman/admin-on-rest.git",
    "clone_url": "https://github.com/joeysherman/admin-on-rest.git",
    "svn_url": "https://github.com/joeysherman/admin-on-rest",
    "homepage": "http://marmelab.com/admin-on-rest",
    "size": 6703,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "JavaScript",
    "has_issues": false,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "parent": {
        "id": 63226588,
        "name": "admin-on-rest",
        "full_name": "marmelab/admin-on-rest",
        "owner": {
            "login": "marmelab",
            "id": 3116319,
            "avatar_url": "https://avatars2.githubusercontent.com/u/3116319?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/marmelab",
            "html_url": "https://github.com/marmelab",
            "followers_url": "https://api.github.com/users/marmelab/followers",
            "following_url": "https://api.github.com/users/marmelab/following{/other_user}",
            "gists_url": "https://api.github.com/users/marmelab/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/marmelab/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/marmelab/subscriptions",
            "organizations_url": "https://api.github.com/users/marmelab/orgs",
            "repos_url": "https://api.github.com/users/marmelab/repos",
            "events_url": "https://api.github.com/users/marmelab/events{/privacy}",
            "received_events_url": "https://api.github.com/users/marmelab/received_events",
            "type": "Organization",
            "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/marmelab/admin-on-rest",
        "description": "A frontend framework for building admin SPAs on top of REST services, using React and Material Design",
        "fork": false,
        "url": "https://api.github.com/repos/marmelab/admin-on-rest",
        "forks_url": "https://api.github.com/repos/marmelab/admin-on-rest/forks",
        "keys_url": "https://api.github.com/repos/marmelab/admin-on-rest/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/marmelab/admin-on-rest/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/marmelab/admin-on-rest/teams",
        "hooks_url": "https://api.github.com/repos/marmelab/admin-on-rest/hooks",
        "issue_events_url": "https://api.github.com/repos/marmelab/admin-on-rest/issues/events{/number}",
        "events_url": "https://api.github.com/repos/marmelab/admin-on-rest/events",
        "assignees_url": "https://api.github.com/repos/marmelab/admin-on-rest/assignees{/user}",
        "branches_url": "https://api.github.com/repos/marmelab/admin-on-rest/branches{/branch}",
        "tags_url": "https://api.github.com/repos/marmelab/admin-on-rest/tags",
        "blobs_url": "https://api.github.com/repos/marmelab/admin-on-rest/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/marmelab/admin-on-rest/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/marmelab/admin-on-rest/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/marmelab/admin-on-rest/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/marmelab/admin-on-rest/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/marmelab/admin-on-rest/languages",
        "stargazers_url": "https://api.github.com/repos/marmelab/admin-on-rest/stargazers",
        "contributors_url": "https://api.github.com/repos/marmelab/admin-on-rest/contributors",
        "subscribers_url": "https://api.github.com/repos/marmelab/admin-on-rest/subscribers",
        "subscription_url": "https://api.github.com/repos/marmelab/admin-on-rest/subscription",
        "commits_url": "https://api.github.com/repos/marmelab/admin-on-rest/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/marmelab/admin-on-rest/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/marmelab/admin-on-rest/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/marmelab/admin-on-rest/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/marmelab/admin-on-rest/contents/{+path}",
        "compare_url": "https://api.github.com/repos/marmelab/admin-on-rest/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/marmelab/admin-on-rest/merges",
        "archive_url": "https://api.github.com/repos/marmelab/admin-on-rest/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/marmelab/admin-on-rest/downloads",
        "issues_url": "https://api.github.com/repos/marmelab/admin-on-rest/issues{/number}",
        "pulls_url": "https://api.github.com/repos/marmelab/admin-on-rest/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/marmelab/admin-on-rest/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/marmelab/admin-on-rest/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/marmelab/admin-on-rest/labels{/name}",
        "releases_url": "https://api.github.com/repos/marmelab/admin-on-rest/releases{/id}",
        "deployments_url": "https://api.github.com/repos/marmelab/admin-on-rest/deployments",
        "created_at": "2016-07-13T07:58:54Z",
        "updated_at": "2017-06-23T06:11:01Z",
        "pushed_at": "2017-06-23T07:32:58Z",
        "git_url": "git://github.com/marmelab/admin-on-rest.git",
        "ssh_url": "git@github.com:marmelab/admin-on-rest.git",
        "clone_url": "https://github.com/marmelab/admin-on-rest.git",
        "svn_url": "https://github.com/marmelab/admin-on-rest",
        "homepage": "http://marmelab.com/admin-on-rest",
        "size": 9693,
        "stargazers_count": 1799,
        "watchers_count": 1799,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": false,
        "has_pages": true,
        "forks_count": 319,
        "mirror_url": null,
        "open_issues_count": 28,
        "forks": 319,
        "open_issues": 28,
        "watchers": 1799,
        "default_branch": "master"
    },
    "source": {
        "id": 63226588,
        "name": "admin-on-rest",
        "full_name": "marmelab/admin-on-rest",
        "owner": {
            "login": "marmelab",
            "id": 3116319,
            "avatar_url": "https://avatars2.githubusercontent.com/u/3116319?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/marmelab",
            "html_url": "https://github.com/marmelab",
            "followers_url": "https://api.github.com/users/marmelab/followers",
            "following_url": "https://api.github.com/users/marmelab/following{/other_user}",
            "gists_url": "https://api.github.com/users/marmelab/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/marmelab/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/marmelab/subscriptions",
            "organizations_url": "https://api.github.com/users/marmelab/orgs",
            "repos_url": "https://api.github.com/users/marmelab/repos",
            "events_url": "https://api.github.com/users/marmelab/events{/privacy}",
            "received_events_url": "https://api.github.com/users/marmelab/received_events",
            "type": "Organization",
            "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/marmelab/admin-on-rest",
        "description": "A frontend framework for building admin SPAs on top of REST services, using React and Material Design",
        "fork": false,
        "url": "https://api.github.com/repos/marmelab/admin-on-rest",
        "forks_url": "https://api.github.com/repos/marmelab/admin-on-rest/forks",
        "keys_url": "https://api.github.com/repos/marmelab/admin-on-rest/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/marmelab/admin-on-rest/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/marmelab/admin-on-rest/teams",
        "hooks_url": "https://api.github.com/repos/marmelab/admin-on-rest/hooks",
        "issue_events_url": "https://api.github.com/repos/marmelab/admin-on-rest/issues/events{/number}",
        "events_url": "https://api.github.com/repos/marmelab/admin-on-rest/events",
        "assignees_url": "https://api.github.com/repos/marmelab/admin-on-rest/assignees{/user}",
        "branches_url": "https://api.github.com/repos/marmelab/admin-on-rest/branches{/branch}",
        "tags_url": "https://api.github.com/repos/marmelab/admin-on-rest/tags",
        "blobs_url": "https://api.github.com/repos/marmelab/admin-on-rest/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/marmelab/admin-on-rest/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/marmelab/admin-on-rest/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/marmelab/admin-on-rest/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/marmelab/admin-on-rest/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/marmelab/admin-on-rest/languages",
        "stargazers_url": "https://api.github.com/repos/marmelab/admin-on-rest/stargazers",
        "contributors_url": "https://api.github.com/repos/marmelab/admin-on-rest/contributors",
        "subscribers_url": "https://api.github.com/repos/marmelab/admin-on-rest/subscribers",
        "subscription_url": "https://api.github.com/repos/marmelab/admin-on-rest/subscription",
        "commits_url": "https://api.github.com/repos/marmelab/admin-on-rest/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/marmelab/admin-on-rest/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/marmelab/admin-on-rest/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/marmelab/admin-on-rest/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/marmelab/admin-on-rest/contents/{+path}",
        "compare_url": "https://api.github.com/repos/marmelab/admin-on-rest/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/marmelab/admin-on-rest/merges",
        "archive_url": "https://api.github.com/repos/marmelab/admin-on-rest/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/marmelab/admin-on-rest/downloads",
        "issues_url": "https://api.github.com/repos/marmelab/admin-on-rest/issues{/number}",
        "pulls_url": "https://api.github.com/repos/marmelab/admin-on-rest/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/marmelab/admin-on-rest/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/marmelab/admin-on-rest/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/marmelab/admin-on-rest/labels{/name}",
        "releases_url": "https://api.github.com/repos/marmelab/admin-on-rest/releases{/id}",
        "deployments_url": "https://api.github.com/repos/marmelab/admin-on-rest/deployments",
        "created_at": "2016-07-13T07:58:54Z",
        "updated_at": "2017-06-23T06:11:01Z",
        "pushed_at": "2017-06-23T07:32:58Z",
        "git_url": "git://github.com/marmelab/admin-on-rest.git",
        "ssh_url": "git@github.com:marmelab/admin-on-rest.git",
        "clone_url": "https://github.com/marmelab/admin-on-rest.git",
        "svn_url": "https://github.com/marmelab/admin-on-rest",
        "homepage": "http://marmelab.com/admin-on-rest",
        "size": 9693,
        "stargazers_count": 1799,
        "watchers_count": 1799,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": false,
        "has_pages": true,
        "forks_count": 319,
        "mirror_url": null,
        "open_issues_count": 28,
        "forks": 319,
        "open_issues": 28,
        "watchers": 1799,
        "default_branch": "master"
    },
    "network_count": 319,
    "subscribers_count": 1
}
 **/

/**
 *  All repos for user sample repo schema


 id: 88689232,
 name: este,
 full_name: joeysherman/este,
 owner: {
        login: joeysherman,
        id: 18039561,
        avatar_url: https://avatars1.githubusercontent.com/u/18039561?v=3,
        gravatar_id: ,
        url: https://api.github.com/users/joeysherman,
        html_url: https://github.com/joeysherman,
        followers_url: https://api.github.com/users/joeysherman/followers,
        following_url: https://api.github.com/users/joeysherman/following{/other_user},
        gists_url: https://api.github.com/users/joeysherman/gists{/gist_id},
        starred_url: https://api.github.com/users/joeysherman/starred{/owner}{/repo},
        subscriptions_url: https://api.github.com/users/joeysherman/subscriptions,
        organizations_url: https://api.github.com/users/joeysherman/orgs,
        repos_url: https://api.github.com/users/joeysherman/repos,
        events_url: https://api.github.com/users/joeysherman/events{/privacy},
        received_events_url: https://api.github.com/users/joeysherman/received_events,
        type: User,
        site_admin: false
    },
 private: false,
 html_url: https://github.com/joeysherman/este,
 description: Starter kit for universal full–fledged React apps. One stack for browser, mobile, server.,
 fork: true,
 url: https://api.github.com/repos/joeysherman/este,
 forks_url: https://api.github.com/repos/joeysherman/este/forks,
 keys_url: https://api.github.com/repos/joeysherman/este/keys{/key_id},
 collaborators_url: https://api.github.com/repos/joeysherman/este/collaborators{/collaborator},
 teams_url: https://api.github.com/repos/joeysherman/este/teams,
 hooks_url: https://api.github.com/repos/joeysherman/este/hooks,
 issue_events_url: https://api.github.com/repos/joeysherman/este/issues/events{/number},
 events_url: https://api.github.com/repos/joeysherman/este/events,
 assignees_url: https://api.github.com/repos/joeysherman/este/assignees{/user},
 branches_url: https://api.github.com/repos/joeysherman/este/branches{/branch},
 tags_url: https://api.github.com/repos/joeysherman/este/tags,
 blobs_url: https://api.github.com/repos/joeysherman/este/git/blobs{/sha},
 git_tags_url: https://api.github.com/repos/joeysherman/este/git/tags{/sha},
 git_refs_url: https://api.github.com/repos/joeysherman/este/git/refs{/sha},
 trees_url: https://api.github.com/repos/joeysherman/este/git/trees{/sha},
 statuses_url: https://api.github.com/repos/joeysherman/este/statuses/{sha},
 languages_url: https://api.github.com/repos/joeysherman/este/languages,
 stargazers_url: https://api.github.com/repos/joeysherman/este/stargazers,
 contributors_url: https://api.github.com/repos/joeysherman/este/contributors,
 subscribers_url: https://api.github.com/repos/joeysherman/este/subscribers,
 subscription_url: https://api.github.com/repos/joeysherman/este/subscription,
 commits_url: https://api.github.com/repos/joeysherman/este/commits{/sha},
 git_commits_url: https://api.github.com/repos/joeysherman/este/git/commits{/sha},
 comments_url: https://api.github.com/repos/joeysherman/este/comments{/number},
 issue_comment_url: https://api.github.com/repos/joeysherman/este/issues/comments{/number},
 contents_url: https://api.github.com/repos/joeysherman/este/contents/{+path},
 compare_url: https://api.github.com/repos/joeysherman/este/compare/{base}...{head},
 merges_url: https://api.github.com/repos/joeysherman/este/merges,
 archive_url: https://api.github.com/repos/joeysherman/este/{archive_format}{/ref},
 downloads_url: https://api.github.com/repos/joeysherman/este/downloads,
 issues_url: https://api.github.com/repos/joeysherman/este/issues{/number},
 pulls_url: https://api.github.com/repos/joeysherman/este/pulls{/number},
 milestones_url: https://api.github.com/repos/joeysherman/este/milestones{/number},
 notifications_url: https://api.github.com/repos/joeysherman/este/notifications{?since,all,participating},
 labels_url: https://api.github.com/repos/joeysherman/este/labels{/name},
 releases_url: https://api.github.com/repos/joeysherman/este/releases{/id},
 deployments_url: https://api.github.com/repos/joeysherman/este/deployments,
 created_at: 2017-04-19T02:02:34Z,
 updated_at: 2017-04-19T02:02:37Z,
 pushed_at: 2017-04-18T22:51:17Z,
 git_url: git://github.com/joeysherman/este.git,
 ssh_url: git@github.com:joeysherman/este.git,
 clone_url: https://github.com/joeysherman/este.git,
 svn_url: https://github.com/joeysherman/este,
 homepage: https://este.now.sh,
 size: 6551,
 stargazers_count: 0,
 watchers_count: 0,
 language: JavaScript,
 has_issues: false,
 has_projects: true,
 has_downloads: true,
 has_wiki: true,
 forks_count: 0,
 has_pages: false,
 mirror_url: null,
 open_issues_count: 0,
 forks: 0,
 open_issues: 0,
 watchers: 0,
 default_branch: master

 **/

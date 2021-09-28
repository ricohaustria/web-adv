# Advanced Github

## Pull Requests

[GitHub Flow](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/github-flow)

## Git-flow

GitFlow is a branching model for Git, created by Vincent Driessen. It has attracted a lot of attention because it is very well suited to collaboration and scaling the development team.

[Git-flow Intoduction & Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)

![git-flow](_images/git-flow.png)

> Note: Require GIT 2.24.0+ - Check with `git --version`

Initialize repo for gitflow:

```
git flow init
```

Start a new feature:

```
git flow feature start MYFEATURE
```

Finish feature:

```
git flow feature finish MYFEATURE
```

Publish a feature:

```
git flow feature publish  MYFEATURE
```

Start a release:

```
git flow release start RELEASE
```

Finish a release:

```
git flow release finish  RELEASE
```

## Additional Labs & Walkthroughs

[Introduction to Git](https://docs.microsoft.com/en-us/learn/modules/intro-to-git/)

[Learning Path - Introduction to version control with Git](https://docs.microsoft.com/en-us/learn/paths/intro-to-vc-git/)

[Manage repository changes by using pull requests on GitHub](https://docs.microsoft.com/en-us/learn/modules/manage-changes-pull-requests-github/)

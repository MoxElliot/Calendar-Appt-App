 # *GitFlow Branching Strategy*
##  **Two Long Branches**
    - Main: Production ready code 
    - Feature: Created off Main branch for each feature added to project

## **Feature Branch Workflow**
    1.	Create branch for new feature: git checkout –b feature_name
        a.	feature_name should be a descriptive title (i.e. navigation-bar-component, portfolio-route, portfolio-preview-component)
        b.  commit, then 'git push origin feature_name' to push to github
    2.	Write code, adding/committing as usual to local
        a.	Final Feature Ready Commit: git commit –m “Feature Ready”
    3.	Regularly push work to remote: git push origin feature_name
        a.	Must push before creating a pull requ
    4.	Open pull request: gh pr create --assignee “@me” --base main --head feature_name
        a.	Default --head is current branch
        b.	Can add title and body to pull request
            i.	--title “Pull Request Comment Title”
            ii.	--body “Pull Request Comment Body”
    5.	Code can be reviewed, tested, etc.
    6.	When production ready, merge feature_name back into main
        a.	Switch to main branch: git checkout main
        b.	gh pr merge feature_name -d -s 
            i.	without argument defaults to current branch
            ii.	-d deletes local and remote branch after merge
            iii.	-s squashes the commits into one commit and merge into base branch
    7.	Pull remote main to local main to update local
        a.	git pull origin main

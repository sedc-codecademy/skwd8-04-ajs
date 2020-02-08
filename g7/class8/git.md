# Git ☕
Git is a technology that lets developers keep, monitor and organize versions of their code. Almost all developers use some kind of source control technolgy and the most widely used is actually git. Not only does git help with versioning of software, but it also helps developers to work together on a single project without having much synchronization issues. It is almost impossible to work with a lot of people on a project without some kind of version control tool. Sicne git is just the technology, and not the whole system, there are companies that provide git interface and servers as a service. Some of the most famous services are:
* [GitHub](https://github.com/)
* [BitBucket](https://bitbucket.org/)
* [GitLab](https://gitlab.com/)
## Features 
* Repositories - Area to store your code in, they act as main folders and there we can upload and manage the code for a project or just code for some specific goal. The repository exists on the server of the service you are using for working with git. In order to start using this you have to clone the repository on your local machine
* Keeping track - When we clone a repository on our machine we can change the code and reorganize stuff. All these changes are tracked locally. If you want to add all the changes on the server repository you will have to write some commands to get the new code from the local machine to the server
* Patching code from different sources - Git can compare and patch the code from 2 sources if the code was not in the same place. This is very helpfull for working on projects in a team. If the changes are in the same place and on the same line, then git will give the last user that is uploading some code a conflict and a chance to decide what code should go up on the server as a last version. This is called resolving conflicts
* Keeping different versions of the code - Git can also keep different versions of the code at the same time. That is called branching. Each branch is a version of the code that is being worked on in paralel
## Workflow
When people work on git they must always take care of the main branch on the server called the master branch. Usually developers open other branches for development and experimentation and leave the last stable and tested version that is actually live and works on the master branch. Each time a developer wants to start working on a feature they need to:
* Get the latest code from the server ( pull )
* Develop some stuff locally
* Insert their code to the local repository as done ( commit )
* Pull to see if there were any changes that happened on the server while they were developing the feature
* If there are changes and conflicts resolve them
* Insert their code to the server repository as done ( push )
## Git Resources
* [Lengthy but in depth article on git features](https://dev.to/unseenwizzard/learn-git-concepts-not-commands-4gjc)
* [Git crash-course](https://dev.to/chrisachard/confused-by-git-here-s-a-git-crash-course-to-fix-that-4cmi)
* [Git explain like I'm 5](https://hackernoon.com/understanding-git-fcffd87c15a3)
* [Understaindg the basics of Git](https://medium.com/faun/understanding-git-basics-commands-tips-tricks-da0c05db411f)

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), and use Github Pages for the hosting.

## Update
The docs will be automaticaly updated when a merge happen in the main branch.

**Warning**
If you add a new lib into the Nx workspace, don't forget to add the lib name into the array of libs into the [doc.sh](../scripts/doc.sh) script

You can also update the doc by yourself by following these steps :

- First be sur to install all the dependencies of the Docusaurus project on the docs folder using `npm install`
- If you add a new lib into the project, add the new lib name you've created into the array of libs into the [doc.sh](../scripts/doc.sh) script 
- On the root of the project you can launch the [doc.sh](../scripts/doc.sh) script using `npm run doc:compilation`, it will automaticaly compile all the typescript files of the libs into a well structured documentation folder on the Docusaurus project.
- Then you have to fill the [docusaurus.config.js](./docusaurus.config.js) file by following the steps of the [Docusaurus deployment doc](https://docusaurus.io/fr/docs/deployment#docusaurusconfigjs-settings) .
- Once the Docusaurus project is complete, be sure to have you're github username as a **GIT_USER** env variable, and then you can deploy it using `npm run doc:deploy`, the build of the Docusaurus project will automaticaly be merge into the *gh-pages* branch, and will be deploy following the informations you gave in the [docusaurus.config](./docusaurus.config.js) file.

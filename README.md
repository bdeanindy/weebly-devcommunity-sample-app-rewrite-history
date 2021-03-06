# Weebly DevCommunity - Sample App - Rewrite History

Simple Node.js application to see if a Weebly Element can modify `window.history`.

## Getting Started

See Deployment for instructions to deploy this to your Weebly Developer Test Site.

### Prerequisites

It is expected that you already have a Weebly Developer Account and can login to the [Weebly Developer Admin](https://www.weebly.com/developer-admin/), if you do not you can [Create a Free Weebly Developer Account](https://dev.weebly.com/create-a-developer-account.html).

You will need to define a new Weebly App named `Page URL Rewriter` to [Register a Weebly App](https://dev.weebly.com/register-your-app.html).

### Get the Code

There are two ways you can get the code onto your local workstation.

#### Clone with Git

Clone using Git

```
git clone https://github.com/bdeanindy/weebly-developer-community-sample-app-rewrite-history.git
```

#### Download the `.zip`

1. Download the `.zip` file here: [https://github.com/bdeanindy/weebly-devcommunity-sample-app-rewrite-history/archive/master.zip](https://github.com/bdeanindy/weebly-devcommunity-sample-app-rewrite-history/archive/master.zip).
2. Extract the `weebly-devcommunity-sample-app-rewrite-history.zip` file contents:
    * [How to extract Zip files on Windows](https://support.microsoft.com/en-us/help/14200/windows-compress-uncompress-zip-files)
    * [How to extract Zip files on Mac](https://support.apple.com/kb/PH25411?locale=en_US)
    * [How to extract Zip files on Ubuntu](https://askubuntu.com/questions/86849/how-to-unzip-a-zip-file-from-the-terminal)
    * From Linux command line: `tar -xvf weebly-devcommunity-sample-app-rewrite-history.zip -C /destination/directory/`

## Deployment

Now that you have the code on your workstation, and your new Weebly App API Keys on-hand, you are ready to deployment to Weebly.

1. Open the [Weebly Developer Admin](https://www.weebly.com/developer-admin), login if you are not already, and click on the "Page URL Rewriter" app if it is not already open
2. Create a **.zip** file of EVERYTHING within the root directory
3. Name or Rename that `.zip` file: `0.1.1.zip` (I've found it helpful to keep my zip file names mapped to the same as my app version value in the `manifest.json` file)
4. **Upload a New Version** of your app's zip file in the Weebly Developer Admin and complete the form for the other required fields
5. Then, click the **Save Draft** link. __If any errors are displayed, correct those and try clicking the **Save Draft** link again__
7. Go back to the **Page URL Rewriter** app's **Versions** tab, and click on the link labeled **Install to Site** and choose your Weebly Developer Site
8. The Editor should immediately open, and you should see the `Page URL Rewriter` element in the editor highlighted in blue
9. Drag the **Page URL Rewriter** element on to a page of your Weebly site and play with the settings....TADA, an element app in Weebly!

## Built With

* [Github](https://github.com)
* [Node.js](https://maven.apache.org/) - JavaScript runtime built on Chrome's V8 JavaScript Engine
* [NPM.js](https://npmjs.org) - Leading package manager for JavaScript
* [NVM](https://github.com/creationix/nvm) - Leading Node Version Manager

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the Weebly Code of Conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial documentation work* - [PurpleBooth](https://github.com/PurpleBooth)
* **Benjamin Dean** - *Core Contributor* - [bdeanindy](https://github.com/bdeanindy)

## Contributors

* Submit a PR that is merged to see your name here!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Weebly Engineering Team for all their efforts
* Robin Whitmore - the initial author of the Weebly Developer Docs and reviewer making this app possible
* You, and all the Weebly App Developers who make Weebly awesome with your awesome questions and challenging issues

'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  initializing() {
    this.argument('containerName', {
      desc: 'The name of the react-native container. This will be the folder name.',
      type: String,
      required: true,
      default: 'container'
    });
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the superb ${chalk.red('generator-react-native-container')} generator!`)
    );

    const { containerName } = this.options;
    const prompts = [
      {
        type: 'confirm',
        name: 'shouldCreate',
        message:
          'Create ' + containerName + ' folder in ' + this.destinationRoot() + ' ?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      if (!props.shouldCreate) {
        console.log('Generator cancelled.');
        process.exit(1);
      }

      this.props = props;
    });
  }

  writing() {
    const { containerName } = this.options;

    this.fs.copyTpl(
      this.templatePath('TemplateContainer'),
      this.destinationPath(containerName),
      { containerName }
    );
  }

  // Install() {
  //   this.installDependencies();
  // }
};

import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'localmodels',
  connector: 'mysql',
  sharedData: {},
  forwardErrorToEnvironment: false,
  skipLocalCache: true,
  _: [],
  c: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
  y: true,
  initialGenerator: true,
  env: { /*This env variable is causing circular string parsing error */
    _events: {
      end: [
        function () { [native code] },
        function () { [native code] }
      ],
      error: error => {
        reject(error);
      },
      'generator:reject': error => {
        reject(error);
      },
      'generator:resolve': error => {
        resolve(error);
      }
    },
    _eventsCount: 4,
    _maxListeners: 100,
    options: {},
    adapter: {
      promptModule: function (questions, answers) {
    let ui;
    try {
      ui = new inquirer.ui.Prompt(promptModule.prompts, opt);
    } catch (error) {
      return Promise.reject(error);
    }
    const promise = ui.run(questions, answers);

    // Monkey patch the UI on the promise object so
    // that it remains publicly accessible.
    promise.ui = ui;

    return promise;
  },
      console: {
        log: function () { [native code] },
        warn: function () { [native code] },
        dir: function () { [native code] },
        time: function () { [native code] },
        timeEnd: function () { [native code] },
        timeLog: function () { [native code] },
        trace: function () { [native code] },
        assert: function () { [native code] },
        clear: function () { [native code] },
        count: function () { [native code] },
        countReset: function () { [native code] },
        group: function () { [native code] },
        groupEnd: function () { [native code] },
        table: function () { [native code] },
        debug: function () { [native code] },
        info: function () { [native code] },
        dirxml: function () { [native code] },
        error: function () { [native code] },
        groupCollapsed: function () { [native code] }
      },
      log: function log(message, ctx) {
    message = message || '';

    if (typeof ctx === 'object' && !Array.isArray(ctx)) {
      customConsole.error(formatter(message, ctx));
    } else {
      customConsole.error.apply(customConsole, arguments);
    }

    return log;
  },
      tracker: {
        _events: {
          error: function () {}
        },
        _eventsCount: 1,
        _maxListeners: undefined,
        useColor: function () {
  return colorEnabled != null ? colorEnabled : stream.isTTY
},
        enableColor: function () {
  colorEnabled = true
  this.gauge.setTheme({hasColor: colorEnabled, hasUnicode: unicodeEnabled})
},
        disableColor: function () {
  colorEnabled = false
  this.gauge.setTheme({hasColor: colorEnabled, hasUnicode: unicodeEnabled})
},
        level: 'error',
        gauge: {
          _status: {
            spun: 0,
            section: '',
            subsection: ''
          },
          _paused: false,
          _disabled: true,
          _showing: false,
          _onScreen: false,
          _needsRedraw: false,
          _hideCursor: true,
          _fixedFramerate: true,
          _lastUpdateAt: null,
          _updateInterval: 50,
          _themes: function (opts) {
    return themeset.getDefault(opts)
  },
          _theme: {
            hasColor: true
          },
          _writeTo: {
            connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _readableState: {
              objectMode: false,
              highWaterMark: 16384,
              buffer: {
                head: null,
                tail: null,
                length: 0
              },
              length: 0,
              pipes: [],
              flowing: null,
              ended: false,
              endEmitted: false,
              reading: false,
              constructed: true,
              sync: true,
              needReadable: false,
              emittedReadable: false,
              readableListening: false,
              resumeScheduled: false,
              errorEmitted: false,
              emitClose: false,
              autoDestroy: true,
              destroyed: false,
              errored: null,
              closed: false,
              closeEmitted: false,
              defaultEncoding: 'utf8',
              awaitDrainWriters: null,
              multiAwaitDrain: false,
              readingMore: false,
              decoder: null,
              encoding: null,
              readable: false,
              Symbol(kPaused): null
            },
            _events: {
              end: function onReadableStreamEnd() {
  if (!this.allowHalfOpen) {
    this.write = writeAfterFIN;
  }
}
            },
            _eventsCount: 1,
            _maxListeners: undefined,
            _writableState: {
              objectMode: false,
              highWaterMark: 16384,
              finalCalled: false,
              needDrain: false,
              ending: false,
              ended: false,
              finished: false,
              destroyed: false,
              decodeStrings: false,
              defaultEncoding: 'utf8',
              length: 0,
              writing: false,
              corked: 0,
              sync: true,
              bufferProcessing: false,
              onwrite: function () { [native code] },
              writecb: null,
              writelen: 0,
              afterWriteTickInfo: null,
              buffered: [],
              bufferedIndex: 0,
              allBuffers: true,
              allNoop: true,
              pendingcb: 0,
              constructed: true,
              prefinished: false,
              errorEmitted: false,
              emitClose: false,
              autoDestroy: true,
              errored: null,
              closed: false,
              closeEmitted: false,
              Symbol(kOnFinished): []
            },
            allowHalfOpen: false,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server: null,
            _server: null,
            columns: 150,
            rows: 36,
            _type: 'tty',
            fd: 2,
            _isStdio: true,
            destroySoon: function destroy(err, cb) {
  const r = this._readableState;
  const w = this._writableState;
  // With duplex streams we use the writable side for state.
  const s = w || r;

  if ((w && w.destroyed) || (r && r.destroyed)) {
    if (typeof cb === 'function') {
      cb();
    }

    return this;
  }


  // We set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks
  checkError(err, w, r);

  if (w) {
    w.destroyed = true;
  }
  if (r) {
    r.destroyed = true;
  }

  // If still constructing then defer calling _destroy.
  if (!s.constructed) {
    this.once(kDestroy, function(er) {
      _destroy(this, aggregateTwoErrors(er, err), cb);
    });
  } else {
    _destroy(this, err, cb);
  }

  return this;
},
            _destroy: function dummyDestroy(err, cb) {
  cb(err);

  // We need to emit 'close' anyway so that the closing
  // of the stream is observable. We just make sure we
  // are not going to do it twice.
  // The 'close' event is needed so that finished and
  // pipeline work correctly.
  if (!this._writableState.emitClose) {
    process.nextTick(() => {
      this.emit('close');
    });
  }
},
            Symbol(async_id_symbol): 2,
            Symbol(kHandle): {
              Symbol(owner_symbol): "[Circular]"
            },
            Symbol(kSetNoDelay): false,
            Symbol(lastWriteQueueSize): 0,
            Symbol(timeout): null,
            Symbol(kBuffer): null,
            Symbol(kBufferCb): null,
            Symbol(kBufferGen): null,
            Symbol(kCapture): false,
            Symbol(kBytesRead): 0,
            Symbol(kBytesWritten): 0
          },
          _tty: {
            connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _readableState: {
              objectMode: false,
              highWaterMark: 16384,
              buffer: {
                head: null,
                tail: null,
                length: 0
              },
              length: 0,
              pipes: [],
              flowing: null,
              ended: false,
              endEmitted: false,
              reading: false,
              constructed: true,
              sync: true,
              needReadable: false,
              emittedReadable: false,
              readableListening: false,
              resumeScheduled: false,
              errorEmitted: false,
              emitClose: false,
              autoDestroy: true,
              destroyed: false,
              errored: null,
              closed: false,
              closeEmitted: false,
              defaultEncoding: 'utf8',
              awaitDrainWriters: null,
              multiAwaitDrain: false,
              readingMore: false,
              decoder: null,
              encoding: null,
              readable: false,
              Symbol(kPaused): null
            },
            _events: {
              end: function onReadableStreamEnd() {
  if (!this.allowHalfOpen) {
    this.write = writeAfterFIN;
  }
}
            },
            _eventsCount: 1,
            _maxListeners: undefined,
            _writableState: {
              objectMode: false,
              highWaterMark: 16384,
              finalCalled: false,
              needDrain: false,
              ending: false,
              ended: false,
              finished: false,
              destroyed: false,
              decodeStrings: false,
              defaultEncoding: 'utf8',
              length: 0,
              writing: false,
              corked: 0,
              sync: true,
              bufferProcessing: false,
              onwrite: function () { [native code] },
              writecb: null,
              writelen: 0,
              afterWriteTickInfo: null,
              buffered: [],
              bufferedIndex: 0,
              allBuffers: true,
              allNoop: true,
              pendingcb: 0,
              constructed: true,
              prefinished: false,
              errorEmitted: false,
              emitClose: false,
              autoDestroy: true,
              errored: null,
              closed: false,
              closeEmitted: false,
              Symbol(kOnFinished): []
            },
            allowHalfOpen: false,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server: null,
            _server: null,
            columns: 150,
            rows: 36,
            _type: 'tty',
            fd: 1,
            _isStdio: true,
            destroySoon: function destroy(err, cb) {
  const r = this._readableState;
  const w = this._writableState;
  // With duplex streams we use the writable side for state.
  const s = w || r;

  if ((w && w.destroyed) || (r && r.destroyed)) {
    if (typeof cb === 'function') {
      cb();
    }

    return this;
  }


  // We set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks
  checkError(err, w, r);

  if (w) {
    w.destroyed = true;
  }
  if (r) {
    r.destroyed = true;
  }

  // If still constructing then defer calling _destroy.
  if (!s.constructed) {
    this.once(kDestroy, function(er) {
      _destroy(this, aggregateTwoErrors(er, err), cb);
    });
  } else {
    _destroy(this, err, cb);
  }

  return this;
},
            _destroy: function dummyDestroy(err, cb) {
  cb(err);

  // We need to emit 'close' anyway so that the closing
  // of the stream is observable. We just make sure we
  // are not going to do it twice.
  // The 'close' event is needed so that finished and
  // pipeline work correctly.
  if (!this._writableState.emitClose) {
    process.nextTick(() => {
      this.emit('close');
    });
  }
},
            Symbol(async_id_symbol): 4,
            Symbol(kHandle): {
              Symbol(owner_symbol): "[Circular]"
            },
            Symbol(kSetNoDelay): false,
            Symbol(lastWriteQueueSize): 0,
            Symbol(timeout): null,
            Symbol(kBuffer): null,
            Symbol(kBufferCb): null,
            Symbol(kBufferGen): null,
            Symbol(kCapture): false,
            Symbol(kBytesRead): 0,
            Symbol(kBytesWritten): 0
          },
          _gauge: {
            showing: false,
            theme: {
              activityIndicator: function (values, theme, width) {
    if (values.spun == null) return
    return spin(theme, values.spun)
  },
              progressbar: function (values, theme, width) {
    if (values.completed == null) return
    return progressBar(theme, width, values.completed)
  },
              preProgressbar: '⸨',
              postProgressbar: '⸩',
              progressbarTheme: {
                preComplete: '[107;97m',
                complete: '#',
                postComplete: '[0m',
                preRemaining: '[100;90m',
                remaining: '⠂',
                postRemaining: '[0m'
              },
              activityIndicatorTheme: '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏',
              preSubsection: '>'
            },
            width: 149,
            template: [
              {
                type: 'progressbar',
                length: 20
              },
              {
                type: 'activityIndicator',
                kerning: 1,
                length: 1
              },
              {
                type: 'section',
                default: ''
              },
              ':',
              {
                type: 'logline',
                kerning: 1,
                default: ''
              }
            ]
          },
          _$$doRedraw: function () {
    return method.call(obj)
  },
          _$$handleSizeChange: function () {
    return method.call(obj)
  },
          _cleanupOnExit: true,
          _removeOnExit: null
        },
        tracker: {
          _events: {},
          _eventsCount: 0,
          _maxListeners: undefined,
          id: 1,
          name: undefined,
          parentGroup: null,
          trackers: [],
          completion: {},
          weight: {},
          totalWeight: 0,
          finished: false,
          bubbleChange: function (name, completed, tracker) {
    trackerGroup.completion[tracker.id] = completed
    if (trackerGroup.finished) {
      return
    }
    trackerGroup.emit('change', name || trackerGroup.name, trackerGroup.completed(), trackerGroup)
  },
          Symbol(kCapture): false
        },
        progressEnabled: false,
        enableUnicode: function () {
  unicodeEnabled = true
  this.gauge.setTheme({hasColor: this.useColor(), hasUnicode: unicodeEnabled})
},
        disableUnicode: function () {
  unicodeEnabled = false
  this.gauge.setTheme({hasColor: this.useColor(), hasUnicode: unicodeEnabled})
},
        setGaugeThemeset: function (themes) {
  this.gauge.setThemeset(themes)
},
        setGaugeTemplate: function (template) {
  this.gauge.setTemplate(template)
},
        enableProgress: function () {
  if (this.progressEnabled) {
    return
  }

  this.progressEnabled = true
  this.tracker.on('change', this.showProgress)
  if (this._paused) {
    return
  }

  this.gauge.enable()
},
        disableProgress: function () {
  if (!this.progressEnabled) {
    return
  }
  this.progressEnabled = false
  this.tracker.removeListener('change', this.showProgress)
  this.gauge.disable()
},
        newGroup: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
        newItem: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
        newStream: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
        clearProgress: function (cb) {
  if (!this.progressEnabled) {
    return cb && process.nextTick(cb)
  }

  this.gauge.hide(cb)
},
        showProgress: function () { [native code] },
        pause: function () {
  this._paused = true
  if (this.progressEnabled) {
    this.gauge.disable()
  }
},
        resume: function () {
  if (!this._paused) {
    return
  }

  this._paused = false

  var b = this._buffer
  this._buffer = []
  b.forEach(function (m) {
    this.emitLog(m)
  }, this)
  if (this.progressEnabled) {
    this.gauge.enable()
  }
},
        _buffer: [],
        record: [],
        maxRecordSize: 10000,
        log: function () { [native code] },
        emitLog: function (m) {
  if (this._paused) {
    this._buffer.push(m)
    return
  }
  if (this.progressEnabled) {
    this.gauge.pulse(m.prefix)
  }

  var l = this.levels[m.level]
  if (l === undefined) {
    return
  }

  if (l < this.levels[this.level]) {
    return
  }

  if (l > 0 && !isFinite(l)) {
    return
  }

  // If 'disp' is null or undefined, use the lvl as a default
  // Allows: '', 0 as valid disp
  var disp = log.disp[m.level] != null ? log.disp[m.level] : m.level
  this.clearProgress()
  m.message.split(/\r?\n/).forEach(function (line) {
    if (this.heading) {
      this.write(this.heading, this.headingStyle)
      this.write(' ')
    }
    this.write(disp, log.style[m.level])
    var p = m.prefix || ''
    if (p) {
      this.write(' ')
    }

    this.write(p, this.prefixStyle)
    this.write(' ' + line + '\n')
  }, this)
  this.showProgress()
},
        _format: function (msg, style) {
  if (!stream) {
    return
  }

  var output = ''
  if (this.useColor()) {
    style = style || {}
    var settings = []
    if (style.fg) {
      settings.push(style.fg)
    }

    if (style.bg) {
      settings.push('bg' + style.bg[0].toUpperCase() + style.bg.slice(1))
    }

    if (style.bold) {
      settings.push('bold')
    }

    if (style.underline) {
      settings.push('underline')
    }

    if (style.inverse) {
      settings.push('inverse')
    }

    if (settings.length) {
      output += consoleControl.color(settings)
    }

    if (style.beep) {
      output += consoleControl.beep()
    }
  }
  output += msg
  if (this.useColor()) {
    output += consoleControl.color('reset')
  }

  return output
},
        write: function (msg, style) {
  if (!stream) {
    return
  }

  stream.write(this._format(msg, style))
},
        addLevel: function (lvl, n, style, disp) {
  // If 'disp' is null or undefined, use the lvl as a default
  if (disp == null) {
    disp = lvl
  }

  this.levels[lvl] = n
  this.style[lvl] = style
  if (!this[lvl]) {
    this[lvl] = function () {
      var a = new Array(arguments.length + 1)
      a[0] = lvl
      for (var i = 0; i < arguments.length; i++) {
        a[i + 1] = arguments[i]
      }

      return this.log.apply(this, a)
    }.bind(this)
  }
  this.disp[lvl] = disp
},
        prefixStyle: {
          fg: 'magenta'
        },
        headingStyle: {
          fg: 'white',
          bg: 'black'
        },
        style: {
          silly: {
            inverse: true
          },
          verbose: {
            fg: 'blue',
            bg: 'black'
          },
          info: {
            fg: 'green'
          },
          timing: {
            fg: 'green',
            bg: 'black'
          },
          http: {
            fg: 'green',
            bg: 'black'
          },
          notice: {
            fg: 'blue',
            bg: 'black'
          },
          warn: {
            fg: 'black',
            bg: 'yellow'
          },
          error: {
            fg: 'red',
            bg: 'black'
          },
          silent: undefined
        },
        levels: {
          silly: -Infinity,
          verbose: 1000,
          info: 2000,
          timing: 2500,
          http: 3000,
          notice: 3500,
          warn: 4000,
          error: 5000,
          silent: Infinity
        },
        disp: {
          silly: 'sill',
          verbose: 'verb',
          info: 'info',
          timing: 'timing',
          http: 'http',
          notice: 'notice',
          warn: 'WARN',
          error: 'ERR!',
          silent: 'silent'
        },
        silly: function () { [native code] },
        verbose: function () { [native code] },
        info: function () { [native code] },
        timing: function () { [native code] },
        http: function () { [native code] },
        notice: function () { [native code] },
        warn: function () { [native code] },
        error: function () { [native code] },
        silent: function () { [native code] },
        Symbol(kCapture): false
      }
    },
    cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
    logCwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
    store: {
      _generators: {
        'loopback4:app': class AppGenerator extends ProjectGenerator {
  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);
    this.buildOptions.push({
      name: 'docker',
      description: g.f('include Dockerfile and .dockerignore'),
    });
    this.buildOptions.push({
      name: 'repositories',
      description: g.f('include repository imports and RepositoryMixin'),
    });
    this.buildOptions.push({
      name: 'services',
      description: g.f('include service-proxy imports and ServiceMixin'),
    });
  }

  _setupGenerator() {
    this.projectType = 'application';

    this.option('applicationName', {
      type: String,
      description: g.f('Application class name'),
    });

    this.option('docker', {
      type: Boolean,
      description: g.f('Include Dockerfile and .dockerignore'),
    });

    this.option('repositories', {
      type: Boolean,
      description: g.f('Include repository imports and RepositoryMixin'),
    });

    this.option('services', {
      type: Boolean,
      description: g.f('Include service-proxy imports and ServiceMixin'),
    });

    this.option('apiconnect', {
      type: Boolean,
      description: g.f('Include ApiConnectComponent'),
    });

    return super._setupGenerator();
  }

  async setOptions() {
    await super.setOptions();
    if (this.shouldExit()) return;
    if (this.options.applicationName) {
      const clsName = utils.toClassName(this.options.applicationName);
      if (typeof clsName === 'string') {
        this.projectInfo.applicationName = clsName;
      } else if (clsName instanceof Error) {
        throw clsName;
      }
      const msg = utils.validateClassName(clsName);
      if (msg !== true) {
        throw new Error(msg);
      }
    }
  }

  promptProjectName() {
    if (this.shouldExit()) return;
    return super.promptProjectName();
  }

  promptProjectDir() {
    if (this.shouldExit()) return;
    return super.promptProjectDir();
  }

  promptApplication() {
    if (this.shouldExit()) return;
    const prompts = [
      {
        type: 'input',
        name: 'applicationName',
        message: g.f('Application class name:'),
        default: utils.pascalCase(this.projectInfo.name) + 'Application',
        validate: utils.validateClassName,
        when: this.projectInfo.applicationName == null,
      },
    ];

    return this.prompt(prompts).then(props => {
      props.applicationName = utils.toClassName(props.applicationName);
      if (typeof props.applicationName === 'string') {
        this.projectInfo.applicationName = props.applicationName;
      }
    });
  }

  promptOptions() {
    if (this.shouldExit()) return;
    return super.promptOptions();
  }

  promptYarnInstall() {
    if (this.shouldExit()) return;
    return super.promptYarnInstall();
  }

  buildAppClassMixins() {
    if (this.shouldExit()) return;
    const {repositories, services} = this.projectInfo || {};
    if (!repositories && !services) return;

    let appClassWithMixins = 'RestApplication';
    if (repositories) {
      appClassWithMixins = `RepositoryMixin(${appClassWithMixins})`;
    }
    if (services) {
      appClassWithMixins = `ServiceMixin(${appClassWithMixins})`;
    }

    this.projectInfo.appClassWithMixins = appClassWithMixins;
  }

  scaffold() {
    const result = super.scaffold();
    if (this.shouldExit()) return result;

    const {docker, repositories} = this.projectInfo || {};
    if (!docker) {
      this.fs.delete(this.destinationPath('Dockerfile'));
      this.fs.delete(this.destinationPath('.dockerignore'));
    }
    if (!repositories) {
      this.fs.delete(this.destinationPath('src/migrate.ts.ejs'));
    }

    return result;
  }

  install() {
    return super.install();
  }

  async end() {
    await super.end();
    if (this.shouldExit()) return;
    this.log();
    this.log(
      g.f(
        'Application %s was created in %s.',
        this.projectInfo.name,
        this.projectInfo.outdir,
      ),
    );
    this.log();
    this.log(g.f('Next steps:'));
    this.log();
    this.log('$ cd ' + this.projectInfo.outdir);
    this.log(`$ ${this.options.packageManager || 'npm'} start`);
    this.log();
  }
},
        'loopback4:extension': class ExtensionGenerator extends ProjectGenerator {
  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);
  }

  _setupGenerator() {
    this.projectType = 'extension';

    this.option('componentName', {
      type: String,
      description: g.f('Component name'),
    });

    return super._setupGenerator();
  }

  setOptions() {
    if (this.shouldExit()) return;
    return super.setOptions();
  }

  promptProjectName() {
    if (this.shouldExit()) return;
    return super.promptProjectName();
  }

  promptProjectDir() {
    if (this.shouldExit()) return;
    return super.promptProjectDir();
  }

  promptComponent() {
    if (this.shouldExit()) return;

    if (this.options.componentName) {
      Object.assign(this.projectInfo, {
        componentName: this.options.componentName,
      });
    }

    const prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: g.f('Component class name:'),
        when: this.projectInfo.componentName == null,
        default: utils.toClassName(this.projectInfo.name) + 'Component',
      },
    ];

    return this.prompt(prompts).then(props => {
      Object.assign(this.projectInfo, props);
    });
  }

  promptOptions() {
    if (this.shouldExit()) return;
    return super.promptOptions();
  }

  promptYarnInstall() {
    if (this.shouldExit()) return;
    return super.promptYarnInstall();
  }

  scaffold() {
    if (this.projectInfo) {
      this.projectInfo.optionsInterface = `${this.projectInfo.componentName}Options`;
      this.projectInfo.bindingsNamespace = `${this.projectInfo.componentName}Bindings`;
      const uppercaseUnderscore = this.projectInfo.name
        .toUpperCase()
        .replace(/\W/g, '_');
      this.projectInfo.defaultOptions = `DEFAULT_${uppercaseUnderscore}_OPTIONS`;
    }
    return super.scaffold();
  }

  install() {
    return super.install();
  }

  end() {
    return super.end();
  }
},
        'loopback4:controller': class ControllerGenerator extends ArtifactGenerator {
  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);
  }

  static get BASIC() {
    return g.f('Empty Controller');
  }

  static get REST() {
    return g.f('REST Controller with CRUD functions');
  }

  _setupGenerator() {
    this.artifactInfo = {
      type: 'controller',
      rootDir: 'src',
    };

    // XXX(kjdelisle): These should be more extensible to allow custom paths
    // for each artifact type.

    this.artifactInfo.outDir = path.resolve(
      this.artifactInfo.rootDir,
      'controllers',
    );
    this.artifactInfo.modelDir = path.resolve(
      this.artifactInfo.rootDir,
      'models',
    );
    this.artifactInfo.repositoryDir = path.resolve(
      this.artifactInfo.rootDir,
      'repositories',
    );

    this.option('controllerType', {
      type: String,
      required: false,
      description: g.f('Type for the %s', this.artifactInfo.type),
    });

    return super._setupGenerator();
  }

  setOptions() {
    return super.setOptions();
  }

  checkLoopBackProject() {
    if (this.shouldExit()) return;
    return super.checkLoopBackProject();
  }

  promptArtifactName() {
    if (this.shouldExit()) return;
    return super.promptArtifactName();
  }

  promptArtifactType() {
    debug('Prompting for controller type');
    if (this.shouldExit()) return;

    super.promptWarningMsgForName();
    // inform user what controller/file names will be created
    super.promptClassFileName(
      'controller',
      'controllers',
      utils.toClassName(this.artifactInfo.name),
    );

    if (this.options.controllerType) {
      Object.assign(this.artifactInfo, {
        controllerType: this.options.controllerType,
      });
      return;
    }

    return this.prompt([
      {
        type: 'list',
        name: 'controllerType',
        message: g.f('What kind of controller would you like to generate?'),
        when: this.artifactInfo.controllerType === undefined,
        choices: [ControllerGenerator.BASIC, ControllerGenerator.REST],
        default: ControllerGenerator.BASIC,
      },
    ])
      .then(props => {
        Object.assign(this.artifactInfo, props);
        return props;
      })
      .catch(err => {
        debug(`Error during controller type prompt: ${err.stack}`);
        return this.exit(err);
      });
  }

  async promptArtifactCrudVars() {
    if (this.shouldExit()) return;
    if (
      !this.artifactInfo.controllerType ||
      this.artifactInfo.controllerType === ControllerGenerator.BASIC
    ) {
      return;
    }

    let modelList, repositoryList;

    try {
      modelList = await utils.getArtifactList(
        this.artifactInfo.modelDir,
        'model',
      );

      repositoryList = await utils.getArtifactList(
        this.artifactInfo.repositoryDir,
        'repository',
        true,
      );
    } catch (err) {
      return this.exit(err);
    }

    if (_.isEmpty(modelList)) {
      const file = g.f('No models found in %s. ', this.artifactInfo.modelDir);
      const site = g.f(
        'Please visit http://loopback.io/doc/en/lb4/Controller-generator.html for information on how models are discovered.',
      );
      return this.exit(file + chalk.yellow(site));
    }
    if (_.isEmpty(repositoryList)) {
      const file = g.f(
        'No repositories found in %s. ',
        this.artifactInfo.repositoryDir,
      );
      const site = g.f(
        'Please visit http://loopback.io/doc/en/lb4/Controller-generator.html for information on how repositories are discovered.',
      );
      return this.exit(file + chalk.yellow(site));
    }
    return this.prompt([
      {
        type: 'list',
        name: 'modelName',
        message: g.f(
          'What is the name of the model to use with this CRUD repository?',
        ),
        choices: modelList,
        when: this.artifactInfo.modelName === undefined,
        default: modelList[0],
        validate: utils.validateClassName,
      },
      {
        type: 'list',
        name: 'repositoryName',
        message: g.f('What is the name of your CRUD repository?'),
        choices: repositoryList,
        when: this.artifactInfo.repositoryName === undefined,
        default: repositoryList[0],
        validate: utils.validateClassName,
      },
      {
        type: 'input',
        name: 'id',
        message: g.f('What is the name of ID property?'),
        when: this.artifactInfo.id === undefined,
        default: 'id',
      },
      {
        type: 'list',
        name: 'idType',
        message: g.f('What is the type of your ID?'),
        choices: ['number', 'string', 'object'],
        when: this.artifactInfo.idType === undefined,
        default: 'number',
      },
      {
        type: 'confirm',
        name: 'idOmitted',
        message: g.f('Is the id omitted when creating a new instance?'),
        default: true,
      },
      {
        type: 'input',
        name: 'httpPathName',
        message: g.f('What is the base HTTP path name of the CRUD operations?'),
        when: this.artifactInfo.httpPathName === undefined,
        default: answers =>
          utils.prependBackslash(
            utils.pluralize(utils.urlSlug(answers.modelName)),
          ),
        validate: utils.validateUrlSlug,
        filter: utils.prependBackslash,
      },
    ])
      .then(props => {
        debug(`props: ${inspect(props)}`);
        Object.assign(this.artifactInfo, props);
        // Ensure that the artifact names are valid.
        [
          this.artifactInfo.name,
          this.artifactInfo.modelName,
          this.artifactInfo.repositoryName,
        ].forEach(item => {
          item = utils.toClassName(item);
        });
        // Create camel-case names for variables.
        this.artifactInfo.repositoryNameCamel = utils.camelCase(
          this.artifactInfo.repositoryName,
        );
        return props;
      })
      .catch(err => {
        debug(`Error during prompt for controller variables: ${err}`);
        return this.exit(err);
      });
  }

  scaffold() {
    // We don't want to call the base scaffold function since it copies
    // all of the templates!
    if (this.shouldExit()) return false;
    this.artifactInfo.className = utils.toClassName(this.artifactInfo.name);
    this.artifactInfo.outFile =
      utils.toFileName(this.artifactInfo.name) + '.controller.ts';
    if (debug.enabled) {
      debug(`Artifact output filename set to: ${this.artifactInfo.outFile}`);
    }
    this.artifactInfo.modelVariableName = utils.toVarName(
      this.artifactInfo.modelName || '',
    );

    // renames the file
    let template = 'controller-template.ts.ejs';
    switch (this.artifactInfo.controllerType) {
      case ControllerGenerator.REST:
        template = 'controller-rest-template.ts.ejs';
        break;
      default:
        break;
    }
    const source = this.templatePath(path.join('src', 'controllers', template));
    if (debug.enabled) {
      debug(`Using template at: ${source}`);
    }
    const dest = this.destinationPath(
      path.join(this.artifactInfo.outDir, this.artifactInfo.outFile),
    );

    if (debug.enabled) {
      debug(`artifactInfo: ${inspect(this.artifactInfo)}`);
      debug(`Copying artifact to: ${dest}`);
    }
    this.copyTemplatedFiles(source, dest, this.artifactInfo);
    return;
  }

  async end() {
    await super.end();
  }
},
        'loopback4:datasource': class DataSourceGenerator extends ArtifactGenerator {
  constructor(args, opts) {
    super(args, opts);
  }

  _setupGenerator() {
    this.artifactInfo = {
      type: 'datasource',
      rootDir: 'src',
    };

    // Datasources are stored in the datasources directory
    this.artifactInfo.outDir = path.resolve(
      this.artifactInfo.rootDir,
      'datasources',
    );

    const connectorChoices = [];
    /**
     * Creating a list of connectors -- and marking them as either supported by
     * StrongLoop or community.
     */
    Object.values(connectors).forEach(connector => {
      const support = connector.supportedByStrongLoop
        ? '(supported by StrongLoop)'
        : '(provided by community)';
      connectorChoices.push({
        name: `${connector.description} ${chalk.gray(support)}`,
        value: connector.name,
      });
    });

    this.connectorChoices = connectorChoices;
    // Add `other` so users can add a connector that isn't part of the list
    // Though it can be added by creating a PR and adding it to
    // connectors.json
    this.connectorChoices.push('other');

    return super._setupGenerator();
  }

  setOptions() {
    return super.setOptions();
  }

  /**
   * Ensure CLI is being run in a LoopBack 4 project.
   */
  checkLoopBackProject() {
    if (this.shouldExit()) return;
    return super.checkLoopBackProject();
  }

  /**
   * Ask for DataSource Name -- Must be unique
   */
  promptArtifactName() {
    debug('Prompting for artifact name');
    if (this.shouldExit()) return false;

    if (this.artifactInfo.name) {
      return;
    }

    const prompts = [
      {
        type: 'input',
        name: 'name',
        // capitalization
        message: g.f('%s name:', utils.toClassName(this.artifactInfo.type)),
        when: this.artifactInfo.name === undefined,
        validate: utils.validateClassName,
      },
    ];

    return this.prompt(prompts).then(props => {
      Object.assign(this.artifactInfo, props);
      return props;
    });
  }

  /**
   * Ask the user to select the connector for the DataSource
   */
  promptConnector() {
    debug('prompting for datasource connector');
    if (this.shouldExit()) return;
    const prompts = [
      {
        name: 'connector',
        message: g.f(
          'Select the connector for %s: ',
          chalk.yellow(this.artifactInfo.name),
        ),
        type: 'list',
        default: 'memory',
        choices: this.connectorChoices,
        when: this.artifactInfo.connector === undefined,
      },
    ];

    return this.prompt(prompts).then(props => {
      Object.assign(this.artifactInfo, props);
      return props;
    });
  }

  /**
   * If the user selected `other` for connector -- ask the user to provide
   * `npm` module name for the connector.
   */
  promptCustomConnectorInfo() {
    if (this.shouldExit()) return;
    if (this.artifactInfo.connector !== 'other') {
      debug('custom connector option was not selected');
      return;
    } else {
      debug('prompting for custom connector');
      const prompts = [
        {
          name: 'customConnector',
          message: g.f("Enter the connector's package name:"),
          validate: utils.validate,
        },
      ];

      return this.prompt(prompts).then(props => {
        this.artifactInfo.connector = props.customConnector;
        return props;
      });
    }
  }

  /**
   * Prompt the user for connector specific settings -- only applies to
   * connectors in the connectors.json list
   */
  promptConnectorConfig() {
    debug('prompting for connector config');
    if (this.shouldExit()) return;
    // Check to make sure connector is from connectors list (not custom)
    const settings =
      (connectors[this.artifactInfo.connector] &&
        connectors[this.artifactInfo.connector]['settings']) ||
      {};
    const prompts = [];

    // Create list of questions to prompt the user
    Object.entries(settings).forEach(([key, setting]) => {
      // Set defaults and merge with `setting` to override properties
      const question = Object.assign(
        {},
        { name: key, message: key, suffix: ':', default: null },
        setting,
      );

      /**
       * Allowed Types: string, number, password, object, array, boolean
       * Must be converted to inquirer types -- input, confirm, password
       */
      switch ((setting.type || '').toLowerCase()) {
        case 'string':
        case 'number':
          question.type = 'input';
          break;
        case 'object':
        case 'array':
          question.type = 'input';
          question.validate = utils.validateStringObject(setting.type);
          break;
        case 'boolean':
          question.type = 'confirm';
          break;
        case 'password':
          break;
        default:
          console.warn(
            g.f(
              'Using default input of type input for setting %s as %s is not supported',
              key,
              setting.type || undefined,
            ),
          );
          // Default to input type
          question.type = 'input';
      }

      prompts.push(question);
    });

    debug(`connector setting questions - ${JSON.stringify(prompts)}`);

    // If no prompts, we need to return instead of attempting to ask prompts
    if (!prompts.length) return;

    debug('prompting the user - length > 0 for questions');
    // Ask user for prompts
    return this.prompt(prompts).then(props => {
      // Convert user inputs to correct types
      Object.entries(settings).forEach(([key, setting]) => {
        switch ((setting.type || '').toLowerCase()) {
          case 'number':
            props[key] = Number(props[key]);
            break;
          case 'array':
          case 'object':
            if (props[key] == null || props[key] === '') {
              delete props[key];
            } else {
              props[key] = JSON.parse(props[key]);
            }
            break;
        }
      });
      this.artifactInfo = Object.assign(this.artifactInfo, { settings: props });
    });
  }

  /**
   * Scaffold DataSource related files
   * super.scaffold() doesn't provide a way to rename files -- don't call it
   */
  scaffold() {
    // Exit if needed
    if (this.shouldExit()) return false;

    // Setting up data for templates
    this.artifactInfo.className = utils.toClassName(this.artifactInfo.name);
    this.artifactInfo.fileName = utils.toFileName(this.artifactInfo.name);
    // prettier-ignore
    this.artifactInfo.outFile = `${this.artifactInfo.fileName}.datasource.ts`;

    // Resolved Output Paths.
    const tsPath = this.destinationPath(
      this.artifactInfo.outDir,
      this.artifactInfo.outFile,
    );

    // template path
    const classTemplatePath = this.templatePath('datasource.ts.ejs');

    // Debug Info
    debug(`this.artifactInfo.name => ${this.artifactInfo.name}`);
    debug(`this.artifactInfo.className => ${this.artifactInfo.className}`);
    debug(`this.artifactInfo.fileName => ${this.artifactInfo.fileName}`);
    debug(`this.artifactInfo.outFile => ${this.artifactInfo.outFile}`);
    debug(`tsPath => ${tsPath}`);

    // Data to save to DataSource JSON file
    const dsConfig = Object.assign(
      { name: this.artifactInfo.name, connector: this.artifactInfo.connector },
      this.artifactInfo.settings,
    );

    // From LB3
    if (dsConfig.connector === 'ibm-object-storage') {
      dsConfig.connector = 'loopback-component-storage';
      dsConfig.provider = 'openstack';
      dsConfig.useServiceCatalog = true;
      dsConfig.useInternal = false;
      dsConfig.keystoneAuthVersion = 'v3';
    }

    this.artifactInfo.dsConfigString = utils.stringifyObject(dsConfig, {
      // Prevent inlining the config into a single line, e.g.
      // const config = {name: 'db', connector: 'memory'};
      inlineCharacterLimit: 0,
    });
    debug(`datasource configuration code: ${this.artifactInfo.dsConfigString}`);

    this.copyTemplatedFiles(classTemplatePath, tsPath, this.artifactInfo);
  }

  install() {
    if (this.shouldExit()) return false;
    debug('install npm dependencies');
    const pkgJson = this.packageJson || {};
    const deps = pkgJson.dependencies || {};
    const pkgs = [];

    // Connector package.
    const connector = connectors[this.artifactInfo.connector];
    if (connector && connector.package) {
      if (!deps[connector.package.name]) {
        pkgs.push(
          connector.package.name +
          `${connector.package.version ? '@' + connector.package.version : ''
          }`,
        );
      }

      debug(`npmModule - ${pkgs[0]}`);
    } else {
      const connectorName = this.artifactInfo.connector;
      // Other connectors that are not listed in `connectors.json`.
      // No install is needed for those in connectors.json but without a
      // package name as they are built-in connectors
      if (!deps[connectorName] && !connector) pkgs.push(connectorName);
    }

    if (!deps['@loopback/repository']) {
      pkgs.push('@loopback/repository');
    }

    if (pkgs.length === 0) return;

    this.pkgManagerInstall(pkgs, {
      npm: {
        save: true,
      },
    });
  }

  async end() {
    await super.end();
  }
},
        'loopback4:import-lb3-models': class Lb3ModelImporter extends BaseGenerator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('lb3app', {
      type: String,
      required: true,
      description: g.f(
        'Path to your LoopBack 3.x application. ' +
          'This can be a project directory (e.g. "my-lb3-app") or ' +
          'the server file (e.g. "my-lb3-app/server/server.js").',
      ),
      // description:
      //   'Path to your LoopBack 3.x application. ' +
      //   'This can be a project directory (e.g. "my-lb3-app") or ' +
      //   'the server file (e.g. "my-lb3-app/server/server.js").',
    });

    this.option('outDir', {
      type: String,
      description: g.f('Directory where to write the generated source file'),
      default: 'src/models',
    });
  }

  async processOptions() {
    this.sourceAppDir = this.args[0];
    this.artifactInfo.outDir = this.options.outDir;
    this.artifactInfo.relPath = path.relative(
      this.destinationPath(),
      this.artifactInfo.outDir,
    );
    this.artifactInfo.modelDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.modelsDir,
    );
    return super.setOptions();
  }

  async logExperimentalStatus() {
    this.log(
      chalk.red(`
WARNING: This command is experimental and not feature-complete yet.
Learn more at https://loopback.io/doc/en/lb4/Importing-LB3-models.html
`),
    );
  }

  /**
   * Ensure CLI is being run in a LoopBack 4 project.
   */
  checkLoopBackProject() {
    if (this.shouldExit()) return;
    return super.checkLoopBackProject();
  }

  async loadTheApp() {
    this.lb3app = await loadLb3App(this.sourceAppDir);
    this.modelRegistry = this.lb3app.registry.modelBuilder.models;
  }

  async promptModels() {
    const modelNames = Object.keys(this.modelRegistry).filter(
      canImportModelName,
    );

    debug('Available LB3 models', modelNames);

    const prompts = [
      {
        name: 'modelNames',
        message: g.f('Select models to import:'),
        type: 'checkbox',
        choices: modelNames,
        // Require at least one model to be selected
        // This prevents users from accidentally pressing ENTER instead of SPACE
        // to select a model from the list
        validate: result => !!result.length,
        // TODO: add a CLI flag to supply these names programmatically
      },
    ];

    const answers = await this.prompt(prompts);
    debug('Models chosen:', answers.modelNames);
    this.modelNames = answers.modelNames;
  }

  async loadExistingLb4Models() {
    debug(`model list dir ${this.artifactInfo.modelDir}`);
    this.existingLb4ModelNames = await utils.getArtifactList(
      this.artifactInfo.modelDir,
      'model',
    );
  }

  async migrateSelectedModels() {
    if (this.shouldExit()) return;
    this.modelFiles = [];

    try {
      for (const name of this.modelNames) {
        await this._migrateSingleModel(name);
      }
    } catch (err) {
      if (err.exit) {
        this.exit(err.message);
      } else {
        throw err;
      }
    }
  }

  async _migrateSingleModel(name) {
    utils.logClassCreation('model', 'models', name, this.log.bind(this));
    const modelCtor = this.modelRegistry[name];
    if (typeof modelCtor !== 'function') {
      const availableModels = Object.keys(this.modelRegistry)
        .filter(canImportModelName)
        .join(', ');

      this.exit(
        `Unknown model name ${name}. Available models: ${availableModels}.`,
      );
      return;
    }

    const templateData = importLb3ModelDefinition(
      modelCtor,
      this.log.bind(this),
    );
    debug('LB4 model data', templateData);

    if (!templateData.isModelBaseBuiltin) {
      const baseName = templateData.modelBaseClass;
      if (
        !this.existingLb4ModelNames.includes(baseName) &&
        !this.modelNames.includes(baseName)
      ) {
        this.log(
          'Adding %s (base of %s) to the list of imported models.',
          chalk.yellow(baseName),
          chalk.yellow(name),
        );
        this.modelNames.push(baseName);
      }
    }
    const fileName = utils.getModelFileName(name);
    const fullTargetPath = path.resolve(this.artifactInfo.relPath, fileName);
    debug('Model %s output file', name, fullTargetPath);

    this.copyTemplatedFiles(
      modelUtils.MODEL_TEMPLATE_PATH,
      fullTargetPath,
      templateData,
    );

    this.modelFiles.push(fileName);
  }

  /**
   * Iterate through all the models we have discovered and scaffold
   */
  async scaffold() {
    if (this.shouldExit()) return;
  }

  async end() {
    if (this.shouldExit() || !this._isGenerationSuccessful()) {
      await super.end();
      return;
    }

    for (const f of this.modelFiles) {
      await this._updateIndexFile(this.artifactInfo.outDir, f);
    }

    await super.end();
  }
},
        'loopback4:model': class ModelGenerator extends ArtifactGenerator {
  constructor(args, opts) {
    super(args, opts);
  }

  _setupGenerator() {
    this.artifactInfo = {
      type: 'model',
      rootDir: utils.sourceRootDir,
    };

    this.artifactInfo.outDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.modelsDir,
    );

    // Model Property Types
    this.typeChoices = [
      'string',
      'number',
      'boolean',
      'object',
      'array',
      'date',
      'buffer',
      'geopoint',
      'any',
    ];

    this.artifactInfo.properties = {};
    this.artifactInfo.modelSettings = {};

    this.artifactInfo.modelDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.modelsDir,
    );

    this.option('base', {
      type: String,
      required: false,
      description: g.f('A valid based model'),
    });

    // The base class can be specified:
    // 1. From the prompt
    // 2. using the --base flag
    // 3. in the json when using the --config flag
    // This flag is to indicate whether the base class has been validated.
    this.isBaseClassChecked = false;

    this.option('dataSource', {
      type: String,
      required: false,
      description: g.f(
        'The name of the dataSource which contains this model and suppots model discovery',
      ),
    });

    this.option('table', {
      type: String,
      required: false,
      description: g.f(
        'If discovering a model from a dataSource, specify the name of its table/view',
      ),
    });

    this.option('schema', {
      type: String,
      required: false,
      description: g.f(
        'If discovering a model from a dataSource, specify the schema which contains it',
      ),
    });

    return super._setupGenerator();
  }

  setOptions() {
    return super.setOptions();
  }

  checkLoopBackProject() {
    if (this.shouldExit()) return;
    return super.checkLoopBackProject();
  }

  async getDataSource() {
    if (!this.options.dataSource) {
      debug('Not loading any dataSources because none specified');
      return;
    }

    this.artifactInfo.dataSource = modelDiscoverer.loadDataSourceByName(
      this.options.dataSource,
    );

    if (!this.artifactInfo.dataSource) {
      const s = `Could not find dataSource ${this.options.dataSource}`;
      debug(s);
      return this.exit(
        new Error(
          `${s}.${chalk.yellow(
            'Please visit https://loopback.io/doc/en/lb4/Model-generator.html for information on how models are discovered',
          )}`,
        ),
      );
    }
  }

  // Use the dataSource to discover model properties
  async discoverModelPropertiesWithDatasource() {
    if (this.shouldExit()) return false;
    if (!this.options.dataSource) return;
    if (!this.artifactInfo.dataSource) return;

    const schemaDef = await modelDiscoverer.discoverSingleModel(
      this.artifactInfo.dataSource,
      this.options.table,
      {
        schema: this.options.schema,
        views: true,
      },
    );
    await this.artifactInfo.dataSource.disconnect();

    if (!schemaDef) {
      this.exit(
        new Error(
          `Could not locate table: ${this.options.table} in schema: ${
            this.options.schema
          }
          ${chalk.yellow(
            'Please visit https://loopback.io/doc/en/lb4/Model-generator.html for information on how models are discovered',
          )}`,
        ),
      );
    }

    Object.assign(this.artifactInfo, schemaDef);
    this.artifactInfo.defaultName = this.artifactInfo.name;
    delete this.artifactInfo.name;
  }

  // Prompt a user for Model Name
  async promptArtifactName() {
    if (this.shouldExit()) return;
    await super.promptArtifactName();
    this.artifactInfo.className = utils.toClassName(this.artifactInfo.name);
    // Prompt warning msg for the name
    super.promptWarningMsgForName();
  }

  // Ask for Model base class
  async promptModelBaseClassName() {
    if (this.shouldExit()) return;
    const availableModelBaseClasses = [];

    availableModelBaseClasses.push(...CLI_BASE_MODELS);

    try {
      debug(`model list dir ${this.artifactInfo.modelDir}`);
      const modelList = await utils.getArtifactList(
        this.artifactInfo.modelDir,
        'model',
      );
      debug(`modelist ${modelList}`);

      if (modelList && modelList.length > 0) {
        availableModelBaseClasses.push(...modelList);
        debug(`availableModelBaseClasses ${availableModelBaseClasses}`);
      }
    } catch (err) {
      debug(`error ${err}`);
      return this.exit(err);
    }

    if (this.options.base) {
      this.isBaseClassChecked = true;
      if (
        this.isValidBaseClass(
          availableModelBaseClasses,
          this.options.base,
          true,
        )
      ) {
        this.artifactInfo.modelBaseClass = utils.toClassName(this.options.base);
      } else {
        return this.exit(
          new Error(
            `${ERROR_NO_MODELS_FOUND} ${
              this.artifactInfo.modelDir
            }.${chalk.yellow(
              'Please visit https://loopback.io/doc/en/lb4/Model-generator.html for information on how models are discovered',
            )}`,
          ),
        );
      }
    }

    return this.prompt([
      {
        type: 'list',
        name: 'modelBaseClass',
        message: PROMPT_BASE_MODEL_CLASS,
        choices: availableModelBaseClasses,
        when: !this.artifactInfo.modelBaseClass,
        default: availableModelBaseClasses[0],
        validate: utils.validateClassName,
      },
    ])
      .then(props => {
        if (this.isBaseClassChecked) return;
        if (typeof props.modelBaseClass === 'object')
          props.modelBaseClass = props.modelBaseClass.value;
        // Find whether the specified base class is one of the available base
        // class list
        const isValidBase = this.isValidBaseClass(
          availableModelBaseClasses,
          props.modelBaseClass,
          false,
        );
        if (!props.modelBaseClass && !isValidBase) {
          this.exit(
            new Error(
              `${ERROR_NO_MODELS_FOUND} ${
                this.artifactInfo.modelDir
              }.${chalk.yellow(
                'Please visit https://loopback.io/doc/en/lb4/Model-generator.html for information on how models are discovered',
              )}`,
            ),
          );
        }

        Object.assign(this.artifactInfo, props);
        debug(`props after model base class prompt: ${inspect(props)}`);
        return props;
      })
      .catch(err => {
        debug(`Error during model base class prompt: ${err}`);
        return this.exit(err);
      });
  }

  async promptStrictMode() {
    if (this.shouldExit()) return false;
    return this.prompt([
      {
        name: 'allowAdditionalProperties',
        message: g.f('Allow additional (free-form) properties?'),
        type: 'confirm',
        default: false,
        when: !this.artifactInfo.allowAdditionalProperties,
      },
    ])
      .then(setting => {
        Object.assign(this.artifactInfo, setting);

        if (this.artifactInfo.allowAdditionalProperties) {
          Object.assign(this.artifactInfo.modelSettings, {strict: false});
        }
        // inform user what model/file names will be created
        super.promptClassFileName(
          'model',
          'models',
          this.artifactInfo.className,
        );

        this.log(
          g.f(
            "Let's add a property to %s",
            `${chalk.yellow(this.artifactInfo.className)}`,
          ),
        );
      })
      .catch(err => {
        debug(`Error during model strict mode prompt: ${err}`);
        return this.exit(err);
      });
  }

  // Check whether the base class name is a valid one.
  // It is either one of the predefined base classes,
  // or an existing user defined class
  // @isClassNameNullable - true if it is valid to have classname as null
  isValidBaseClass(availableModelBaseClasses, classname, isClassNameNullable) {
    if (!classname && !isClassNameNullable) return false;

    for (const i in availableModelBaseClasses) {
      let baseClass = '';
      if (typeof availableModelBaseClasses[i] == 'object')
        baseClass = availableModelBaseClasses[i].value;
      else baseClass = availableModelBaseClasses[i];

      if (classname === baseClass) {
        return true;
      }
    }
    return false;
  }

  // Prompt for a Property Name
  async promptPropertyName() {
    if (this.shouldExit()) return false;

    // If properties are provided from config file
    if (this.options.properties) {
      Object.assign(this.artifactInfo.properties, this.options.properties);
      return;
    }

    this.log(g.f('Enter an empty property name when done'));
    this.log();

    // This function can be called repeatedly so this deletes the previous
    // property name if one was set.
    delete this.propName;

    const prompts = [
      {
        name: 'propName',
        message: g.f('Enter the property name:'),
        validate: function (val) {
          if (val) {
            return utils.checkPropertyName(val);
          } else {
            return true;
          }
        },
      },
    ];

    const answers = await this.prompt(prompts);
    // debug(`propName => ${JSON.stringify(answers)}`);
    if (answers.propName) {
      this.artifactInfo.properties[answers.propName] = {};
      this.propName = answers.propName;
    }
    return this._promptPropertyInfo();
  }

  // Internal Method. Called when a new property is entered.
  // Prompts the user for more information about the property to be added.
  async _promptPropertyInfo() {
    if (!this.propName) return true;

    const prompts = [
      {
        name: 'type',
        message: g.f('Property type:'),
        type: 'list',
        choices: this.typeChoices,
      },
      {
        name: 'itemType',
        message: g.f('Type of array items:'),
        type: 'list',
        choices: this.typeChoices.filter(choice => {
          return choice !== 'array';
        }),
        when: answers => {
          return answers.type === 'array';
        },
      },
      {
        name: 'id',
        message: g.f(
          'Is %s the ID property?',
          `${chalk.yellow(this.propName)}`,
        ),
        type: 'confirm',
        default: false,
        when: answers => {
          return (
            !this.idFieldSet &&
            !['array', 'object', 'buffer'].includes(answers.type)
          );
        },
      },
      {
        name: 'generated',
        message: g.f(
          'Is %s generated automatically?',
          `${chalk.yellow(this.propName)}`,
        ),
        type: 'confirm',
        default: true,
        when: answers => answers.id,
      },
      {
        name: 'required',
        message: g.f('Is it required?:'),
        type: 'confirm',
        default: false,
        when: answers => !answers.generated,
      },
      {
        name: 'default',
        message: g.f(
          'Default value %s:',
          `${chalk.yellow(g.f('[leave blank for none]'))}`,
        ),
        when: answers => {
          return (
            ![null, 'buffer', 'any'].includes(answers.type) &&
            !answers.generated &&
            answers.required !== true
          );
        },
      },
    ];

    const answers = await this.prompt(prompts);
    debug(`propertyInfo => ${JSON.stringify(answers)}`);

    // Yeoman sets the default to `''` so we remove it unless the user entered
    // a different value
    if (answers.default === '') {
      delete answers.default;
    }

    Object.assign(this.artifactInfo.properties[this.propName], answers);

    // We prompt for `id` only once per model using idFieldSet flag.
    // and 'generated' flag makes sure id is defined, especially for database like MySQL
    // Skipped the test for `generated` for now.
    if (answers.id) {
      this.idFieldSet = true;
    }

    this.log();
    this.log(
      g.f(
        "Let's add another property to %s",
        `${chalk.yellow(this.artifactInfo.className)}`,
      ),
    );
    return this.promptPropertyName();
  }

  scaffold() {
    if (this.shouldExit()) return false;

    debug('scaffolding');

    Object.entries(this.artifactInfo.properties).forEach(([k, v]) => {
      const builtinType = findBuiltinType(v.type);
      if (builtinType) v.type = builtinType;
      modelDiscoverer.sanitizeProperty(v);
    });

    // Data for templates
    this.artifactInfo.outFile = utils.getModelFileName(this.artifactInfo.name);

    // Resolved Output Path
    const tsPath = this.destinationPath(
      this.artifactInfo.outDir,
      this.artifactInfo.outFile,
    );

    this.artifactInfo.isModelBaseBuiltin = BASE_MODELS.includes(
      this.artifactInfo.modelBaseClass,
    );

    const propDefs = this.artifactInfo.properties;
    this.artifactInfo.properties = {};
    for (const key in propDefs) {
      this.artifactInfo.properties[key] = createPropertyTemplateData(
        propDefs[key],
      );
    }

    if (this.artifactInfo.modelSettings) {
      this.artifactInfo.modelSettings = utils.stringifyModelSettings(
        this.artifactInfo.modelSettings,
      );
    }

    this.copyTemplatedFiles(
      this.templatePath(MODEL_TEMPLATE_PATH),
      tsPath,
      this.artifactInfo,
    );
  }

  async end() {
    await super.end();
  }
},
        'loopback4:repository': class RepositoryGenerator extends ArtifactGenerator {
  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);
  }

  /**
   * Find all the base artifacts in the given path whose type matches the
   * provided artifactType.
   * For example, a artifactType of "repository" will search the target path for
   * matches to "*.repository.base.ts"
   * @param {string} dir The target directory from which to load artifacts.
   * @param {string} artifactType The artifact type (ex. "model", "repository")
   */
  async _findBaseClasses(dir, artifactType) {
    const paths = await utils.findArtifactPaths(dir, artifactType + '.base');
    debug(`repository artifact paths: ${paths}`);

    // get base class and path
    const baseRepositoryList = [];
    for (const p of paths) {
      //get name removing anything from .artifactType.base
      const artifactFile = path.parse(_.last(_.split(p, path.sep))).name;
      const firstWord = _.first(_.split(artifactFile, '.'));
      const artifactName =
        utils.toClassName(firstWord) + utils.toClassName(artifactType);

      const baseRepository = {name: artifactName, file: artifactFile};
      baseRepositoryList.push(baseRepository);
    }

    debug(`repository base classes: ${inspect(baseRepositoryList)}`);
    return baseRepositoryList;
  }

  /**
   * get the property name for the id field
   * @param {string} modelName
   */
  async _getModelIdProperty(modelName) {
    let fileContent = '';
    const modelFile = path.join(
      this.artifactInfo.modelDir,
      utils.getModelFileName(modelName),
    );
    try {
      fileContent = this.fs.read(modelFile, {});
    } catch (err) {
      debug(`${ERROR_READING_FILE} ${modelFile}: ${err.message}`);
      return this.exit(err);
    }

    return tsquery.getIdFromModel(fileContent);
  }

  /**
   * helper method to inspect and validate a repository type
   */
  async _inferRepositoryType() {
    if (!this.artifactInfo.dataSourceClass) {
      return;
    }
    const result = utils.isConnectorOfType(
      KEY_VALUE_CONNECTOR,
      this.artifactInfo.datasourcesDir,
      this.artifactInfo.dataSourceClass,
    );
    debug(`KeyValue Connector: ${result}`);

    if (result) {
      this.artifactInfo.repositoryTypeClass = KEY_VALUE_REPOSITORY;
      this.artifactInfo.defaultTemplate = REPOSITORY_KV_TEMPLATE;
    } else {
      this.artifactInfo.repositoryTypeClass = DEFAULT_CRUD_REPOSITORY;
      this.artifactInfo.defaultTemplate = REPOSITORY_CRUD_TEMPLATE;
    }

    this.artifactInfo.dataSourceName = utils.getDataSourceName(
      this.artifactInfo.datasourcesDir,
      this.artifactInfo.dataSourceClass,
    );

    this.artifactInfo.dataSourceClassName =
      utils.toClassName(this.artifactInfo.dataSourceName) + 'DataSource';
  }

  _setupGenerator() {
    this.artifactInfo = {
      type: 'repository ',
      rootDir: utils.sourceRootDir,
    };

    this.artifactInfo.outDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.repositoriesDir,
    );
    this.artifactInfo.datasourcesDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.datasourcesDir,
    );
    this.artifactInfo.modelDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.modelsDir,
    );

    // to be able to write multiple files to the index.ts
    this.artifactInfo.indexesToBeUpdated = [];

    this.artifactInfo.defaultTemplate = REPOSITORY_CRUD_TEMPLATE;

    this.option('model', {
      type: String,
      required: false,
      description: g.f('A valid model name'),
    });

    this.option('id', {
      type: String,
      required: false,
      description: g.f('A valid ID property name for the specified model'),
    });

    this.option('datasource', {
      type: String,
      required: false,
      description: g.f('A valid datasource name'),
    });

    this.option('repositoryBaseClass', {
      type: String,
      required: false,
      description: g.f('A valid repository base class'),
      default: 'DefaultCrudRepository',
    });

    return super._setupGenerator();
  }

  setOptions() {
    return super.setOptions();
  }

  checkLoopBackProject() {
    if (this.shouldExit()) return;
    return super.checkLoopBackProject();
  }

  async checkPaths() {
    if (this.shouldExit()) return;
    // check for datasources
    if (!fs.existsSync(this.artifactInfo.datasourcesDir)) {
      return this.exit(
        new Error(
          `${ERROR_NO_DATA_SOURCES_FOUND} ${this.artifactInfo.datasourcesDir}.
        ${chalk.yellow(
          'Please visit https://loopback.io/doc/en/lb4/DataSource-generator.html for information on how datasources are discovered',
        )}`,
        ),
      );
    }

    // check for models
    if (!fs.existsSync(this.artifactInfo.modelDir)) {
      return this.exit(
        new Error(
          `${ERROR_NO_MODELS_FOUND} ${this.artifactInfo.modelDir}.
        ${chalk.yellow(
          'Please visit https://loopback.io/doc/en/lb4/Model-generator.html for information on how models are discovered',
        )}`,
        ),
      );
    }
  }

  async promptDataSourceName() {
    if (this.shouldExit()) return false;

    debug('Prompting for a datasource ');
    let datasourcesList;

    // grab the datasourcename from the command line
    const cmdDatasourceName = this.options.datasource
      ? utils.toClassName(this.options.datasource) + 'Datasource'
      : '';

    debug('command line datasource is %j', cmdDatasourceName);

    try {
      datasourcesList = await utils.getArtifactList(
        this.artifactInfo.datasourcesDir,
        'datasource',
        true,
      );
      debug(
        'datasourcesList from %s/%s:',
        utils.sourceRootDir,
        utils.datasourcesDir,
        datasourcesList,
      );
    } catch (err) {
      return this.exit(err);
    }

    const availableDatasources = datasourcesList.filter(item => {
      const result = utils.isConnectorOfType(
        VALID_CONNECTORS_FOR_REPOSITORY,
        this.artifactInfo.datasourcesDir,
        item,
      );
      debug(
        'has %s connector of type %o? %s',
        item,
        VALID_CONNECTORS_FOR_REPOSITORY,
        result,
      );
      return result !== false;
    });

    debug(`artifactInfo.dataSourceClass ${this.artifactInfo.dataSourceClass}`);

    if (availableDatasources.length === 0) {
      return this.exit(
        new Error(
          `${ERROR_NO_DATA_SOURCES_FOUND} ${this.artifactInfo.datasourcesDir}.
        ${chalk.yellow(
          'Please visit https://loopback.io/doc/en/lb4/DataSource-generator.html for information on how datasources are discovered',
        )}`,
        ),
      );
    }

    if (availableDatasources.includes(cmdDatasourceName)) {
      Object.assign(this.artifactInfo, {
        dataSourceClass: cmdDatasourceName,
      });
    }

    return this.prompt([
      {
        type: 'list',
        name: 'dataSourceClass',
        message: PROMPT_MESSAGE_DATA_SOURCE,
        choices: availableDatasources,
        when: !this.artifactInfo.dataSourceClass,
        default: availableDatasources[0],
        validate: utils.validateClassName,
      },
    ])
      .then(props => {
        Object.assign(this.artifactInfo, props);
        debug(`props after datasource prompt: ${inspect(props)}`);
        return props;
      })
      .catch(err => {
        debug(`Error during datasource prompt: ${err}`);
        return this.exit(err);
      });
  }

  async promptModels() {
    if (this.shouldExit()) return false;

    await this._inferRepositoryType();

    let modelList;
    try {
      debug(`model list dir ${this.artifactInfo.modelDir}`);
      modelList = await utils.getArtifactList(
        this.artifactInfo.modelDir,
        'model',
      );
    } catch (err) {
      return this.exit(err);
    }

    if (this.options.model) {
      debug(`Model name received from command line: ${this.options.model}`);

      this.options.model = utils.toClassName(this.options.model);
      // assign the model name from the command line only if it is valid
      if (
        modelList &&
        modelList.length > 0 &&
        modelList.includes(this.options.model)
      ) {
        Object.assign(this.artifactInfo, {modelNameList: [this.options.model]});
      } else {
        modelList = [];
      }
    }

    if (modelList.length === 0) {
      return this.exit(
        new Error(
          `${ERROR_NO_MODELS_FOUND} ${this.artifactInfo.modelDir}.
        ${chalk.yellow(
          'Please visit https://loopback.io/doc/en/lb4/Model-generator.html for information on how models are discovered',
        )}`,
        ),
      );
    }

    return this.prompt([
      {
        type: 'checkbox',
        name: 'modelNameList',
        message: PROMPT_MESSAGE_MODEL,
        choices: modelList,
        when: this.artifactInfo.modelNameList === undefined,
        // Require at least one model to be selected
        // This prevents users from accidentally pressing ENTER instead of SPACE
        // to select a model from the list
        validate: result => !!result.length,
      },
    ])
      .then(props => {
        Object.assign(this.artifactInfo, props);
        debug(`props after model list prompt: ${inspect(props)}`);
        return props;
      })
      .catch(err => {
        debug(`Error during model list prompt: ${err}`);
        return this.exit(err);
      });
  }

  async promptBaseClass() {
    debug('Prompting for repository base');
    if (this.shouldExit()) return;

    const availableRepositoryList = [];

    debug(`repositoryTypeClass ${this.artifactInfo.repositoryTypeClass}`);
    // Add base repositories based on datasource type
    if (this.artifactInfo.repositoryTypeClass === KEY_VALUE_REPOSITORY)
      availableRepositoryList.push(...CLI_BASE_KEY_VALUE_REPOSITORIES);
    else availableRepositoryList.push(...CLI_BASE_CRUD_REPOSITORIES);
    availableRepositoryList.push(...CLI_BASE_SEPARATOR);

    try {
      this.artifactInfo.baseRepositoryList = await this._findBaseClasses(
        this.artifactInfo.outDir,
        'repository',
      );
      if (
        this.artifactInfo.baseRepositoryList &&
        this.artifactInfo.baseRepositoryList.length > 0
      ) {
        availableRepositoryList.push(...this.artifactInfo.baseRepositoryList);
        debug(`availableRepositoryList ${availableRepositoryList}`);
      }
    } catch (err) {
      return this.exit(err);
    }

    if (this.options.repositoryBaseClass) {
      debug(
        `Base repository received from command line: ${this.options.repositoryBaseClass}`,
      );
      this.artifactInfo.repositoryBaseClass = this.options.repositoryBaseClass;
    }

    return this.prompt([
      {
        type: 'list',
        name: 'repositoryBaseClass',
        message: PROMPT_BASE_REPOSITORY_CLASS,
        choices: availableRepositoryList,
        when: this.artifactInfo.repositoryBaseClass === undefined,
        default:
          this.artifactInfo.repositoryBaseClass === undefined
            ? availableRepositoryList[0]
            : this.options.repositoryBaseClass,
      },
    ])
      .then(props => {
        debug(`props after custom repository prompt: ${inspect(props)}`);
        Object.assign(this.artifactInfo, props);
        return props;
      })
      .catch(err => {
        debug(`Error during repository base class prompt: ${err.stack}`);
        return this.exit(err);
      });
  }

  async promptModelId() {
    if (this.shouldExit()) return false;
    let idProperty;

    debug(`Model ID property name from command line: ${this.options.id}`);
    debug(`Selected Models: ${this.artifactInfo.modelNameList}`);

    if (_.isEmpty(this.artifactInfo.modelNameList)) {
      return this.exit(new Error(`${ERROR_NO_MODEL_SELECTED}`));
    } else {
      // iterate thru each selected model, infer or ask for the ID type
      for (const item of this.artifactInfo.modelNameList) {
        this.artifactInfo.modelName = item;

        const prompts = [
          {
            type: 'input',
            name: 'propertyName',
            message: g.f(
              'Please enter the name of the ID property for %s:',
              `${item}`,
            ),
            default: 'id',
          },
        ];

        // user supplied the id from the command line
        if (this.options.id) {
          debug(`passing thru this.options.id with value : ${this.options.id}`);

          idProperty = this.options.id;
          /**  make sure it is only used once, in case user selected more
           * than one model.
           */
          delete this.options.id;
        } else {
          idProperty = await this._getModelIdProperty(item);
          if (idProperty === null) {
            const answer = await this.prompt(prompts);
            idProperty = answer.propertyName;
          }
        }
        this.artifactInfo.idProperty = idProperty;
        // Generate this repository
        await this._scaffold();
      }
    }
  }

  async _scaffold() {
    if (this.shouldExit()) return false;

    this.artifactInfo.isRepositoryBaseBuiltin = BASE_REPOSITORIES.includes(
      this.artifactInfo.repositoryBaseClass,
    );
    debug(
      `isRepositoryBaseBuiltin : ${this.artifactInfo.isRepositoryBaseBuiltin}`,
    );
    if (!this.artifactInfo.isRepositoryBaseBuiltin) {
      const baseIndex = _.findIndex(this.artifactInfo.baseRepositoryList, [
        'name',
        this.artifactInfo.repositoryBaseClass,
      ]);
      this.artifactInfo.repositoryBaseFile =
        this.artifactInfo.baseRepositoryList[baseIndex].file;
    }

    if (this.options.name) {
      this.artifactInfo.className = utils.toClassName(this.options.name);
      this.artifactInfo.outFile = utils.getRepositoryFileName(
        this.options.name,
      );

      // make sure the name supplied from cmd line is only used once
      delete this.options.name;
    } else {
      this.artifactInfo.className = utils.toClassName(
        this.artifactInfo.modelName,
      );

      this.artifactInfo.outFile = utils.getRepositoryFileName(
        this.artifactInfo.modelName,
      );

      this.artifactInfo.indexesToBeUpdated.push({
        dir: this.artifactInfo.outDir,
        file: this.artifactInfo.outFile,
      });
    }

    const source = this.templatePath(
      path.join(
        utils.sourceRootDir,
        utils.repositoriesDir,
        this.artifactInfo.defaultTemplate,
      ),
    );

    const dest = this.destinationPath(
      path.join(this.artifactInfo.outDir, this.artifactInfo.outFile),
    );

    if (debug.enabled) {
      debug(`artifactInfo: ${inspect(this.artifactInfo)}`);
      debug(`Copying artifact to: ${dest}`);
    }

    this.copyTemplatedFiles(source, dest, this.artifactInfo);
    return;
  }

  async end() {
    this.artifactInfo.type =
      this.artifactInfo.modelNameList &&
      this.artifactInfo.modelNameList.length > 1
        ? 'Repositories'
        : 'Repository';

    this.artifactInfo.modelNameList = _.map(
      this.artifactInfo.modelNameList,
      repositoryName => {
        return repositoryName + 'Repository';
      },
    );

    this.artifactInfo.name = this.artifactInfo.modelNameList
      ? this.artifactInfo.modelNameList.join(this.classNameSeparator)
      : this.artifactInfo.modelName;

    await super.end();
  }
},
        'loopback4:service': class ServiceGenerator extends ArtifactGenerator {
  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);
  }

  _setupGenerator() {
    this.artifactInfo = {
      type: 'service',
      rootDir: utils.sourceRootDir,
    };

    this.artifactInfo.outDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.servicesDir,
    );

    this.artifactInfo.datasourcesDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.datasourcesDir,
    );

    this.option('type', {
      type: String,
      required: false,
      description: g.f('Service type - proxy, class or provider'),
    });

    this.option('datasource', {
      type: String,
      required: false,
      description: g.f('A valid datasource name'),
    });

    return super._setupGenerator();
  }

  setOptions() {
    return super.setOptions();
  }

  checkLoopBackProject() {
    if (this.shouldExit()) return;
    return super.checkLoopBackProject();
  }

  /**
   * Ask for Service Type
   */
  async promptServiceType() {
    debug('Prompting for service type');
    if (this.shouldExit()) return;

    if (this.options.datasource) {
      // The `datasource` option implies remote proxy
      this.artifactInfo.serviceType = REMOTE_SERVICE_PROXY;
    } else if (this.options.type === REMOTE_SERVICE_PROXY) {
      this.artifactInfo.serviceType = REMOTE_SERVICE_PROXY;
    } else if (this.options.type === LOCAL_SERVICE_CLASS) {
      this.artifactInfo.serviceType = LOCAL_SERVICE_CLASS;
    } else if (this.options.type === LOCAL_SERVICE_PROVIDER) {
      this.artifactInfo.serviceType = LOCAL_SERVICE_PROVIDER;
    } else if (this.options.type) {
      this.exit(
        new Error(
          `Invalid service type: ${this.options.type} (${REMOTE_SERVICE_PROXY}, ${LOCAL_SERVICE_CLASS}, or ${LOCAL_SERVICE_PROVIDER}).`,
        ),
      );
      return;
    }

    if (!this.artifactInfo.serviceType) {
      const prompts = [
        {
          type: 'list',
          name: 'serviceType',
          // capitalization
          message: g.f('%s type:', utils.toClassName(this.artifactInfo.type)),
          choices: [
            {
              name: g.f('Remote service proxy backed by a data source'),
              value: REMOTE_SERVICE_PROXY,
            },
            {
              name: g.f('Local service class bound to application context'),
              value: LOCAL_SERVICE_CLASS,
            },
            {
              name: g.f('Local service provider bound to application context'),
              value: LOCAL_SERVICE_PROVIDER,
            },
          ],
          default: 0,
          when: !this.options.datasource && !this.options.local,
        },
      ];
      const props = await this.prompt(prompts);
      Object.assign(this.artifactInfo, props);
    }

    this.artifactInfo.serviceType =
      this.artifactInfo.serviceType || REMOTE_SERVICE_PROXY;
    this.artifactInfo.defaultTemplate =
      TEMPLATES[this.artifactInfo.serviceType];
  }

  _isRemoteProxy() {
    return this.artifactInfo.serviceType === REMOTE_SERVICE_PROXY;
  }

  async checkDataSources() {
    if (this.shouldExit()) return;
    if (!this._isRemoteProxy()) return;
    // check for datasources
    if (!fs.existsSync(this.artifactInfo.datasourcesDir)) {
      new Error(
        `${ERROR_NO_DATA_SOURCES_FOUND} ${
          this.artifactInfo.datasourcesDir
        }. ${chalk.yellow(
          'Please visit https://loopback.io/doc/en/lb4/DataSource-generator.html for information on how datasources are discovered',
        )}`,
      );
    }
  }

  async promptDataSourceName() {
    debug('Prompting for a datasource ');
    if (this.shouldExit()) return;
    if (!this._isRemoteProxy()) return;
    let datasourcesList;

    // grab the datasource name from the command line
    const cmdDatasourceName = this.options.datasource
      ? utils.toClassName(this.options.datasource) + 'Datasource'
      : '';

    debug(`command line datasource is  ${cmdDatasourceName}`);

    try {
      datasourcesList = await utils.getArtifactList(
        this.artifactInfo.datasourcesDir,
        'datasource',
        true,
      );
      debug(
        `datasourcesList from ${utils.sourceRootDir}/${utils.datasourcesDir} : ${datasourcesList}`,
      );
    } catch (err) {
      return this.exit(err);
    }

    const availableDatasources = datasourcesList.filter(item => {
      debug(
        `inspecting datasource: ${item} for basemodel: ${VALID_CONNECTORS_FOR_SERVICE}`,
      );
      const result = utils.isConnectorOfType(
        VALID_CONNECTORS_FOR_SERVICE,
        this.artifactInfo.datasourcesDir,
        item,
      );
      return result;
    });

    if (availableDatasources.length === 0) {
      return this.exit(
        new Error(
          `${ERROR_NO_DATA_SOURCES_FOUND} ${
            this.artifactInfo.datasourcesDir
          }. ${chalk.yellow(
            'Please visit https://loopback.io/doc/en/lb4/DataSource-generator.html for information on how datasources are discovered',
          )}`,
        ),
      );
    }

    if (availableDatasources.includes(cmdDatasourceName)) {
      Object.assign(this.artifactInfo, {
        dataSourceClass: cmdDatasourceName,
      });
    }

    debug(`artifactInfo.dataSourceClass ${this.artifactInfo.dataSourceClass}`);

    return this.prompt([
      {
        type: 'list',
        name: 'dataSourceClass',
        message: PROMPT_MESSAGE_DATA_SOURCE,
        choices: availableDatasources,
        when: !this.artifactInfo.dataSourceClass,
        default: availableDatasources[0],
        validate: utils.validateClassName,
      },
    ])
      .then(props => {
        Object.assign(this.artifactInfo, props);
        this.artifactInfo.dataSourceName = utils.getDataSourceName(
          this.artifactInfo.datasourcesDir,
          this.artifactInfo.dataSourceClass,
        );

        if (!this.artifactInfo.dataSourceName) {
          throw new Error('Datasource config does not have `name` property');
        }

        this.artifactInfo.dataSourceClassName =
          utils.toClassName(this.artifactInfo.dataSourceName) + 'DataSource';

        debug(`props after datasource prompt: ${inspect(props)}`);
        return props;
      })
      .catch(err => {
        debug(`Error during datasource prompt: ${err}`);
        return this.exit(err);
      });
  }

  /**
   * Ask for Service Name
   */
  async promptArtifactName() {
    debug('Prompting for service name');
    if (this.shouldExit()) return;

    if (this.options.name) {
      Object.assign(this.artifactInfo, {name: this.options.name});
    }

    const prompts = [
      {
        type: 'input',
        name: 'name',
        // capitalization
        message: g.f('%s name:', utils.toClassName(this.artifactInfo.type)),
        when: !this.artifactInfo.name,
        validate: utils.validateClassName,
      },
    ];
    return this.prompt(prompts).then(props => {
      Object.assign(this.artifactInfo, props);
      return props;
    });
  }

  /**
   * this method will be in charge of inferring and create
   * the remote interfaces from either SOAP wsdl or REST openApi json
   *
   * TODO: add functionality to inspect service specs to generate
   * strongly-typed service proxies and corresponding model definitions.
   */
  async inferInterfaces() {
    if (this.shouldExit()) return;
    if (!this._isRemoteProxy()) return;
    const connectorType = utils.getDataSourceConnectorName(
      this.artifactInfo.datasourcesDir,
      this.artifactInfo.dataSourceClass,
    );

    // connectorType should output soap or rest in this case
    // The base an further work for inferring remote methods
    debug(`connectorType: ${connectorType}`);
  }

  scaffold() {
    if (this.shouldExit()) return false;

    // Setting up data for templates
    this.artifactInfo.className = utils.toClassName(this.artifactInfo.name);
    this.artifactInfo.fileName = utils.toFileName(this.artifactInfo.name);

    Object.assign(this.artifactInfo, {
      outFile: utils.getServiceFileName(this.artifactInfo.name),
    });

    const source = this.templatePath(this.artifactInfo.defaultTemplate);

    const dest = this.destinationPath(
      path.join(this.artifactInfo.outDir, this.artifactInfo.outFile),
    );

    debug(`artifactInfo: ${inspect(this.artifactInfo)}`);
    debug(`Copying artifact to: ${dest}`);

    this.copyTemplatedFiles(source, dest, this.artifactInfo);
    return;
  }

  install() {
    if (this.shouldExit()) return false;
    if (!this._isRemoteProxy()) return;

    this.artifactInfo.dataSourceClassName =
      utils.toClassName(this.artifactInfo.dataSourceName) + 'DataSource';
    debug('install npm dependencies');
    const pkgJson = this.packageJson || {};
    const deps = pkgJson.dependencies || {};
    const pkgs = [];

    if (!deps['@loopback/service-proxy']) {
      pkgs.push('@loopback/service-proxy');
    }

    if (pkgs.length === 0) return;

    this.pkgManagerInstall(pkgs, {
      npm: {
        save: true,
      },
    });
  }

  async end() {
    await super.end();
  }
},
        'loopback4:example': class extends BaseGenerator {
  static getAllExamples() {
    return EXAMPLES;
  }

  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);
  }

  _setupGenerator() {
    this.projectType = 'example';
    this.argument('example-name', {
      type: String,
      description: g.f('Name of the example to clone'),
      required: false,
    });

    return super._setupGenerator();
  }

  setOptions() {
    return super.setOptions();
  }

  help() {
    const examplesHelp = Object.keys(EXAMPLES)
      .map(name => `  ${name}: ${EXAMPLES[name]}`)
      .join('\n');

    return super.help() + `\nAvailable examples:\n${examplesHelp}\n`;
  }

  _describeExamples() {}

  promptExampleName() {
    if (this.shouldExit()) return;
    if (this.options['example-name']) {
      this.exampleName = this.options['example-name'];
      return;
    }

    const choices = Object.keys(EXAMPLES).map(k => {
      return {
        name: `${k}: ${EXAMPLES[k]}`,
        value: `${k}`,
        short: `${k}`,
      };
    });
    const prompts = [
      {
        name: 'name',
        message: g.f('What example would you like to clone?'),
        type: 'list',
        choices,
      },
    ];
    return this.prompt(prompts).then(
      answers => (this.exampleName = answers.name),
    );
  }

  validateExampleName() {
    if (this.shouldExit()) return;
    if (this.exampleName in EXAMPLES) return;
    this.exit(
      g.f(
        'Invalid example name: %s\n' +
          'Run "lb4 example --help" to print the list of available example names.',
        this.exampleName,
      ),
    );
  }

  async downloadAndExtract() {
    if (this.shouldExit()) return false;
    const cwd = process.cwd();
    const absOutDir = await downloadAndExtractExample(this.exampleName, cwd);
    this.outDir = path.relative(cwd, absOutDir);
    const tsconfig = path.join(absOutDir, 'tsconfig.json');

    // Support older versions of examples that are using `tsconfig.build.json`
    const tsBuildConfig = path.join(absOutDir, 'tsconfig.build.json');
    const exists = await fs.pathExists(tsconfig);
    if (!exists) {
      return fs.rename(tsBuildConfig, tsconfig);
    }

    // Recent versions of examples are using project references inside monorepo,
    // see https://github.com/loopbackio/loopback-next/pull/5155
    // We must switch to standalone mode (no project references) when the code
    // was checked out outside of our monorepo.
    const tsconfigContent = await fs.readJson(tsconfig);
    delete tsconfigContent.references;
    tsconfigContent.compilerOptions.composite = false;
    await fs.writeJson(tsconfig, tsconfigContent);
  }

  install() {
    if (this.shouldExit()) return false;
    this.destinationRoot(this.outDir);
    return super.install();
  }

  async end() {
    await super.end();
    this.log();
    this.log(g.f('The example was cloned to %s.', chalk.green(this.outDir)));
    this.log();
  }
},
        'loopback4:openapi': class OpenApiGenerator extends BaseGenerator {
  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);
  }

  _setupGenerator() {
    this.argument('url', {
      description: g.f('URL or file path of the OpenAPI spec'),
      required: false,
      type: String,
    });

    this.option('url', {
      description: g.f('URL or file path of the OpenAPI spec'),
      required: false,
      type: String,
    });

    this.option('validate', {
      description: g.f('Validate the OpenAPI spec'),
      required: false,
      default: false,
      type: Boolean,
    });

    this.option('server', {
      description: g.f('Generate server-side controllers for the OpenAPI spec'),
      required: false,
      default: true,
      type: Boolean,
    });

    this.option('client', {
      description: g.f(
        'Generate client-side service proxies for the OpenAPI spec',
      ),
      required: false,
      default: false,
      type: Boolean,
    });

    this.option('datasource', {
      type: String,
      required: false,
      description: g.f('A valid datasource name for the OpenAPI endpoint'),
    });

    this.option('baseModel', {
      description: g.f('Base model class'),
      required: false,
      default: '',
      type: String,
    });

    this.option('promote-anonymous-schemas', {
      description: g.f('Promote anonymous schemas as models'),
      required: false,
      default: false,
      type: Boolean,
    });

    return super._setupGenerator();
  }

  setOptions() {
    return super.setOptions();
  }

  checkLoopBackProject() {
    return super.checkLoopBackProject();
  }

  async promptDataSourceName() {
    if (this.shouldExit()) return false;
    if (
      this.options.baseModel &&
      this.options.baseModel !== 'Model' &&
      this.options.baseModel !== 'Entity'
    ) {
      this.exit(
        `Invalid baseModel: ${this.options.baseModel}. Valid values: Model, Entity.`,
      );
      return;
    }
    if (this.options.client !== true) return;
    if (this.options.url) return;

    debug('Prompting for a datasource');

    // grab the datasource from the command line
    const dsClass = this.options.datasource
      ? utils.toClassName(this.options.datasource) + 'DataSource'
      : '';

    debug(`command line datasource is ${dsClass}`);

    const dataSourcesDir = this.destinationPath(
      `${utils.sourceRootDir}/${utils.datasourcesDir}`,
    );

    const dataSourceClasses = await utils.getArtifactList(
      dataSourcesDir,
      'datasource',
      true,
    );

    // List all data sources
    const dataSourceList = dataSourceClasses.map(ds => ({
      className: ds,
    }));
    debug('datasourceList from %s', dataSourcesDir, dataSourceList);

    // Find openapi data sources
    const openApiDataSources = dataSourceList.filter(ds => {
      debug(`data source inspecting item: ${ds.className}`);
      const dsObj = utils.getDataSourceConfig(dataSourcesDir, ds.className);

      if (
        dsObj.connector === 'openapi' ||
        dsObj.connector === 'loopback-connector-openapi'
      ) {
        ds.usePositionalParams = dsObj.positional;
        ds.name = dsObj.name;
        ds.className = utils.toClassName(dsObj.name) + 'DataSource';
        ds.specPath = dsObj.spec;
        return true;
      }
    });

    debug('Data sources using openapi connector', openApiDataSources);

    if (openApiDataSources.length === 0) {
      return;
    }

    const matchedDs = openApiDataSources.find(ds => ds.className === dsClass);
    if (matchedDs) {
      this.dataSourceInfo = {
        name: matchedDs.name,
        className: matchedDs.className,
        usePositionalParams: matchedDs.usePositionalParams,
        specPath: matchedDs.specPath,
      };
      this.log(
        g.f('Datasource %s - %s found for OpenAPI: %s'),
        this.options.datasource,
        this.dataSourceInfo.className,
        this.dataSourceInfo.specPath,
      );
      return;
    }

    if (dsClass) return;

    const answers = await this.prompt([
      {
        type: 'list',
        name: 'dataSource',
        message: g.f('Please select the datasource'),
        choices: openApiDataSources.map(ds => ({
          name: `${ds.name} - ${ds.className}`,
          value: ds,
        })),
        default: `${openApiDataSources[0].name} - ${openApiDataSources[0].className}`,
        validate: utils.validateClassName,
      },
    ]);

    debug('Datasource selected', answers);
    if (answers && answers.dataSource) {
      this.dataSourceInfo = {
        name: answers.dataSource.name,
        className: answers.dataSource.className,
        usePositionalParams: answers.dataSource.usePositionalParams,
        specPath: answers.dataSource.specPath,
      };
      this.log(
        g.f('Datasource %s - %s selected: %s'),
        this.dataSourceInfo.name,
        this.dataSourceInfo.className,
        this.dataSourceInfo.specPath,
      );
    }
  }

  async askForSpecUrlOrPath() {
    if (this.shouldExit()) return;
    if (this.dataSourceInfo && this.dataSourceInfo.specPath) {
      this.url = this.dataSourceInfo.specPath;
      return;
    }
    const prompts = [
      {
        name: 'url',
        message: g.f('Enter the OpenAPI spec url or file path:'),
        default: this.options.url,
        validate: validateUrlOrFile,
        when: this.options.url == null,
      },
    ];
    const answers = await this.prompt(prompts);
    if (answers.url) {
      this.url = answers.url.trim();
    } else {
      this.url = this.options.url;
    }
  }

  async loadAndBuildApiSpec() {
    if (this.shouldExit()) return;
    try {
      const result = await loadAndBuildSpec(this.url, {
        log: this.log,
        validate: this.options.validate,
        promoteAnonymousSchemas: this.options['promote-anonymous-schemas'],
      });
      debugJson('OpenAPI spec', result.apiSpec);
      Object.assign(this, result);
    } catch (e) {
      this.exit(e);
    }
  }

  async selectControllers() {
    if (this.shouldExit()) return;
    const choices = this.controllerSpecs.map(c => {
      const names = [];
      if (this.options.server !== false) {
        names.push(c.className);
      }
      if (this.options.client === true) {
        names.push(c.serviceClassName);
      }
      const name = c.tag ? `[${c.tag}] ${names.join(' ')}` : names.join(' ');
      return {
        name,
        value: c.className,
        checked: true,
      };
    });
    const prompts = [
      {
        name: 'controllerSelections',
        message: g.f(
          'Select controllers and/or service proxies to be generated:',
        ),
        type: 'checkbox',
        choices: choices,
        default: choices.map(c => c.value),
        // Require at least one item to be selected
        // This prevents users from accidentally pressing ENTER instead of SPACE
        // to select an item from the list
        validate: result => !!result.length,
      },
    ];
    const selections = (await this.prompt(prompts)).controllerSelections;
    this.selectedControllers = this.controllerSpecs.filter(c =>
      selections.some(a => a === c.className),
    );
    this.selectedServices = this.selectedControllers;
    this.selectedControllers.forEach(c => {
      c.fileName = getControllerFileName(c.tag || c.className);
      c.serviceFileName = getServiceFileName(c.tag || c.serviceClassName);
    });
  }

  _generateControllers() {
    const source = this.templatePath(
      'src/controllers/controller-template.ts.ejs',
    );
    for (const c of this.selectedControllers) {
      const controllerFile = c.fileName;
      if (debug.enabled) {
        debug(`Artifact output filename set to: ${controllerFile}`);
      }
      const dest = this.destinationPath(`src/controllers/${controllerFile}`);
      if (debug.enabled) {
        debug('Copying artifact to: %s', dest);
      }
      this.copyTemplatedFiles(source, dest, mixinEscapeComment(c));
    }
  }

  async _generateDataSource() {
    let specPath = this.url;
    const parsed = parse(this.url);
    if (
      // Relative paths and UNIX paths don't have any protocol set
      parsed.protocol == null ||
      // Support absolute Windows paths, e.g. "C:\some\dir\api.yaml"
      // When such path is parsed as a URL, we end up with the drive ("C:")
      // recognized as the protocol.
      (isWindows && parsed.protocol.match(/^[a-zA-Z]:$/))
    ) {
      specPath = path.relative(this.destinationRoot(), this.url);
      if (isWindows && !path.parse(specPath).root) {
        // On Windows, convert the relative path to use Unix-style separator
        // We need this behavior for our snapshot-based tests, but @bajtos
        // thinks it is also nicer for users - at the end of the day,
        // this is a spec URL and URLs always use forward-slash characters
        specPath = slash(specPath);
      }
    }
    this.dataSourceInfo.specPath = specPath;
    const dsConfig = {
      name: this.dataSourceInfo.name,
      connector: 'openapi',
      spec: this.dataSourceInfo.specPath,
      validate: false,
      positional:
        this.dataSourceInfo.usePositionalParams !== false ? 'bodyLast' : false,
    };

    this.dataSourceInfo.dsConfigString = json5.stringify(dsConfig, null, 2);

    const classTemplatePath = this.templatePath(
      'src/datasources/datasource.ts.ejs',
    );
    const dataSourceFile = this.dataSourceInfo.outFile;
    if (debug.enabled) {
      debug(`Artifact output filename set to: ${dataSourceFile}`);
    }
    const dest = this.destinationPath(`src/datasources/${dataSourceFile}`);
    if (debug.enabled) {
      debug('Copying artifact to: %s', dest);
    }
    const context = {...this.dataSourceInfo};
    let dsClass = context.className;
    dsClass = dsClass.endsWith('DataSource')
      ? dsClass.substring(0, dsClass.length - 'DataSource'.length)
      : dsClass;
    context.className = dsClass;
    this.copyTemplatedFiles(classTemplatePath, dest, context);
    this.dataSources = [{fileName: dataSourceFile}];
  }

  _generateServiceProxies() {
    const source = this.templatePath(
      'src/services/service-proxy-template.ts.ejs',
    );
    for (const c of this.selectedControllers) {
      const file = c.serviceFileName;
      if (debug.enabled) {
        debug(`Artifact output filename set to: ${file}`);
      }
      const dest = this.destinationPath(`src/services/${file}`);
      if (debug.enabled) {
        debug('Copying artifact to: %s', dest);
      }
      const context = {
        ...mixinEscapeComment(c),
        usePositionalParams: this.dataSourceInfo.usePositionalParams,
        dataSourceName: this.dataSourceInfo.name,
        dataSourceClassName: this.dataSourceInfo.className,
      };
      this.copyTemplatedFiles(source, dest, context);
    }
  }

  _generateModels() {
    const modelSource = this.templatePath('src/models/model-template.ts.ejs');
    const typeSource = this.templatePath('src/models/type-template.ts.ejs');
    for (const m of this.modelSpecs) {
      if (!m.fileName) continue;
      m.baseModel = this.options.baseModel;
      const modelFile = m.fileName;
      if (debug.enabled) {
        debug(`Artifact output filename set to: ${modelFile}`);
      }
      const dest = this.destinationPath(`src/models/${modelFile}`);
      if (debug.enabled) {
        debug('Copying artifact to: %s', dest);
      }
      const source = m.kind === 'class' ? modelSource : typeSource;
      this.copyTemplatedFiles(source, dest, mixinEscapeComment(m));
    }
  }

  // update index file for models and controllers
  async _updateIndex(dir) {
    const update = async files => {
      const targetDir = this.destinationPath(`src/${dir}`);
      for (const f of files) {
        // Check all files being generated to ensure they succeeded
        const status = this.conflicter.generationStatus[f];
        if (status !== 'skip' && status !== 'identical') {
          await updateIndex(targetDir, f, this.fs);
        }
      }
    };
    let files = undefined;
    switch (dir) {
      case MODEL:
        files = this.modelSpecs.map(m => m.fileName);
        break;
      case CONTROLLER:
        files = this.selectedControllers.map(m => m.fileName);
        break;
      case SERVICE:
        files = this.selectedServices.map(m => m.serviceFileName);
        break;
      case DATASOURCE:
        files = this.dataSources.map(m => m.fileName);
        break;
    }

    if (files != null) {
      await update(files);
    }
  }

  async promptNewDataSourceName() {
    if (this.shouldExit()) return false;
    if (this.options.client !== true) return;
    // skip if the data source already exists
    if (this.dataSourceInfo && this.dataSourceInfo.name) return;

    this.dataSourceInfo = {
      name: this.options.datasource || 'openapi',
      usePositionalParams: this.options.positional !== false,
    };

    debug('Prompting for artifact name');
    const prompts = [
      {
        type: 'input',
        name: 'dataSourceName',
        // capitalization
        message: g.f('DataSource name:'),
        default: 'openapi',
        validate: utils.validateClassName,
        when: !this.options.datasource,
      },
    ];

    const answers = await this.prompt(prompts);
    if (answers != null && answers.dataSourceName) {
      this.dataSourceInfo.name = answers.dataSourceName;
    }

    // Setting up data for templates
    this.dataSourceInfo.className =
      utils.toClassName(this.dataSourceInfo.name) + 'DataSource';
    this.dataSourceInfo.fileName = utils.toFileName(this.dataSourceInfo.name);
    this.dataSourceInfo.outFile = `${this.dataSourceInfo.fileName}.datasource.ts`;
  }

  async scaffold() {
    if (this.shouldExit()) return false;
    this._generateModels();
    await this._updateIndex(MODEL);
    if (this.options.server !== false) {
      this._generateControllers();
      await this._updateIndex(CONTROLLER);
    }
    if (this.options.client === true) {
      if (this.dataSourceInfo.outFile) {
        await this._generateDataSource();
        await this._updateIndex(DATASOURCE);
      }
      this._generateServiceProxies();
      await this._updateIndex(SERVICE);
    }
  }

  install() {
    if (this.shouldExit()) return false;
    debug('install npm dependencies');
    const pkgJson = this.packageJson || {};
    const deps = pkgJson.dependencies || {};
    const pkgs = [];
    const connectorVersionRange = deps['loopback-connector-openapi'];
    if (!connectorVersionRange) {
      // No dependency found for loopback-connector-openapi
      pkgs.push('loopback-connector-openapi');
    } else {
      // `loopback-connector-openapi` exists - make sure its version range
      // is >= 6.0.0
      try {
        const minVersion = semver.minVersion(connectorVersionRange);
        if (semver.lt(minVersion, '6.0.0')) {
          pkgs.push('loopback-connector-openapi@^6.0.0');
        }
      } catch (err) {
        // The version can be a tarball
        this.log(err);
      }
    }

    if (pkgs.length === 0) return;

    this.pkgManagerInstall(pkgs, {
      npm: {
        save: true,
      },
    });
  }

  async end() {
    await super.end();
    if (this.shouldExit()) return;
  }
},
        'loopback4:observer': class ObserverGenerator extends ArtifactGenerator {
  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);
  }

  _setupGenerator() {
    this.option('group', {
      description: g.f('Name of the observer group for ordering'),
      required: false,
      type: String,
    });

    this.artifactInfo = {
      type: 'observer',
      rootDir: utils.sourceRootDir,
    };

    this.artifactInfo.outDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.observersDir,
    );

    this.artifactInfo.defaultTemplate = SCRIPT_TEMPLATE;

    return super._setupGenerator();
  }

  setOptions() {
    return super.setOptions();
  }

  checkLoopBackProject() {
    if (this.shouldExit()) return;
    return super.checkLoopBackProject();
  }

  /**
   * Ask for Service Name
   */
  async promptArtifactName() {
    debug('Prompting for observer name');
    if (this.shouldExit()) return;

    if (this.options.name) {
      Object.assign(this.artifactInfo, {name: this.options.name});
    }

    const prompts = [
      {
        type: 'input',
        name: 'name',
        // capitalization
        message: g.f('%s name:', utils.toClassName(this.artifactInfo.type)),
        when: !this.artifactInfo.name,
        validate: utils.validateClassName,
      },
    ];
    return this.prompt(prompts).then(props => {
      Object.assign(this.artifactInfo, props);
      return props;
    });
  }

  async promptObserverGroup() {
    debug('Prompting for observer group');
    if (this.shouldExit()) return;

    if (this.options.group) {
      Object.assign(this.artifactInfo, {group: this.options.group});
    }

    const prompts = [
      {
        type: 'input',
        name: 'group',
        // capitalization
        message: g.f('%s group:', utils.toClassName(this.artifactInfo.type)),
        default: '',
        when: !this.artifactInfo.group,
      },
    ];
    return this.prompt(prompts).then(props => {
      Object.assign(this.artifactInfo, props);
      return props;
    });
  }

  scaffold() {
    if (this.shouldExit()) return false;

    // Setting up data for templates
    this.artifactInfo.className =
      utils.toClassName(this.artifactInfo.name) + 'Observer';
    this.artifactInfo.fileName = utils.toFileName(this.artifactInfo.name);

    Object.assign(this.artifactInfo, {
      outFile: utils.getObserverFileName(this.artifactInfo.name),
    });

    const source = this.templatePath(this.artifactInfo.defaultTemplate);

    const dest = this.destinationPath(
      path.join(this.artifactInfo.outDir, this.artifactInfo.outFile),
    );

    debug(`artifactInfo: ${inspect(this.artifactInfo)}`);
    debug(`Copying artifact to: ${dest}`);

    this.copyTemplatedFiles(source, dest, this.artifactInfo);
    return;
  }

  async end() {
    await super.end();
  }
},
        'loopback4:interceptor': class InterceptorGenerator extends ArtifactGenerator {
  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);
  }

  _setupGenerator() {
    this.option('global', {
      description: g.f('Flag to indicate a global interceptor'),
      required: false,
      type: Boolean,
    });

    this.option('group', {
      description: g.f('Group name for ordering the global interceptor'),
      required: false,
      type: String,
    });

    this.artifactInfo = {
      type: 'interceptor',
      rootDir: utils.sourceRootDir,
    };

    this.artifactInfo.outDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.interceptorsDir,
    );

    this.artifactInfo.defaultTemplate = SCRIPT_TEMPLATE;

    return super._setupGenerator();
  }

  setOptions() {
    return super.setOptions();
  }

  checkLoopBackProject() {
    if (this.shouldExit()) return;
    return super.checkLoopBackProject();
  }

  /**
   * Ask for Service Name
   */
  async promptArtifactName() {
    debug('Prompting for interceptor name');
    if (this.shouldExit()) return;

    if (this.options.name) {
      Object.assign(this.artifactInfo, {name: this.options.name});
    }

    const prompts = [
      {
        type: 'input',
        name: 'name',
        // capitalization
        message: g.f('%s name:', utils.toClassName(this.artifactInfo.type)),
        when: !this.artifactInfo.name,
        validate: utils.validateClassName,
      },
    ];
    return this.prompt(prompts).then(props => {
      Object.assign(this.artifactInfo, props);
      return props;
    });
  }

  async promptGlobal() {
    debug('Prompting for global interceptor flag');
    if (this.shouldExit()) return;

    if (this.options.global != null) {
      Object.assign(this.artifactInfo, {isGlobal: !!this.options.global});
      return;
    }

    // --group hints global
    if (this.options.group != null) {
      Object.assign(this.artifactInfo, {isGlobal: true});
      return;
    }

    const prompts = [
      {
        type: 'confirm',
        name: 'isGlobal',
        message: g.f('Is it a global interceptor?'),
        default: true,
      },
    ];
    return this.prompt(prompts).then(props => {
      Object.assign(this.artifactInfo, props);
      return props;
    });
  }

  async promptInterceptorGroup() {
    if (!this.artifactInfo.isGlobal) return;
    debug('Prompting for global interceptor group');
    if (this.shouldExit()) return;

    if (this.options.group) {
      Object.assign(this.artifactInfo, {group: this.options.group});
      return;
    }

    const note = g.f(
      'Global interceptors are sorted by the order of an array of' +
        ' group names bound to ContextBindings.GLOBAL_INTERCEPTOR_ORDERED_GROUPS.' +
        ' See https://loopback.io/doc/en/lb4/Interceptors.html#order-of-invocation-for-interceptors.',
    );

    this.log();
    this.log(note);
    this.log();

    const prompts = [
      {
        type: 'input',
        name: 'group',
        // capitalization
        message: g.f("Group name for the global interceptor: ('')"),
      },
    ];
    return this.prompt(prompts).then(props => {
      Object.assign(this.artifactInfo, props);
      return props;
    });
  }

  scaffold() {
    if (this.shouldExit()) return false;

    // Setting up data for templates
    this.artifactInfo.className =
      utils.toClassName(this.artifactInfo.name) + 'Interceptor';
    this.artifactInfo.fileName = utils.toFileName(this.artifactInfo.name);

    Object.assign(this.artifactInfo, {
      outFile: utils.getInterceptorFileName(this.artifactInfo.name),
    });

    const source = this.templatePath(this.artifactInfo.defaultTemplate);

    const dest = this.destinationPath(
      path.join(this.artifactInfo.outDir, this.artifactInfo.outFile),
    );

    debug(`artifactInfo: ${inspect(this.artifactInfo)}`);
    debug(`Copying artifact to: ${dest}`);

    this.copyTemplatedFiles(source, dest, this.artifactInfo);
    return;
  }

  async end() {
    await super.end();
  }
},
        'loopback4:discover': class DiscoveryGenerator extends ArtifactGenerator {
  constructor(args, opts) {
    super(args, opts);

    this.option('dataSource', {
      type: String,
      alias: 'ds',
      description: g.f('The name of the datasource to discover'),
    });

    this.option('views', {
      type: Boolean,
      description: g.f('Boolean to discover views'),
      default: true,
    });

    this.option('relations', {
      type: Boolean,
      description: g.f('Discover and create relations'),
      default: false,
    });

    this.option('schema', {
      type: String,
      description: g.f('Schema to discover'),
      default: '',
    });

    this.option('all', {
      type: Boolean,
      description: g.f('Discover all models without prompting users to select'),
      default: false,
    });

    this.option('outDir', {
      type: String,
      description: g.f(
        'Specify the directory into which the `model.model.ts` files will be placed',
      ),
      default: undefined,
    });

    this.option('optionalId', {
      type: Boolean,
      description: g.f('Boolean to mark id property as optional field'),
      default: false,
    });
  }

  _setupGenerator() {
    this.artifactInfo = {
      type: 'discover',
      rootDir,
      outDir: path.resolve(rootDir, 'models'),
    };

    return super._setupGenerator();
  }

  /**
   * If we have a dataSource, attempt to load it
   * @returns {*}
   */
  setOptions() {
    /* istanbul ignore next */
    if (this.options.dataSource) {
      debug(`Data source specified: ${this.options.dataSource}`);
      this.artifactInfo.dataSource = modelMaker.loadDataSourceByName(
        this.options.dataSource,
      );
    }

    return super.setOptions();
  }

  /**
   * Ensure CLI is being run in a LoopBack 4 project.
   */
  checkLoopBackProject() {
    /* istanbul ignore next */
    if (this.shouldExit()) return;
    return super.checkLoopBackProject();
  }

  /**
   * Loads all datasources to choose if the dataSource option isn't set
   */
  async loadAllDatasources() {
    // If we have a dataSourcePath then it is already loaded for us, we don't need load any
    /* istanbul ignore next */
    if (this.artifactInfo.dataSource) {
      return;
    }
    const dsDir = modelMaker.DEFAULT_DATASOURCE_DIRECTORY;
    const datasourcesList = await utils.getArtifactList(
      dsDir,
      'datasource',
      false,
    );
    debug(datasourcesList);

    this.dataSourceChoices = datasourcesList.map(s =>
      modelDiscoverer.loadDataSource(
        path.resolve(dsDir, `${utils.toFileName(s)}.datasource.js`),
      ),
    );

    if (this.options.dataSource) {
      if (
        this.dataSourceChoices
          .map(d => d.name)
          .includes(this.options.dataSource)
      ) {
        Object.assign(this.artifactInfo, {
          dataSource: this.dataSourceChoices.find(
            d => d.name === this.options.dataSource,
          ),
        });
      }
    }
    debug(`Done importing datasources`);
  }

  /**
   * Ask the user to select the data source from which to discover
   */
  promptDataSource() {
    /* istanbul ignore next */
    if (this.shouldExit()) return;
    const prompts = [
      {
        name: 'dataSource',
        message: g.f('Select the connector to discover'),
        type: 'list',
        choices: this.dataSourceChoices,
        when:
          this.artifactInfo.dataSource === undefined &&
          !this.artifactInfo.modelDefinitions,
      },
    ];

    return this.prompt(prompts).then(answer => {
      /* istanbul ignore next */
      if (!answer.dataSource) return;
      debug(`Datasource answer: ${JSON.stringify(answer)}`);

      this.artifactInfo.dataSource = this.dataSourceChoices.find(
        d => d.name === answer.dataSource,
      );
    });
  }

  /**
   * Puts all discoverable models in this.modelChoices
   */
  async discoverModelInfos() {
    /* istanbul ignore if */
    if (this.artifactInfo.modelDefinitions) return;
    debug(`Getting all models from ${this.artifactInfo.dataSource.name}`);

    this.modelChoices = await modelMaker.discoverModelNames(
      this.artifactInfo.dataSource,
      {
        views: this.options.views,
        schema: this.options.schema,
      },
    );
    debug(
      `Got ${this.modelChoices.length} models from ${this.artifactInfo.dataSource.name}`,
    );
  }

  /**
   * Now that we have a list of all models for a datasource,
   * ask which models to discover
   */
  promptModelChoices() {
    // If we are discovering all we don't need to prompt
    /* istanbul ignore next */
    if (this.options.all) {
      this.discoveringModels = this.modelChoices;
    }

    const prompts = [
      {
        name: 'discoveringModels',
        message: g.f('Select the models which to discover'),
        type: 'checkbox',
        choices: this.modelChoices,
        when:
          this.discoveringModels === undefined &&
          !this.artifactInfo.modelDefinitions,
        // Require at least one model to be selected
        // This prevents users from accidentally pressing ENTER instead of SPACE
        // to select a model from the list
        validate: result => !!result.length,
      },
    ];

    return this.prompt(prompts).then(answers => {
      /* istanbul ignore next */
      if (!answers.discoveringModels) return;
      debug(`Models chosen: ${JSON.stringify(answers)}`);
      this.discoveringModels = [];
      answers.discoveringModels.forEach(m => {
        this.discoveringModels.push(this.modelChoices.find(c => c.name === m));
      });
    });
  }

  /**
   * Prompts what naming convention they would like to have for column names.
   */
  promptColNamingConvention() {
    this.namingConvention = [
      {
        name: g.f('Camel case (exampleColumn) (Recommended)'),
        value: 'camelCase',
      },
      {
        name: g.f('No conversion (EXAMPLE_COLUMN)'),
        value: 'noCase',
      },
    ];
    return this.prompt([
      {
        name: 'disableCamelCase',
        message: g.f(
          'Select a convention to convert db column names(EXAMPLE_COLUMN) to model property names:',
        ),
        type: 'list',
        choices: this.namingConvention,
        default: false,
      },
    ]).then(props => {
      /* istanbul ignore next */
      if (!props.disableCamelCase) return;
      props.disableCamelCase = props.disableCamelCase !== 'camelCase';

      Object.assign(this.artifactInfo, props);
      /* istanbul ignore next */
      if (props.disableCamelCase) {
        this.log(
          chalk.red(
            g.f(
              'By disabling Camel case, you might need to specify these customized names in relation definition.',
            ),
          ),
        );
      }
      debug(`props after naming convention prompt: ${props.disableCamelCase}`);
      return props;
    });
  }

  /**
   * Using artifactInfo.dataSource,
   * artifactInfo.modelNameOptions
   *
   * this will discover every model
   * and put it in artifactInfo.modelDefinitions
   * @returns {Promise<void>}
   */
  async getAllModelDefs() {
    /* istanbul ignore next */
    if (this.shouldExit()) {
      await this.artifactInfo.dataSource.disconnect();
      return false;
    }
    this.artifactInfo.modelDefinitions = [];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this.discoveringModels.length; i++) {
      const modelInfo = this.discoveringModels[i];
      debug(`Discovering: ${modelInfo.name}...`);
      const modelDefinition = await modelMaker.discoverSingleModel(
        this.artifactInfo.dataSource,
        modelInfo.name,
        {
          schema: modelInfo.owner,
          disableCamelCase: this.artifactInfo.disableCamelCase,
          associations: this.options.relations,
        },
      );
      if (this.options.optionalId) {
        // Find id properties (can be multiple ids if using composite key)
        const idProperties = Object.values(modelDefinition.properties).filter(
          property => property.id,
        );
        // Mark as not required
        idProperties.forEach(property => {
          property.required = false;
        });
      }
      this.artifactInfo.modelDefinitions.push(modelDefinition);
      debug(`Discovered: ${modelInfo.name}`);
    }
  }

  /**
   * Iterate through all the models we have discovered and scaffold
   */
  async scaffold() {
    // Exit if needed
    /* istanbul ignore next */
    if (this.shouldExit()) {
      await this.artifactInfo.dataSource.disconnect();
      return;
    }
    this.artifactInfo.indexesToBeUpdated =
      this.artifactInfo.indexesToBeUpdated || [];

    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this.artifactInfo.modelDefinitions.length; i++) {
      const modelDefinition = this.artifactInfo.modelDefinitions[i];
      const templateData = importDiscoveredModel(modelDefinition);

      debug(
        'Generating model %s from template data',
        modelDefinition.name,
        templateData,
      );

      const fullPath = path.resolve(
        this.options.outDir || this.artifactInfo.outDir,
        utils.getModelFileName(modelDefinition.name),
      );
      debug(`Writing: ${fullPath}`);

      if (this.options.relations) {
        const relationImports = [];
        const relationDestinationImports = [];
        const foreignKeys = {};
        for (const relationName in templateData.settings.relations) {
          const relation = templateData.settings.relations[relationName];
          const targetModel = this.artifactInfo.modelDefinitions.find(
            model => model.name === relation.model,
          );
          // If targetModel is not in discovered models, skip creating relation
          if (targetModel) {
            Object.assign(templateData.properties[relation.foreignKey], {
              relation,
            });
            relationImports.push(relation.type);
            relationDestinationImports.push(relation.model);

            foreignKeys[relationName] = {};
            Object.assign(foreignKeys[relationName], {
              name: relationName,
              entity: relation.model,
              entityKey: Object.entries(targetModel.properties).find(
                x => x?.[1].id === 1,
              )?.[0],
              foreignKey: relation.foreignKey,
            });
          }
        }
        templateData.relationImports = relationImports;
        templateData.relationDestinationImports = relationDestinationImports;
        // Delete relation from modelSettings
        delete templateData.settings.relations;
        if (Object.keys(foreignKeys)?.length > 0) {
          Object.assign(templateData.settings, { foreignKeys });
        }
        templateData.modelSettings = utils.stringifyModelSettings(
          templateData.settings,
        );
      }

      this.copyTemplatedFiles(
        modelDiscoverer.MODEL_TEMPLATE_PATH,
        fullPath,
        templateData,
      );

      this.artifactInfo.indexesToBeUpdated.push({
        dir: this.options.outDir || this.artifactInfo.outDir,
        file: utils.getModelFileName(modelDefinition.name),
      });

      await this.artifactInfo.dataSource.disconnect();
    }

    // This part at the end is just for the ArtifactGenerator
    // end message to output something nice, before it was "Discover undefined was created in src/models/"
    this.artifactInfo.type = 'Models';
    this.artifactInfo.name = this.artifactInfo.modelDefinitions
      .map(d => d.name)
      .join(',');
  }

  async end() {
    await super.end();
  }
},
        'loopback4:relation': class RelationGenerator extends ArtifactGenerator {
  constructor(args, opts) {
    super(args, opts);
    this.args = args;
    this.opts = opts;
  }

  setOptions() {
    return super.setOptions();
  }

  _setupGenerator() {
    this.option('relationType', {
      type: String,
      required: false,
      description: g.f('Relation type'),
    });

    this.option('sourceModel', {
      type: String,
      required: false,
      description: g.f('Source model'),
    });

    this.option('destinationModel', {
      type: String,
      required: false,
      description: g.f('Destination model'),
    });

    this.option('throughModel', {
      type: String,
      required: false,
      description: g.f('Through model'),
    });

    this.option('sourceModelPrimaryKey', {
      type: String,
      required: false,
      description: g.f('Primary key on source model'),
    });

    this.option('sourceModelPrimaryKeyType', {
      type: String,
      required: false,
      description: g.f('Type of the primary key on source model'),
    });

    this.option('destinationModelPrimaryKey', {
      type: String,
      required: false,
      description: g.f('Primary key on destination model'),
    });

    this.option('destinationModelPrimaryKeyType', {
      type: String,
      required: false,
      description: g.f('Type of the primary key on destination model'),
    });

    this.option('sourceKeyOnThrough', {
      type: String,
      required: false,
      description: g.f('Foreign key references source model on through model'),
    });

    this.option('targetKeyOnThrough', {
      type: String,
      required: false,
      description: g.f('Foreign key references target model on through model'),
    });

    this.option('defaultForeignKeyName', {
      type: String,
      required: false,
      description: g.f('default foreign key name'),
    });

    this.option('foreignKeyName', {
      type: String,
      required: false,
      description: g.f('Destination model foreign key name'),
    });

    this.option('relationName', {
      type: String,
      required: false,
      description: g.f('Relation name'),
    });
    this.option('defaultRelationName', {
      type: String,
      required: false,
      description: g.f('Default relation name'),
    });

    this.option('registerInclusionResolver', {
      type: Boolean,
      required: false,
      description: g.f(
        'Allow <sourceModel> queries to include data from related <destinationModel>',
      ),
    });
    this.artifactInfo = {
      type: 'relation',
      rootDir: utils.sourceRootDir,
      outDir: utils.sourceRootDir,
    };
    // to check if model and repo exist
    this.artifactInfo.modelDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.modelsDir,
    );
    this.artifactInfo.repoDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.repositoriesDir,
    );

    super._setupGenerator();
    this._arguments = [];

    this.isChecked = {
      relationType: false,
      sourceModel: false,
      destinationModel: false,
    };
  }

  checkLoopBackProject() {
    if (this.shouldExit()) return;
    return super.checkLoopBackProject();
  }

  _getDefaultRelationName() {
    let defaultRelationName;
    switch (this.artifactInfo.relationType) {
      case relationUtils.relationType.belongsTo:
        // this is how the belongsToAccessor generates the default relation name
        defaultRelationName = this.artifactInfo.foreignKeyName.replace(
          /Id$/,
          '',
        );
        break;
      case relationUtils.relationType.hasMany:
        defaultRelationName = utils.pluralize(
          utils.camelCase(this.artifactInfo.destinationModel),
        );
        break;
      case relationUtils.relationType.hasManyThrough:
        defaultRelationName = utils.pluralize(
          utils.camelCase(this.artifactInfo.destinationModel),
        );
        break;
      case relationUtils.relationType.hasOne:
        defaultRelationName = utils.camelCase(
          this.artifactInfo.destinationModel,
        );
        break;
      case relationUtils.relationType.referencesMany:
        // this is how the referencesManyAccessor generates the default relation name
        defaultRelationName = this.artifactInfo.foreignKeyName.replace(
          /Ids$/,
          's',
        );
        break;
    }

    return defaultRelationName;
  }

  async _promptModelList(message, parameter, toRemove = []) {
    let modelList;
    try {
      debug(`model list dir ${this.artifactInfo.modelDir}`);
      modelList = await utils.getArtifactList(
        this.artifactInfo.modelDir,
        'model',
      );
    } catch (err) {
      /* istanbul ignore next */
      return this.exit(err);
    }
    let repoList;
    try {
      debug(`repository list dir ${this.artifactInfo.repoDir}`);
      repoList = await utils.getArtifactList(
        this.artifactInfo.repoDir,
        'repository',
      );
    } catch (err) {
      /* istanbul ignore next */
      return this.exit(err);
    }

    if (modelList.length === 0) {
      /* istanbul ignore next */
      return this.exit(
        new Error(
          `${ERROR_NO_MODELS_FOUND} ${this.artifactInfo.modelDir}.
        ${chalk.yellow(
          'Please visit https://loopback.io/doc/en/lb4/Model-generator.html for information on how models are discovered',
        )}`,
        ),
      );
    }

    if (this.options[parameter]) {
      this.isChecked[parameter] = true;
      if (!modelList.includes(this.options[parameter])) {
        /* istanbul ignore next */
        return this.exit(
          new Error(
            `"${this.options[parameter]}" ${ERROR_MODEL_DOES_NOT_EXIST}`,
          ),
        );
      }

      debug(
        `${parameter} received from command line: ${this.options[parameter]}`,
      );
      this.artifactInfo[parameter] = this.options[parameter];
    }
    // remove source & target models from the selections of through model
    if (toRemove.length > 0) {
      const updateAry = [];
      modelList.forEach(ele => {
        if (!toRemove.includes(ele)) {
          updateAry.push(ele);
        }
      });
      modelList = updateAry;
    }

    // Prompt a user for model.
    return this.prompt([
      {
        type: 'list',
        name: parameter,
        message: message,
        choices: modelList,
        when: !this.artifactInfo[parameter],
        default: modelList[0],
      },
    ]).then(props => {
      if (this.isChecked[parameter]) return;
      if (!modelList.includes(props[parameter])) {
        /* istanbul ignore next */
        return this.exit(
          new Error(`"${props[parameter]}" ${ERROR_MODEL_DOES_NOT_EXIST}`),
        );
      }
      // checks if the corresponding repository exists
      if (!repoList.includes(props[parameter])) {
        /* istanbul ignore next */
        return this.exit(
          new Error(
            `${props[parameter]}Repository ${ERROR_REPOSITORY_DOES_NOT_EXIST}`,
          ),
        );
      }

      debug(`props after ${parameter} prompt: ${inspect(props)}`);
      Object.assign(this.artifactInfo, props);
      return props;
    });
  }

  // Prompt a user for Relation type
  async promptRelationType() {
    if (this.shouldExit()) return false;
    const relationTypeChoices = Object.keys(relationUtils.relationType);

    if (this.options.relationType) {
      this.isChecked.relationType = true;
      debug(
        `Relation type received from command line: ${this.options.relationType}`,
      );
      if (!relationTypeChoices.includes(this.options.relationType)) {
        /* istanbul ignore next */
        return this.exit(new Error(ERROR_INCORRECT_RELATION_TYPE));
      }

      this.artifactInfo.relationType = this.options.relationType;
    }

    return this.prompt([
      {
        type: 'list',
        name: 'relationType',
        message: PROMPT_BASE_RELATION_CLASS,
        choices: relationTypeChoices,
        when: !this.artifactInfo.relationType,
        validate: utils.validateClassName,
        default: relationTypeChoices[0],
      },
    ]).then(props => {
      if (this.isChecked.relationType) return;
      if (!relationTypeChoices.includes(props.relationType)) {
        /* istanbul ignore next */
        this.exit(new Error(ERROR_INCORRECT_RELATION_TYPE));
      }
      Object.assign(this.artifactInfo, props);
      debug(`props after relation type prompt: ${inspect(props)}`);
      return props;
    });
  }

  // Get model list for source model.
  async promptSourceModels() {
    if (this.shouldExit()) return false;

    return this._promptModelList(PROMPT_MESSAGE_SOURCE_MODEL, 'sourceModel');
  }

  // Get model list for target model.
  async promptTargetModels() {
    if (this.shouldExit()) return false;

    return this._promptModelList(
      PROMPT_MESSAGE_TARGET_MODEL,
      'destinationModel',
    );
  }

  // Get model list for through model.
  async promptThroughModels() {
    if (this.shouldExit()) return false;
    if (this.artifactInfo.relationType === 'hasManyThrough') {
      return this._promptModelList(
        PROMPT_MESSAGE_THROUGH_MODEL,
        'throughModel',
        [this.artifactInfo.destinationModel, this.artifactInfo.sourceModel],
      );
    }
  }

  /**
   * Prompt foreign key if not exist:
   *  1. From source model get primary key. If primary key does not exist -
   *  error.
   *  2. Get primary key type from source model.
   *  3. Generate foreign key (camelCase source class Name + primary key name).
   *  4. Check is foreign key exist in destination model. If not - prompt.
   *  Error - if type is not the same.
   *
   * For belongsTo and referencesMany this is getting source key not fk.
   */
  async promptForeignKey() {
    if (this.shouldExit()) return false;

    if (this.options.sourceModelPrimaryKey) {
      this.artifactInfo.sourceModelPrimaryKey =
        this.options.sourceModelPrimaryKey;
    }
    if (this.options.sourceModelPrimaryKeyType) {
      this.artifactInfo.sourceModelPrimaryKeyType =
        this.options.sourceModelPrimaryKeyType;
    }
    if (this.options.destinationModelPrimaryKey) {
      this.artifactInfo.destinationModelPrimaryKey =
        this.options.destinationModelPrimaryKey;
    }
    if (this.options.destinationModelPrimaryKeyType) {
      this.artifactInfo.destinationModelPrimaryKeyType =
        this.options.destinationModelPrimaryKeyType;
    }

    if (!this.artifactInfo.sourceModelPrimaryKey) {
      const sourceModelPK = await relationUtils.getModelPrimaryKeyProperty(
        this.fs,
        this.artifactInfo.modelDir,
        this.artifactInfo.sourceModel,
      );
      if (sourceModelPK) {
        this.artifactInfo.sourceModelPrimaryKey = sourceModelPK;
        if (!this.artifactInfo.sourceModelPrimaryKeyType) {
          const sourceModelPKType = relationUtils.getModelPropertyType(
            this.artifactInfo.modelDir,
            this.artifactInfo.sourceModel,
            this.artifactInfo.sourceModelPrimaryKey,
          );
          if (sourceModelPKType) {
            this.artifactInfo.sourceModelPrimaryKeyType = sourceModelPKType;
          }
        }
      } else {
        const answer = await this.prompt([
          {
            type: 'input',
            name: 'sourceModelPrimaryKey',
            message: g.f(
              'What is the name of ID property of the source model?',
            ),
            when: this.artifactInfo.sourceModelPrimaryKey === undefined,
            default: 'id',
          },
        ]);
        this.artifactInfo.sourceModelPrimaryKey = answer.sourceModelPrimaryKey;
      }
    }
    if (!this.artifactInfo.sourceModelPrimaryKeyType) {
      const answer = await this.prompt([
        {
          type: 'list',
          name: 'sourceModelPrimaryKeyType',
          message: g.f('What is the type of the source model primary key?'),
          choices: ['number', 'string', 'object'],
          when: this.artifactInfo.sourceModelPrimaryKeyType === undefined,
          default: 'number',
        },
      ]);
      this.artifactInfo.sourceModelPrimaryKeyType =
        answer.sourceModelPrimaryKeyType;
    }

    debug(
      `source model primary key and type: ${this.artifactInfo.destinationModelPrimaryKey}
      ${this.artifactInfo.destinationModelPrimaryKeyType}`,
    );

    if (!this.artifactInfo.destinationModelPrimaryKey) {
      const destModelPK = await relationUtils.getModelPrimaryKeyProperty(
        this.fs,
        this.artifactInfo.modelDir,
        this.artifactInfo.destinationModel,
      );
      if (destModelPK) {
        this.artifactInfo.destinationModelPrimaryKey = destModelPK;
        if (!this.artifactInfo.destinationModelPrimaryKeyType) {
          const destModelPKType = relationUtils.getModelPropertyType(
            this.artifactInfo.modelDir,
            this.artifactInfo.destinationModel,
            this.artifactInfo.destinationModelPrimaryKey,
          );
          if (destModelPKType) {
            this.artifactInfo.destinationModelPrimaryKeyType = destModelPKType;
          }
        }
      } else {
        const answer = await this.prompt([
          {
            type: 'input',
            name: 'destinationModelPrimaryKey',
            message: g.f(
              'What is the name of ID property of the target model?',
            ),
            when: this.artifactInfo.destinationModelPrimaryKey === undefined,
            default: 'id',
          },
        ]);
        this.artifactInfo.destinationModelPrimaryKey =
          answer.destinationModelPrimaryKey;
      }
    }
    if (!this.artifactInfo.destinationModelPrimaryKeyType) {
      const answer = await this.prompt([
        {
          type: 'list',
          name: 'destinationModelPrimaryKeyType',
          message: g.f('What is the type of the target model primary key?'),
          choices: ['number', 'string', 'object'],
          when: this.artifactInfo.destinationModelPrimaryKeyType === undefined,
          default: 'number',
        },
      ]);
      this.artifactInfo.destinationModelPrimaryKeyType =
        answer.destinationModelPrimaryKeyType;
    }

    debug(
      `destination model primary key and type: ${this.artifactInfo.destinationModelPrimaryKey}
      ${this.artifactInfo.destinationModelPrimaryKeyType}`,
    );

    // checks fks for hasManyThrough
    if (this.artifactInfo.relationType === 'hasManyThrough') {
      this.artifactInfo.defaultSourceKeyOnThrough =
        utils.camelCase(this.artifactInfo.sourceModel) + 'Id';
      this.artifactInfo.defaultTargetKeyOnThrough =
        utils.camelCase(this.artifactInfo.destinationModel) + 'Id';
      return this._promptKeyFromOnThroughModel();
    }

    if (this.options.foreignKeyName) {
      debug(
        `Foreign key name received from command line: ${this.options.foreignKeyName}`,
      );
      this.artifactInfo.foreignKeyName = this.options.foreignKeyName;
    }

    switch (this.artifactInfo.relationType) {
      case 'belongsTo':
        this.artifactInfo.defaultForeignKeyName =
          utils.camelCase(this.artifactInfo.destinationModel) + 'Id';
        break;
      case 'referencesMany':
        this.artifactInfo.defaultForeignKeyName =
          utils.camelCase(this.artifactInfo.destinationModel) + 'Ids';
        break;
      default:
        this.artifactInfo.defaultForeignKeyName =
          utils.camelCase(this.artifactInfo.sourceModel) + 'Id';
        break;
    }

    let msg;
    switch (this.artifactInfo.relationType) {
      case 'belongsTo':
        msg = PROMPT_MESSAGE_FOREIGN_KEY_NAME_BELONGS_TO;
        break;
      case 'referencesMany':
        msg = PROMPT_MESSAGE_FOREIGN_KEY_NAME_REFERENCES_MANY;
        break;
      default:
        msg = PROMPT_MESSAGE_FOREIGN_KEY_NAME;
        break;
    }

    const foreignKeyModel =
      this.artifactInfo.relationType === 'belongsTo' ||
      this.artifactInfo.relationType === 'referencesMany'
        ? this.artifactInfo.sourceModel
        : this.artifactInfo.destinationModel;

    const project = new relationUtils.AstLoopBackProject();
    const fkFile = path.join(
      this.artifactInfo.modelDir,
      utils.getModelFileName(foreignKeyModel),
    );
    const df = project.addSourceFileAtPath(fkFile);
    const cl = relationUtils.getClassObj(df, foreignKeyModel);

    return this.prompt([
      {
        type: 'string',
        name: 'foreignKeyName',
        message: msg,
        default: this.artifactInfo.defaultForeignKeyName,
        when: !this.artifactInfo.foreignKeyName,
        validate: utils.validateKeyName,
      },
    ]).then(props => {
      debug(`props after foreign key name prompt: ${inspect(props)}`);
      Object.assign(this.artifactInfo, props);
      this.artifactInfo.doesForeignKeyExist = relationUtils.doesPropertyExist(
        cl,
        this.artifactInfo.foreignKeyName,
      );
      // checks if it's the case that the fk already exists in source model and decorated by @belongsTo or @referencesMany, which should be aborted
      if (
        this.artifactInfo.doesForeignKeyExist &&
        (this.artifactInfo.relationType === 'belongsTo' ||
          this.artifactInfo.relationType === 'referencesMany')
      ) {
        try {
          relationUtils.doesRelationExist(cl, this.artifactInfo.foreignKeyName);
        } catch (err) {
          /* istanbul ignore next */
          this.exit(err);
        }
      }
      return props;
    });
  }

  async _promptKeyFromOnThroughModel() {
    if (this.shouldExit()) return false;
    return this.prompt([
      {
        type: 'string',
        name: 'sourceKeyOnThrough',
        message: g.f(
          `Foreign key name that references the ${chalk.yellow(
            'source model',
          )} to define on the through model`,
        ),
        default: this.artifactInfo.defaultSourceKeyOnThrough,
        when: !this.options.sourceKeyOnThrough,
        validate: utils.validateKeyName,
      },
    ]).then(props => {
      debug(`props after foreign key name prompt: ${inspect(props)}`);
      Object.assign(this.artifactInfo, props);
      return this._promptKeyToOnThroughModel();
    });
  }

  async _promptKeyToOnThroughModel() {
    if (this.shouldExit()) return false;
    return this.prompt([
      {
        type: 'string',
        name: 'targetKeyOnThrough',
        message: g.f(
          `Foreign key name that references the ${chalk.yellow(
            'target model',
          )} to define on the through model`,
        ),
        default: this.artifactInfo.defaultTargetKeyOnThrough,
        when: !this.options.targetKeyOnThrough,
        validate: input =>
          utils.validateKeyToKeyFrom(
            input,
            this.artifactInfo.sourceKeyOnThrough,
          ),
      },
    ]).then(props => {
      debug(`props after foreign key name prompt: ${inspect(props)}`);
      Object.assign(this.artifactInfo, props);
    });
  }

  async promptRelationName() {
    if (this.shouldExit()) return false;
    if (this.options.relationName) {
      debug(
        `Relation name received from command line: ${this.options.relationName}`,
      );
      this.artifactInfo.relationName = this.options.relationName;
    }
    this.artifactInfo.defaultRelationName = this._getDefaultRelationName();
    // for hasMany && hasOne, the source key is the same as the relation name
    const msg =
      this.artifactInfo.relationType === 'belongsTo' ||
      this.artifactInfo.relationType === 'referencesMany'
        ? PROMPT_MESSAGE_RELATION_NAME
        : PROMPT_MESSAGE_PROPERTY_NAME;

    return this.prompt([
      {
        type: 'string',
        name: 'relationName',
        message: msg,
        when: !this.artifactInfo.relationName,
        default: this.artifactInfo.defaultRelationName,
        validate: inputName =>
          utils.validateRelationName(
            inputName,
            this.artifactInfo.relationType,
            this.artifactInfo.foreignKeyName,
          ),
      },
    ]).then(props => {
      debug(`props after relation name prompt: ${inspect(props)}`);
      // checks if the relation name already exists
      this.artifactInfo.srcRepositoryFile = path.resolve(
        this.artifactInfo.repoDir,
        utils.getRepositoryFileName(this.artifactInfo.sourceModel),
      );
      this.artifactInfo.srcRepositoryClassName =
        utils.toClassName(this.artifactInfo.sourceModel) + 'Repository';
      this.artifactInfo.srcRepositoryFileObj =
        new relationUtils.AstLoopBackProject().addSourceFileAtPath(
          this.artifactInfo.srcRepositoryFile,
        );

      const repoClassDeclaration =
        this.artifactInfo.srcRepositoryFileObj.getClassOrThrow(
          this.artifactInfo.srcRepositoryClassName,
        );
      // checks if the relation name already exists in repo
      if (
        relationUtils.doesPropertyExist(
          repoClassDeclaration,
          props.relationName,
        )
      ) {
        /* istanbul ignore next */
        return this.exit(
          new Error(
            `relation ${props.relationName} already exists in the repository ${this.artifactInfo.srcRepositoryClassName}.`,
          ),
        );
      }

      Object.assign(this.artifactInfo, props);
      return props;
    });
  }

  async promptRegisterInclusionResolver() {
    if (this.shouldExit()) return false;
    const props = await this.prompt([
      {
        type: 'confirm',
        name: 'registerInclusionResolver',
        message: g.f(
          'Allow %s queries to include data from related %s instances? ',
          chalk.yellow(this.artifactInfo.sourceModel),
          chalk.yellow(this.artifactInfo.destinationModel),
        ),
        default: true,
      },
    ]);
    debug(`props after inclusion resolver promps: ${inspect(props)}`);
    Object.assign(this.artifactInfo, props);
    return props;
  }

  async scaffold() {
    if (this.shouldExit()) return false;

    debug('Invoke generator...');

    let relationGenerator;

    this.artifactInfo.name = this.artifactInfo.relationType;

    switch (this.artifactInfo.relationType) {
      case relationUtils.relationType.belongsTo:
        relationGenerator = new BelongsToRelationGenerator(
          this.args,
          this.opts,
        );
        break;
      case relationUtils.relationType.hasMany:
        relationGenerator = new HasManyRelationGenerator(this.args, this.opts);
        break;
      case relationUtils.relationType.hasManyThrough:
        relationGenerator = new HasManyThroughRelationGenerator(
          this.args,
          this.opts,
        );
        break;
      case relationUtils.relationType.hasOne:
        relationGenerator = new HasOneRelationGenerator(this.args, this.opts);
        break;
      case relationUtils.relationType.referencesMany:
        relationGenerator = new ReferencesManyRelationGenerator(
          this.args,
          this.opts,
        );
        break;
    }

    try {
      await relationGenerator.generateAll(this.artifactInfo);
    } catch (error) {
      /* istanbul ignore next */
      this.exit(error);
    }
  }

  async end() {
    await super.end();
  }
},
        'loopback4:update': class UpdateGenerator extends BaseGenerator {
  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);
    this.command = 'update';
  }

  _setupGenerator() {
    this.option('semver', {
      type: Boolean,
      required: false,
      default: false,
      description: g.f('Check version compatibility using semver semantics'),
    });
    return super._setupGenerator();
  }

  setOptions() {
    return super.setOptions();
  }

  async checkLoopBackProject() {
    if (this.shouldExit()) return;
    this.updated = await super.checkLoopBackProject();
  }

  async _openChangeLog() {
    if (this.shouldExit()) return;
    if (this.updated !== true) return;
    this.log(chalk.red(g.f('The upgrade may break the current project.')));
    this.log(
      link(
        g.f('Please check out change logs for breaking changes.'),
        'https://loopback.io/doc/en/lb4/changelog.index.html',
      ),
    );
  }

  async end() {
    await this._openChangeLog();
    await super.end();
  }
},
        'loopback4:rest-crud': class RestCrudGenerator extends ArtifactGenerator {
  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);
  }

  /**
   * helper method to inspect and validate a datasource type
   */
  async _inferDataSourceNames() {
    if (!this.artifactInfo.dataSourceClass) {
      return;
    }

    this.artifactInfo.dataSourceName = utils.getDataSourceName(
      this.artifactInfo.datasourcesDir,
      this.artifactInfo.dataSourceClass,
    );

    this.artifactInfo.dataSourceClassName =
      utils.toClassName(this.artifactInfo.dataSourceName) + 'DataSource';
  }

  _setupGenerator() {
    this.artifactInfo = {
      type: 'rest-config',
      rootDir: utils.sourceRootDir,
    };

    this.artifactInfo.outDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.modelEndpointsDir,
    );
    this.artifactInfo.datasourcesDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.datasourcesDir,
    );
    this.artifactInfo.modelDir = path.resolve(
      this.artifactInfo.rootDir,
      utils.modelsDir,
    );

    this.artifactInfo.defaultTemplate = REST_CONFIG_TEMPLATE;

    this.option('model', {
      type: String,
      required: false,
      description: g.f('A valid model name'),
    });

    this.option('datasource', {
      type: String,
      required: false,
      description: g.f('A valid datasource name'),
    });

    this.option('basePath', {
      type: String,
      required: false,
      description: g.f('A valid base path'),
    });

    this.option('readonly', {
      type: Boolean,
      required: false,
      description: g.f('Create readonly APIs'),
      default: false,
    });

    return super._setupGenerator();
  }

  setOptions() {
    return super.setOptions();
  }

  checkLoopBackProject() {
    if (this.shouldExit()) return;
    return super.checkLoopBackProject();
  }

  async checkPaths() {
    if (this.shouldExit()) return;
    // check for datasources
    if (!fs.existsSync(this.artifactInfo.datasourcesDir)) {
      return this.exit(
        new Error(
          `${ERROR_NO_DATA_SOURCES_FOUND} ${this.artifactInfo.datasourcesDir}.
        ${chalk.yellow(
          'Please visit https://loopback.io/doc/en/lb4/DataSource-generator.html for information on how datasources are discovered',
        )}`,
        ),
      );
    }

    // check for models
    if (!fs.existsSync(this.artifactInfo.modelDir)) {
      return this.exit(
        new Error(
          `${ERROR_NO_MODELS_FOUND} ${this.artifactInfo.modelDir}.
        ${chalk.yellow(
          'Please visit https://loopback.io/doc/en/lb4/Model-generator.html for information on how models are discovered',
        )}`,
        ),
      );
    }
  }

  async promptDataSourceName() {
    if (this.shouldExit()) return false;

    debug('Prompting for a datasource ');
    let datasourcesList;

    // grab the datasourcename from the command line
    const cmdDatasourceName = this.options.datasource
      ? utils.toClassName(this.options.datasource) + 'Datasource'
      : '';

    debug(`command line datasource is  ${cmdDatasourceName}`);

    try {
      datasourcesList = await utils.getArtifactList(
        this.artifactInfo.datasourcesDir,
        'datasource',
        true,
      );
      debug(
        `datasourcesList from ${utils.sourceRootDir}/${utils.datasourcesDir} : ${datasourcesList}`,
      );
    } catch (err) {
      return this.exit(err);
    }

    const availableDatasources = datasourcesList.filter(item => {
      debug(`data source inspecting item: ${item}`);
      const result = utils.isConnectorOfType(
        VALID_CONNECTORS_FOR_REPOSITORY,
        this.artifactInfo.datasourcesDir,
        item,
      );
      return result !== false;
    });

    debug(`artifactInfo.dataSourceClass ${this.artifactInfo.dataSourceClass}`);

    if (availableDatasources.length === 0) {
      return this.exit(
        new Error(
          `${ERROR_NO_DATA_SOURCES_FOUND} ${this.artifactInfo.datasourcesDir}.
        ${chalk.yellow(
          'Please visit https://loopback.io/doc/en/lb4/DataSource-generator.html for information on how datasources are discovered',
        )}`,
        ),
      );
    }

    if (availableDatasources.includes(cmdDatasourceName)) {
      Object.assign(this.artifactInfo, {
        dataSourceClass: cmdDatasourceName,
      });
    }

    return this.prompt([
      {
        type: 'list',
        name: 'dataSourceClass',
        message: PROMPT_MESSAGE_DATA_SOURCE,
        choices: availableDatasources,
        when: !this.artifactInfo.dataSourceClass,
        default: availableDatasources[0],
        validate: utils.validateClassName,
      },
    ])
      .then(props => {
        Object.assign(this.artifactInfo, props);
        debug(`props after datasource prompt: ${inspect(props)}`);
        return props;
      })
      .catch(err => {
        debug(`Error during datasource prompt: ${err}`);
        return this.exit(err);
      });
  }

  async promptModels() {
    if (this.shouldExit()) return false;

    await this._inferDataSourceNames();

    let modelList;
    try {
      debug(`model list dir ${this.artifactInfo.modelDir}`);
      modelList = await utils.getArtifactList(
        this.artifactInfo.modelDir,
        'model',
      );
    } catch (err) {
      return this.exit(err);
    }

    if (this.options.model) {
      debug(`Model name received from command line: ${this.options.model}`);

      this.options.model = utils.toClassName(this.options.model);
      // assign the model name from the command line only if it is valid
      if (
        modelList &&
        modelList.length > 0 &&
        modelList.includes(this.options.model)
      ) {
        Object.assign(this.artifactInfo, {modelNameList: [this.options.model]});
      } else {
        modelList = [];
      }
    }

    if (modelList.length === 0) {
      return this.exit(
        new Error(
          `${ERROR_NO_MODELS_FOUND} ${this.artifactInfo.modelDir}.
        ${chalk.yellow(
          'Please visit https://loopback.io/doc/en/lb4/Model-generator.html for information on how models are discovered',
        )}`,
        ),
      );
    }

    return this.prompt([
      {
        type: 'checkbox',
        name: 'modelNameList',
        message: PROMPT_MESSAGE_MODEL,
        choices: modelList.map(m => ({name: m, value: m, checked: true})),
        when: this.artifactInfo.modelNameList === undefined,
        // Require at least one model to be selected
        // This prevents users from accidentally pressing ENTER instead of SPACE
        // to select a model from the list
        validate: result => !!result.length,
      },
    ])
      .then(props => {
        Object.assign(this.artifactInfo, props);
        debug(`props after model list prompt: ${inspect(props)}`);
        return props;
      })
      .catch(err => {
        debug(`Error during model list prompt: ${err}`);
        return this.exit(err);
      });
  }

  /**
   * Prompt for basePath if only one model is selected
   */
  async promptBasePath() {
    if (this.options.basePath) {
      this.artifactInfo.basePath = this.options.basePath;
      return;
    }

    if (
      this.artifactInfo.modelNameList &&
      this.artifactInfo.modelNameList.length === 1
    ) {
      const model = this.artifactInfo.modelNameList[0];
      const props = await this.prompt([
        {
          type: 'input',
          name: 'basePath',
          message: PROMPT_MESSAGE_BASE_PATH,
          default: utils.prependBackslash(
            utils.pluralize(utils.urlSlug(model)),
          ),
          validate: utils.validateUrlSlug,
          filter: utils.prependBackslash,
        },
      ]);
      if (props) {
        this.artifactInfo.basePath = props.basePath;
      }
    }
  }

  async promptReadonly() {
    const props = await this.prompt([
      {
        type: 'confirm',
        name: 'readonly',
        message: PROMPT_MESSAGE_READONLY,
        default: false,
      },
    ]);
    if (props) {
      this.artifactInfo.readonly = props.readonly;
    }
  }

  async scaffold() {
    if (this.shouldExit()) return false;

    if (_.isEmpty(this.artifactInfo.modelNameList)) {
      return this.exit(new Error(`${ERROR_NO_MODEL_SELECTED}`));
    }

    this.artifactInfo.disableIndexUpdate = true;
    for (const model of this.artifactInfo.modelNameList) {
      this.artifactInfo.modelName = model;
      this.artifactInfo.outFile = utils.getRestConfigFileName(model);
      if (
        !this.artifactInfo.basePath ||
        this.artifactInfo.modelNameList.length > 1
      ) {
        const defaultBasePath =
          this.options.basePath ||
          utils.prependBackslash(utils.pluralize(utils.urlSlug(model)));
        this.artifactInfo.basePath = defaultBasePath;
      }

      const source = this.templatePath(
        path.join(
          utils.sourceRootDir,
          utils.modelEndpointsDir,
          this.artifactInfo.defaultTemplate,
        ),
      );

      const dest = this.destinationPath(
        path.join(this.artifactInfo.outDir, this.artifactInfo.outFile),
      );

      if (debug.enabled) {
        debug(`artifactInfo: ${inspect(this.artifactInfo)}`);
        debug(`Copying artifact to: ${dest}`);
      }

      this.copyTemplatedFiles(source, dest, this.artifactInfo);
    }

    this.log(
      'Updating src/application.ts to register CrudRestComponent from @loopback/rest-crud',
    );
    await updateApplicationTs(this.destinationPath());
    return;
  }

  install() {
    if (this.shouldExit()) return false;
    debug('install npm dependencies');
    const pkgJson = this.packageJson || {};
    const deps = pkgJson.dependencies || {};
    const pkgs = [];

    const version = cliPkg.config.templateDependencies['@loopback/rest-crud'];

    if (!deps['@loopback/rest-crud']) {
      pkgs.push(`@loopback/rest-crud@${version}`);
    }

    if (pkgs.length === 0) return;

    this.pkgManagerInstall(pkgs, {
      npm: {
        save: true,
      },
    });
  }

  async end() {
    this.artifactInfo.type =
      this.artifactInfo.modelNameList &&
      this.artifactInfo.modelNameList.length > 1
        ? 'RestConfigs'
        : 'RestConfig';

    this.artifactInfo.modelNameList = _.map(
      this.artifactInfo.modelNameList,
      name => {
        return name + '.rest-config';
      },
    );

    this.artifactInfo.name = this.artifactInfo.modelNameList
      ? this.artifactInfo.modelNameList.join(this.classNameSeparator)
      : this.artifactInfo.modelName;

    await super.end();
  }
},
        'loopback4:copyright': class CopyrightGenerator extends BaseGenerator {
  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);
    this.licenseList = [];
    for (const id in spdxLicenseList) {
      const license = spdxLicenseList[id];
      if (
        ['mit', 'apache-2.0', 'isc', 'artistic-2.0', 'custom'].includes(
          id.toLocaleLowerCase(),
        )
      ) {
        // Add well-known licenses in front of the list
        this.licenseList.unshift(license);
      } else {
        this.licenseList.push(license);
      }
    }
    this.licenseList = this.licenseList.map(lic => ({
      value: lic,
      name: `${lic.id} (${lic.name})`,
    }));
  }

  initializing() {
    // Register `autocomplete` plugin
    this.env.adapter.promptModule.registerPrompt('autocomplete', autocomplete);
  }

  _setupGenerator() {
    this.option('owner', {
      type: String,
      required: false,
      description: g.f('Copyright owner'),
    });
    this.option('license', {
      type: String,
      required: false,
      description: g.f('License'),
    });
    this.option('updateLicense', {
      type: Boolean,
      required: false,
      description: g.f('Update license in package.json and LICENSE'),
    });
    this.option('gitOnly', {
      type: Boolean,
      required: false,
      default: true,
      description: g.f('Only update git tracked files'),
    });
    this.option('exclude', {
      type: String,
      required: false,
      default: '',
      description: g.f('Exclude files that match the pattern'),
    });
  }

  setOptions() {
    return super.setOptions();
  }

  async promptOwnerAndLicense() {
    const pkgFile = this.destinationPath('package.json');
    if (!this.existsDestination('package.json')) {
      this.exit(`${pkgFile} does not exist.`);
      return;
    }
    let author = this.packageJson.get('author');
    if (typeof author === 'object') {
      author = author.name;
    }
    const owner =
      this.options.copyrightOwner ||
      this.packageJson.get('copyright.owner') ||
      author;
    let license = this.options.license || this.packageJson.get('license');
    const licenses = [...this.licenseList];
    if (license != null) {
      // find the matching license by id and move it to the front of the list
      for (let i = 0; i < licenses.length; i++) {
        if (licenses[i].value.id.toLowerCase() === license.toLowerCase()) {
          const lic = licenses.splice(i, 1);
          licenses.unshift(...lic);
          break;
        }
      }
    }

    let answers = await this.prompt([
      {
        type: 'input',
        name: 'owner',
        message: g.f('Copyright owner:'),
        default: owner,
        when: this.options.owner == null,
      },
      {
        type: 'autocomplete',
        name: 'license',
        // choices: licenseList,
        source: async (_answers, input) => {
          if (input == null) return licenses;
          const matched = licenses.filter(lic => {
            const a = input.toLowerCase();
            return (
              lic.value.id.toLowerCase().startsWith(a) ||
              lic.value.name.toLowerCase().startsWith(a)
            );
          });
          return matched;
        },
        pageSize: 10,
        message: g.f('License name:'),
        default: license,
        when: this.options.license == null,
      },
    ]);
    answers = answers || {};
    const exclude = this.options.exclude || '';
    const excludePatterns = exclude.split(',').filter(p => p !== '');
    excludePatterns.push('**/node_modules/**/*');

    const copyrightOwner = answers.owner || this.options.owner;
    license = answers.license || this.options.license;

    let customLicenseLines = [];
    if (
      (license && license.id === 'CUSTOM') ||
      license === 'custom' ||
      license === 'CUSTOM'
    ) {
      const templateFile = this.destinationPath('license-header.template');
      if (this.fs.exists(templateFile)) {
        const template = this.fs.read(templateFile);
        customLicenseLines = template.match(/[^\r\n]+/g);
        this.log(template);
      } else {
        this.log(
          g.f(
            'Please provide lines of text for the custom copyright/license headers.',
          ),
        );
        const example = ` Copyright <%= owner %> <%= years %>. All Rights Reserved.
 Node module: <%= name %>',
 This file is licensed under the <%= license %>.
 License text available at <%= url %>`;
        this.log(
          chalk.green(
            `Example (supported variables: owner/years/name):
${example}`,
          ),
        );

        answers = await this.prompt([
          {
            type: 'editor',
            name: 'customLicenseLines',
            message: g.f('Custom license lines:'),
            default: example,
            when: customLicenseLines.length === 0,
          },
        ]);
      }
    }

    answers = answers || {};
    if (answers.customLicenseLines) {
      customLicenseLines = answers.customLicenseLines;
      this.log(customLicenseLines);
      customLicenseLines = customLicenseLines.match(/[^\r\n]+/g);
    }

    this.headerOptions = {
      copyrightOwner,
      customLicenseLines,
      license,
      log: this.log,
      gitOnly: this.options.gitOnly,
      fs: this.fs,
      excludePatterns,
    };
  }

  async updateLicense() {
    if (this.shouldExit()) return;
    const answers = await this.prompt([
      {
        type: 'confirm',
        name: 'updateLicense',
        message: g.f('Do you want to update package.json and LICENSE?'),
        default: false,
        when: this.options.updateLicense == null,
      },
    ]);
    const updateLicenseFile =
      (answers && answers.updateLicense) || this.options.updateLicense;
    if (!updateLicenseFile) return;
    this.headerOptions.updateLicense = updateLicenseFile;
    await updateLicense(
      this.destinationRoot(),
      this.packageJson,
      this.headerOptions,
    );
  }

  async updateHeaders() {
    if (this.shouldExit()) return;
    await updateFileHeaders(this.destinationRoot(), this.headerOptions);
  }

  async end() {
    await super.end();
  }
}
      },
      _meta: {
        'loopback4:app': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/app/index.js',
          namespace: 'loopback4:app',
          packagePath: undefined
        },
        'loopback4:extension': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/extension/index.js',
          namespace: 'loopback4:extension',
          packagePath: undefined
        },
        'loopback4:controller': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/controller/index.js',
          namespace: 'loopback4:controller',
          packagePath: undefined
        },
        'loopback4:datasource': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/index.js',
          namespace: 'loopback4:datasource',
          packagePath: undefined
        },
        'loopback4:import-lb3-models': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/import-lb3-models/index.js',
          namespace: 'loopback4:import-lb3-models',
          packagePath: undefined
        },
        'loopback4:model': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/model/index.js',
          namespace: 'loopback4:model',
          packagePath: undefined
        },
        'loopback4:repository': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/repository/index.js',
          namespace: 'loopback4:repository',
          packagePath: undefined
        },
        'loopback4:service': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/service/index.js',
          namespace: 'loopback4:service',
          packagePath: undefined
        },
        'loopback4:example': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/example/index.js',
          namespace: 'loopback4:example',
          packagePath: undefined
        },
        'loopback4:openapi': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/openapi/index.js',
          namespace: 'loopback4:openapi',
          packagePath: undefined
        },
        'loopback4:observer': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/observer/index.js',
          namespace: 'loopback4:observer',
          packagePath: undefined
        },
        'loopback4:interceptor': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/interceptor/index.js',
          namespace: 'loopback4:interceptor',
          packagePath: undefined
        },
        'loopback4:discover': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/discover/index.js',
          namespace: 'loopback4:discover',
          packagePath: undefined
        },
        'loopback4:relation': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/relation/index.js',
          namespace: 'loopback4:relation',
          packagePath: undefined
        },
        'loopback4:update': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/update/index.js',
          namespace: 'loopback4:update',
          packagePath: undefined
        },
        'loopback4:rest-crud': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/rest-crud/index.js',
          namespace: 'loopback4:rest-crud',
          packagePath: undefined
        },
        'loopback4:copyright': {
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/copyright/index.js',
          namespace: 'loopback4:copyright',
          packagePath: undefined
        }
      },
      _packagesPaths: {},
      _packagesNS: [
        'loopback4'
      ]
    },
    command: undefined,
    runLoop: {
      queueNames: [
        'environment:run',
        'initializing',
        'prompting',
        'configuring',
        'default',
        'writing',
        'transform',
        'conflicts',
        'environment:conflicts',
        'install',
        'end'
      ],
      __queues__: {
        'environment:run': {
          __queue__: []
        },
        initializing: {
          __queue__: []
        },
        prompting: {
          __queue__: []
        },
        configuring: {
          __queue__: []
        },
        default: {
          __queue__: []
        },
        writing: {
          __queue__: []
        },
        transform: {
          __queue__: []
        },
        conflicts: {
          __queue__: []
        },
        'environment:conflicts': {
          __queue__: [
            {
              task: (done, stop) => {
        let customCommitTask = this.findGeneratorCustomCommitTask();
        if (customCommitTask !== undefined && customCommitTask) {
          if (typeof customCommitTask !== 'function') {
            done();
            return;
          }
        } else {
          customCommitTask = this.commitSharedFs.bind(this);
        }

        if (this.enableConflicterIgnore) {
          debug('Adding queueCommit event listener');
          this.sharedFs.once('change', queueCommit);
        }
        const result = customCommitTask();
        if (!result || !result.then) {
          done();
          return;
        }
        return result.then(() => {
          if (!this.enableConflicterIgnore) {
            debug('Adding queueCommit event listener');
            this.sharedFs.once('change', queueCommit);
          }
          done();
        }
        , stop);
      },
              name: 'write memory fs to disk'
            }
          ]
        },
        install: {
          __queue__: [
            {
              task: (continueQueue) => {
        this.executeTask(task, undefined, taskStatus).then(continueQueue);
      },
              name: undefined
            },
            {
              task: (done, stop) => this.packageManagerInstallTask().then(done, stop),
              name: 'package manager install'
            }
          ]
        },
        end: {
          __queue__: [
            {
              task: (continueQueue) => {
        this.executeTask(task, undefined, taskStatus).then(continueQueue);
      },
              name: undefined
            }
          ]
        }
      },
      runOnAdd: false,
      _maxListeners: 0,
      _events: {
        error: error => {
        this.emit('error', error);
      },
        paused: () => {
        this.emit('paused');
      },
        end: function () { [native code] }
      },
      _eventsCount: 3,
      running: true
    },
    sharedFs: {
      _events: {
        change: [
          (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    },
          (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    }
        ]
      },
      _eventsCount: 1,
      _maxListeners: 0,
      store: {
        '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json': {
          stat: null,
          _contents: null,
          history: [
            '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json'
          ],
          _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
          _isVinyl: true,
          _symlink: null
        },
        '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json': {
          stat: {
            dev: 2055,
            mode: 33279,
            nlink: 1,
            uid: 1000,
            gid: 1000,
            rdev: 0,
            blksize: 4096,
            ino: 2241697,
            size: 2180,
            blocks: 8,
            atimeMs: 1664473760957.5466,
            mtimeMs: 1664473760805.593,
            ctimeMs: 1664473760805.593,
            birthtimeMs: 0,
            atime: new Date('2022-09-29T17:49:20.958Z'),
            mtime: new Date('2022-09-29T17:49:20.806Z'),
            ctime: new Date('2022-09-29T17:49:20.806Z'),
            birthtime: new Date('1970-01-01T00:00:00.000Z')
          },
          _contents: {
            '0': 123,
            '1': 10,
            '2': 32,
            '3': 32,
            '4': 34,
            '5': 110,
            '6': 97,
            '7': 109,
            '8': 101,
            '9': 34,
            '10': 58,
            '11': 32,
            '12': 34,
            '13': 116,
            '14': 101,
            '15': 115,
            '16': 116,
            '17': 45,
            '18': 97,
            '19': 112,
            '20': 112,
            '21': 34,
            '22': 44,
            '23': 10,
            '24': 32,
            '25': 32,
            '26': 34,
            '27': 118,
            '28': 101,
            '29': 114,
            '30': 115,
            '31': 105,
            '32': 111,
            '33': 110,
            '34': 34,
            '35': 58,
            '36': 32,
            '37': 34,
            '38': 48,
            '39': 46,
            '40': 48,
            '41': 46,
            '42': 49,
            '43': 34,
            '44': 44,
            '45': 10,
            '46': 32,
            '47': 32,
            '48': 34,
            '49': 100,
            '50': 101,
            '51': 115,
            '52': 99,
            '53': 114,
            '54': 105,
            '55': 112,
            '56': 116,
            '57': 105,
            '58': 111,
            '59': 110,
            '60': 34,
            '61': 58,
            '62': 32,
            '63': 34,
            '64': 112,
            '65': 97,
            '66': 116,
            '67': 114,
            '68': 105,
            '69': 99,
            '70': 107,
            '71': 34,
            '72': 44,
            '73': 10,
            '74': 32,
            '75': 32,
            '76': 34,
            '77': 107,
            '78': 101,
            '79': 121,
            '80': 119,
            '81': 111,
            '82': 114,
            '83': 100,
            '84': 115,
            '85': 34,
            '86': 58,
            '87': 32,
            '88': 91,
            '89': 10,
            '90': 32,
            '91': 32,
            '92': 32,
            '93': 32,
            '94': 34,
            '95': 108,
            '96': 111,
            '97': 111,
            '98': 112,
            '99': 98,
            '100': 97,
            '101': 99,
            '102': 107,
            '103': 45,
            '104': 97,
            '105': 112,
            '106': 112,
            '107': 108,
            '108': 105,
            '109': 99,
            '110': 97,
            '111': 116,
            '112': 105,
            '113': 111,
            '114': 110,
            '115': 34,
            '116': 44,
            '117': 10,
            '118': 32,
            '119': 32,
            '120': 32,
            '121': 32,
            '122': 34,
            '123': 108,
            '124': 111,
            '125': 111,
            '126': 112,
            '127': 98,
            '128': 97,
            '129': 99,
            '130': 107,
            '131': 34,
            '132': 10,
            '133': 32,
            '134': 32,
            '135': 93,
            '136': 44,
            '137': 10,
            '138': 32,
            '139': 32,
            '140': 34,
            '141': 109,
            '142': 97,
            '143': 105,
            '144': 110,
            '145': 34,
            '146': 58,
            '147': 32,
            '148': 34,
            '149': 100,
            '150': 105,
            '151': 115,
            '152': 116,
            '153': 47,
            '154': 105,
            '155': 110,
            '156': 100,
            '157': 101,
            '158': 120,
            '159': 46,
            '160': 106,
            '161': 115,
            '162': 34,
            '163': 44,
            '164': 10,
            '165': 32,
            '166': 32,
            '167': 34,
            '168': 116,
            '169': 121,
            '170': 112,
            '171': 101,
            '172': 115,
            '173': 34,
            '174': 58,
            '175': 32,
            '176': 34,
            '177': 100,
            '178': 105,
            '179': 115,
            '180': 116,
            '181': 47,
            '182': 105,
            '183': 110,
            '184': 100,
            '185': 101,
            '186': 120,
            '187': 46,
            '188': 100,
            '189': 46,
            '190': 116,
            '191': 115,
            '192': 34,
            '193': 44,
            '194': 10,
            '195': 32,
            '196': 32,
            '197': 34,
            '198': 101,
            '199': 110,
            '200': 103,
            '201': 105,
            '202': 110,
            '203': 101,
            '204': 115,
            '205': 34,
            '206': 58,
            '207': 32,
            '208': 123,
            '209': 10,
            '210': 32,
            '211': 32,
            '212': 32,
            '213': 32,
            '214': 34,
            '215': 110,
            '216': 111,
            '217': 100,
            '218': 101,
            '219': 34,
            '220': 58,
            '221': 32,
            '222': 34,
            '223': 49,
            '224': 52,
            '225': 32,
            '226': 124,
            '227': 124,
            '228': 32,
            '229': 49,
            '230': 54,
            '231': 32,
            '232': 124,
            '233': 124,
            '234': 32,
            '235': 49,
            '236': 55,
            '237': 32,
            '238': 124,
            '239': 124,
            '240': 32,
            '241': 49,
            '242': 56,
            '243': 34,
            '244': 10,
            '245': 32,
            '246': 32,
            '247': 125,
            '248': 44,
            '249': 10,
            '250': 32,
            '251': 32,
            '252': 34,
            '253': 115,
            '254': 99,
            '255': 114,
            '256': 105,
            '257': 112,
            '258': 116,
            '259': 115,
            '260': 34,
            '261': 58,
            '262': 32,
            '263': 123,
            '264': 10,
            '265': 32,
            '266': 32,
            '267': 32,
            '268': 32,
            '269': 34,
            '270': 98,
            '271': 117,
            '272': 105,
            '273': 108,
            '274': 100,
            '275': 34,
            '276': 58,
            '277': 32,
            '278': 34,
            '279': 108,
            '280': 98,
            '281': 45,
            '282': 116,
            '283': 115,
            '284': 99,
            '285': 34,
            '286': 44,
            '287': 10,
            '288': 32,
            '289': 32,
            '290': 32,
            '291': 32,
            '292': 34,
            '293': 98,
            '294': 117,
            '295': 105,
            '296': 108,
            '297': 100,
            '298': 58,
            '299': 119,
            '300': 97,
            '301': 116,
            '302': 99,
            '303': 104,
            '304': 34,
            '305': 58,
            '306': 32,
            '307': 34,
            '308': 108,
            '309': 98,
            '310': 45,
            '311': 116,
            '312': 115,
            '313': 99,
            '314': 32,
            '315': 45,
            '316': 45,
            '317': 119,
            '318': 97,
            '319': 116,
            '320': 99,
            '321': 104,
            '322': 34,
            '323': 44,
            '324': 10,
            '325': 32,
            '326': 32,
            '327': 32,
            '328': 32,
            '329': 34,
            '330': 108,
            '331': 105,
            '332': 110,
            '333': 116,
            '334': 34,
            '335': 58,
            '336': 32,
            '337': 34,
            '338': 121,
            '339': 97,
            '340': 114,
            '341': 110,
            '342': 32,
            '343': 114,
            '344': 117,
            '345': 110,
            '346': 32,
            '347': 101,
            '348': 115,
            '349': 108,
            '350': 105,
            '351': 110,
            '352': 116,
            '353': 32,
            '354': 38,
            '355': 38,
            '356': 32,
            '357': 121,
            '358': 97,
            '359': 114,
            '360': 110,
            '361': 32,
            '362': 114,
            '363': 117,
            '364': 110,
            '365': 32,
            '366': 112,
            '367': 114,
            '368': 101,
            '369': 116,
            '370': 116,
            '371': 105,
            '372': 101,
            '373': 114,
            '374': 58,
            '375': 99,
            '376': 104,
            '377': 101,
            '378': 99,
            '379': 107,
            '380': 34,
            '381': 44,
            '382': 10,
            '383': 32,
            '384': 32,
            '385': 32,
            '386': 32,
            '387': 34,
            '388': 108,
            '389': 105,
            '390': 110,
            '391': 116,
            '392': 58,
            '393': 102,
            '394': 105,
            '395': 120,
            '396': 34,
            '397': 58,
            '398': 32,
            '399': 34,
            '400': 121,
            '401': 97,
            '402': 114,
            '403': 110,
            '404': 32,
            '405': 114,
            '406': 117,
            '407': 110,
            '408': 32,
            '409': 101,
            '410': 115,
            '411': 108,
            '412': 105,
            '413': 110,
            '414': 116,
            '415': 58,
            '416': 102,
            '417': 105,
            '418': 120,
            '419': 32,
            '420': 38,
            '421': 38,
            '422': 32,
            '423': 121,
            '424': 97,
            '425': 114,
            '426': 110,
            '427': 32,
            '428': 114,
            '429': 117,
            '430': 110,
            '431': 32,
            '432': 112,
            '433': 114,
            '434': 101,
            '435': 116,
            '436': 116,
            '437': 105,
            '438': 101,
            '439': 114,
            '440': 58,
            '441': 102,
            '442': 105,
            '443': 120,
            '444': 34,
            '445': 44,
            '446': 10,
            '447': 32,
            '448': 32,
            '449': 32,
            '450': 32,
            '451': 34,
            '452': 112,
            '453': 114,
            '454': 101,
            '455': 116,
            '456': 116,
            '457': 105,
            '458': 101,
            '459': 114,
            '460': 58,
            '461': 99,
            '462': 108,
            '463': 105,
            '464': 34,
            '465': 58,
            '466': 32,
            '467': 34,
            '468': 108,
            '469': 98,
            '470': 45,
            '471': 112,
            '472': 114,
            '473': 101,
            '474': 116,
            '475': 116,
            '476': 105,
            '477': 101,
            '478': 114,
            '479': 32,
            '480': 92,
            '481': 34,
            '482': 42,
            '483': 42,
            '484': 47,
            '485': 42,
            '486': 46,
            '487': 116,
            '488': 115,
            '489': 92,
            '490': 34,
            '491': 32,
            '492': 92,
            '493': 34,
            '494': 42,
            '495': 42,
            '496': 47,
            '497': 42,
            '498': 46,
            '499': 106,
            '500': 115,
            '501': 92,
            '502': 34,
            '503': 34,
            '504': 44,
            '505': 10,
            '506': 32,
            '507': 32,
            '508': 32,
            '509': 32,
            '510': 34,
            '511': 112,
            '512': 114,
            '513': 101,
            '514': 116,
            '515': 116,
            '516': 105,
            '517': 101,
            '518': 114,
            '519': 58,
            '520': 99,
            '521': 104,
            '522': 101,
            '523': 99,
            '524': 107,
            '525': 34,
            '526': 58,
            '527': 32,
            '528': 34,
            '529': 121,
            '530': 97,
            '531': 114,
            '532': 110,
            '533': 32,
            '534': 114,
            '535': 117,
            '536': 110,
            '537': 32,
            '538': 112,
            '539': 114,
            '540': 101,
            '541': 116,
            '542': 116,
            '543': 105,
            '544': 101,
            '545': 114,
            '546': 58,
            '547': 99,
            '548': 108,
            '549': 105,
            '550': 32,
            '551': 45,
            '552': 108,
            '553': 34,
            '554': 44,
            '555': 10,
            '556': 32,
            '557': 32,
            '558': 32,
            '559': 32,
            '560': 34,
            '561': 112,
            '562': 114,
            '563': 101,
            '564': 116,
            '565': 116,
            '566': 105,
            '567': 101,
            '568': 114,
            '569': 58,
            '570': 102,
            '571': 105,
            '572': 120,
            '573': 34,
            '574': 58,
            '575': 32,
            '576': 34,
            '577': 121,
            '578': 97,
            '579': 114,
            '580': 110,
            '581': 32,
            '582': 114,
            '583': 117,
            '584': 110,
            '585': 32,
            '586': 112,
            '587': 114,
            '588': 101,
            '589': 116,
            '590': 116,
            '591': 105,
            '592': 101,
            '593': 114,
            '594': 58,
            '595': 99,
            '596': 108,
            '597': 105,
            '598': 32,
            '599': 45,
            '600': 45,
            '601': 119,
            '602': 114,
            '603': 105,
            '604': 116,
            '605': 101,
            '606': 34,
            '607': 44,
            '608': 10,
            '609': 32,
            '610': 32,
            '611': 32,
            '612': 32,
            '613': 34,
            '614': 101,
            '615': 115,
            '616': 108,
            '617': 105,
            '618': 110,
            '619': 116,
            '620': 34,
            '621': 58,
            '622': 32,
            '623': 34,
            '624': 108,
            '625': 98,
            '626': 45,
            '627': 101,
            '628': 115,
            '629': 108,
            '630': 105,
            '631': 110,
            '632': 116,
            '633': 32,
            '634': 45,
            '635': 45,
            '636': 114,
            '637': 101,
            '638': 112,
            '639': 111,
            '640': 114,
            '641': 116,
            '642': 45,
            '643': 117,
            '644': 110,
            '645': 117,
            '646': 115,
            '647': 101,
            '648': 100,
            '649': 45,
            '650': 100,
            '651': 105,
            '652': 115,
            '653': 97,
            '654': 98,
            '655': 108,
            '656': 101,
            '657': 45,
            '658': 100,
            '659': 105,
            '660': 114,
            '661': 101,
            '662': 99,
            '663': 116,
            '664': 105,
            '665': 118,
            '666': 101,
            '667': 115,
            '668': 32,
            '669': 46,
            '670': 34,
            '671': 44,
            '672': 10,
            '673': 32,
            '674': 32,
            '675': 32,
            '676': 32,
            '677': 34,
            '678': 101,
            '679': 115,
            '680': 108,
            '681': 105,
            '682': 110,
            '683': 116,
            '684': 58,
            '685': 102,
            '686': 105,
            '687': 120,
            '688': 34,
            '689': 58,
            '690': 32,
            '691': 34,
            '692': 121,
            '693': 97,
            '694': 114,
            '695': 110,
            '696': 32,
            '697': 114,
            '698': 117,
            '699': 110,
            '700': 32,
            '701': 101,
            '702': 115,
            '703': 108,
            '704': 105,
            '705': 110,
            '706': 116,
            '707': 32,
            '708': 45,
            '709': 45,
            '710': 102,
            '711': 105,
            '712': 120,
            '713': 34,
            '714': 44,
            '715': 10,
            '716': 32,
            '717': 32,
            '718': 32,
            '719': 32,
            '720': 34,
            '721': 112,
            '722': 114,
            '723': 101,
            '724': 116,
            '725': 101,
            '726': 115,
            '727': 116,
            '728': 34,
            '729': 58,
            '730': 32,
            '731': 34,
            '732': 121,
            '733': 97,
            '734': 114,
            '735': 110,
            '736': 32,
            '737': 114,
            '738': 117,
            '739': 110,
            '740': 32,
            '741': 114,
            '742': 101,
            '743': 98,
            '744': 117,
            '745': 105,
            '746': 108,
            '747': 100,
            '748': 34,
            '749': 44,
            '750': 10,
            '751': 32,
            '752': 32,
            '753': 32,
            '754': 32,
            '755': 34,
            '756': 116,
            '757': 101,
            '758': 115,
            '759': 116,
            '760': 34,
            '761': 58,
            '762': 32,
            '763': 34,
            '764': 108,
            '765': 98,
            '766': 45,
            '767': 109,
            '768': 111,
            '769': 99,
            '770': 104,
            '771': 97,
            '772': 32,
            '773': 45,
            '774': 45,
            '775': 97,
            '776': 108,
            '777': 108,
            '778': 111,
            '779': 119,
            '780': 45,
            '781': 99,
            '782': 111,
            '783': 110,
            '784': 115,
            '785': 111,
            '786': 108,
            '787': 101,
            '788': 45,
            '789': 108,
            '790': 111,
            '791': 103,
            '792': 115,
            '793': 32,
            '794': 92,
            '795': 34,
            '796': 100,
            '797': 105,
            '798': 115,
            '799': 116,
            '800': 47,
            '801': 95,
            '802': 95,
            '803': 116,
            '804': 101,
            '805': 115,
            '806': 116,
            '807': 115,
            '808': 95,
            '809': 95,
            '810': 92,
            '811': 34,
            '812': 34,
            '813': 44,
            '814': 10,
            '815': 32,
            '816': 32,
            '817': 32,
            '818': 32,
            '819': 34,
            '820': 112,
            '821': 111,
            '822': 115,
            '823': 116,
            '824': 116,
            '825': 101,
            '826': 115,
            '827': 116,
            '828': 34,
            '829': 58,
            '830': 32,
            '831': 34,
            '832': 121,
            '833': 97,
            '834': 114,
            '835': 110,
            '836': 32,
            '837': 114,
            '838': 117,
            '839': 110,
            '840': 32,
            '841': 108,
            '842': 105,
            '843': 110,
            '844': 116,
            '845': 34,
            '846': 44,
            '847': 10,
            '848': 32,
            '849': 32,
            '850': 32,
            '851': 32,
            '852': 34,
            '853': 116,
            '854': 101,
            '855': 115,
            '856': 116,
            '857': 58,
            '858': 100,
            '859': 101,
            '860': 118,
            '861': 34,
            '862': 58,
            '863': 32,
            '864': 34,
            '865': 108,
            '866': 98,
            '867': 45,
            '868': 109,
            '869': 111,
            '870': 99,
            '871': 104,
            '872': 97,
            '873': 32,
            '874': 45,
            '875': 45,
            '876': 97,
            '877': 108,
            '878': 108,
            '879': 111,
            '880': 119,
            '881': 45,
            '882': 99,
            '883': 111,
            '884': 110,
            '885': 115,
            '886': 111,
            '887': 108,
            '888': 101,
            '889': 45,
            '890': 108,
            '891': 111,
            '892': 103,
            '893': 115,
            '894': 32,
            '895': 100,
            '896': 105,
            '897': 115,
            '898': 116,
            '899': 47,
            '900': 95,
            '901': 95,
            '902': 116,
            '903': 101,
            '904': 115,
            '905': 116,
            '906': 115,
            '907': 95,
            '908': 95,
            '909': 47,
            '910': 42,
            '911': 42,
            '912': 47,
            '913': 42,
            '914': 46,
            '915': 106,
            '916': 115,
            '917': 32,
            '918': 38,
            '919': 38,
            '920': 32,
            '921': 121,
            '922': 97,
            '923': 114,
            '924': 110,
            '925': 32,
            '926': 114,
            '927': 117,
            '928': 110,
            '929': 32,
            '930': 112,
            '931': 111,
            '932': 115,
            '933': 116,
            '934': 116,
            '935': 101,
            '936': 115,
            '937': 116,
            '938': 34,
            '939': 44,
            '940': 10,
            '941': 32,
            '942': 32,
            '943': 32,
            '944': 32,
            '945': 34,
            '946': 100,
            '947': 111,
            '948': 99,
            '949': 107,
            '950': 101,
            '951': 114,
            '952': 58,
            '953': 98,
            '954': 117,
            '955': 105,
            '956': 108,
            '957': 100,
            '958': 34,
            '959': 58,
            '960': 32,
            '961': 34,
            '962': 100,
            '963': 111,
            '964': 99,
            '965': 107,
            '966': 101,
            '967': 114,
            '968': 32,
            '969': 98,
            '970': 117,
            '971': 105,
            '972': 108,
            '973': 100,
            '974': 32,
            '975': 45,
            '976': 116,
            '977': 32,
            '978': 116,
            '979': 101,
            '980': 115,
            '981': 116,
            '982': 45,
            '983': 97,
            '984': 112,
            '985': 112,
            '986': 32,
            '987': 46,
            '988': 34,
            '989': 44,
            '990': 10,
            '991': 32,
            '992': 32,
            '993': 32,
            '994': 32,
            '995': 34,
            '996': 100,
            '997': 111,
            '998': 99,
            '999': 107,
            '1000': 101,
            '1001': 114,
            '1002': 58,
            '1003': 114,
            '1004': 117,
            '1005': 110,
            '1006': 34,
            '1007': 58,
            '1008': 32,
            '1009': 34,
            '1010': 100,
            '1011': 111,
            '1012': 99,
            '1013': 107,
            '1014': 101,
            '1015': 114,
            '1016': 32,
            '1017': 114,
            '1018': 117,
            '1019': 110,
            '1020': 32,
            '1021': 45,
            '1022': 112,
            '1023': 32,
            '1024': 51,
            '1025': 48,
            '1026': 48,
            '1027': 48,
            '1028': 58,
            '1029': 51,
            '1030': 48,
            '1031': 48,
            '1032': 48,
            '1033': 32,
            '1034': 45,
            '1035': 100,
            '1036': 32,
            '1037': 116,
            '1038': 101,
            '1039': 115,
            '1040': 116,
            '1041': 45,
            '1042': 97,
            '1043': 112,
            '1044': 112,
            '1045': 34,
            '1046': 44,
            '1047': 10,
            '1048': 32,
            '1049': 32,
            '1050': 32,
            '1051': 32,
            '1052': 34,
            '1053': 112,
            '1054': 114,
            '1055': 101,
            '1056': 109,
            '1057': 105,
            '1058': 103,
            '1059': 114,
            '1060': 97,
            '1061': 116,
            '1062': 101,
            '1063': 34,
            '1064': 58,
            '1065': 32,
            '1066': 34,
            '1067': 121,
            '1068': 97,
            '1069': 114,
            '1070': 110,
            '1071': 32,
            '1072': 114,
            '1073': 117,
            '1074': 110,
            '1075': 32,
            '1076': 98,
            '1077': 117,
            '1078': 105,
            '1079': 108,
            '1080': 100,
            '1081': 34,
            '1082': 44,
            '1083': 10,
            '1084': 32,
            '1085': 32,
            '1086': 32,
            '1087': 32,
            '1088': 34,
            '1089': 109,
            '1090': 105,
            '1091': 103,
            '1092': 114,
            '1093': 97,
            '1094': 116,
            '1095': 101,
            '1096': 34,
            '1097': 58,
            '1098': 32,
            '1099': 34,
            '1100': 110,
            '1101': 111,
            '1102': 100,
            '1103': 101,
            '1104': 32,
            '1105': 46,
            '1106': 47,
            '1107': 100,
            '1108': 105,
            '1109': 115,
            '1110': 116,
            '1111': 47,
            '1112': 109,
            '1113': 105,
            '1114': 103,
            '1115': 114,
            '1116': 97,
            '1117': 116,
            '1118': 101,
            '1119': 34,
            '1120': 44,
            '1121': 10,
            '1122': 32,
            '1123': 32,
            '1124': 32,
            '1125': 32,
            '1126': 34,
            '1127': 112,
            '1128': 114,
            '1129': 101,
            '1130': 111,
            '1131': 112,
            '1132': 101,
            '1133': 110,
            '1134': 97,
            '1135': 112,
            '1136': 105,
            '1137': 45,
            '1138': 115,
            '1139': 112,
            '1140': 101,
            '1141': 99,
            '1142': 34,
            '1143': 58,
            '1144': 32,
            '1145': 34,
            '1146': 121,
            '1147': 97,
            '1148': 114,
            '1149': 110,
            '1150': 32,
            '1151': 114,
            '1152': 117,
            '1153': 110,
            '1154': 32,
            '1155': 98,
            '1156': 117,
            '1157': 105,
            '1158': 108,
            '1159': 100,
            '1160': 34,
            '1161': 44,
            '1162': 10,
            '1163': 32,
            '1164': 32,
            '1165': 32,
            '1166': 32,
            '1167': 34,
            '1168': 111,
            '1169': 112,
            '1170': 101,
            '1171': 110,
            '1172': 97,
            '1173': 112,
            '1174': 105,
            '1175': 45,
            '1176': 115,
            '1177': 112,
            '1178': 101,
            '1179': 99,
            '1180': 34,
            '1181': 58,
            '1182': 32,
            '1183': 34,
            '1184': 110,
            '1185': 111,
            '1186': 100,
            '1187': 101,
            '1188': 32,
            '1189': 46,
            '1190': 47,
            '1191': 100,
            '1192': 105,
            '1193': 115,
            '1194': 116,
            '1195': 47,
            '1196': 111,
            '1197': 112,
            '1198': 101,
            '1199': 110,
            '1200': 97,
            '1201': 112,
            '1202': 105,
            '1203': 45,
            '1204': 115,
            '1205': 112,
            '1206': 101,
            '1207': 99,
            '1208': 34,
            '1209': 44,
            '1210': 10,
            '1211': 32,
            '1212': 32,
            '1213': 32,
            '1214': 32,
            '1215': 34,
            '1216': 112,
            '1217': 114,
            '1218': 101,
            '1219': 115,
            '1220': 116,
            '1221': 97,
            '1222': 114,
            '1223': 116,
            '1224': 34,
            '1225': 58,
            '1226': 32,
            '1227': 34,
            '1228': 121,
            '1229': 97,
            '1230': 114,
            '1231': 110,
            '1232': 32,
            '1233': 114,
            '1234': 117,
            '1235': 110,
            '1236': 32,
            '1237': 114,
            '1238': 101,
            '1239': 98,
            '1240': 117,
            '1241': 105,
            '1242': 108,
            '1243': 100,
            '1244': 34,
            '1245': 44,
            '1246': 10,
            '1247': 32,
            '1248': 32,
            '1249': 32,
            '1250': 32,
            '1251': 34,
            '1252': 115,
            '1253': 116,
            '1254': 97,
            '1255': 114,
            '1256': 116,
            '1257': 34,
            '1258': 58,
            '1259': 32,
            '1260': 34,
            '1261': 110,
            '1262': 111,
            '1263': 100,
            '1264': 101,
            '1265': 32,
            '1266': 45,
            '1267': 114,
            '1268': 32,
            '1269': 115,
            '1270': 111,
            '1271': 117,
            '1272': 114,
            '1273': 99,
            '1274': 101,
            '1275': 45,
            '1276': 109,
            '1277': 97,
            '1278': 112,
            '1279': 45,
            '1280': 115,
            '1281': 117,
            '1282': 112,
            '1283': 112,
            '1284': 111,
            '1285': 114,
            '1286': 116,
            '1287': 47,
            '1288': 114,
            '1289': 101,
            '1290': 103,
            '1291': 105,
            '1292': 115,
            '1293': 116,
            '1294': 101,
            '1295': 114,
            '1296': 32,
            '1297': 46,
            '1298': 34,
            '1299': 44,
            '1300': 10,
            '1301': 32,
            '1302': 32,
            '1303': 32,
            '1304': 32,
            '1305': 34,
            '1306': 99,
            '1307': 108,
            '1308': 101,
            '1309': 97,
            '1310': 110,
            '1311': 34,
            '1312': 58,
            '1313': 32,
            '1314': 34,
            '1315': 108,
            '1316': 98,
            '1317': 45,
            '1318': 99,
            '1319': 108,
            '1320': 101,
            '1321': 97,
            '1322': 110,
            '1323': 32,
            '1324': 100,
            '1325': 105,
            '1326': 115,
            '1327': 116,
            '1328': 32,
            '1329': 42,
            '1330': 46,
            '1331': 116,
            '1332': 115,
            '1333': 98,
            '1334': 117,
            '1335': 105,
            '1336': 108,
            '1337': 100,
            '1338': 105,
            '1339': 110,
            '1340': 102,
            '1341': 111,
            '1342': 32,
            '1343': 46,
            '1344': 101,
            '1345': 115,
            '1346': 108,
            '1347': 105,
            '1348': 110,
            '1349': 116,
            '1350': 99,
            '1351': 97,
            '1352': 99,
            '1353': 104,
            '1354': 101,
            '1355': 34,
            '1356': 44,
            '1357': 10,
            '1358': 32,
            '1359': 32,
            '1360': 32,
            '1361': 32,
            '1362': 34,
            '1363': 114,
            '1364': 101,
            '1365': 98,
            '1366': 117,
            '1367': 105,
            '1368': 108,
            '1369': 100,
            '1370': 34,
            '1371': 58,
            '1372': 32,
            '1373': 34,
            '1374': 121,
            '1375': 97,
            '1376': 114,
            '1377': 110,
            '1378': 32,
            '1379': 114,
            '1380': 117,
            '1381': 110,
            '1382': 32,
            '1383': 99,
            '1384': 108,
            '1385': 101,
            '1386': 97,
            '1387': 110,
            '1388': 32,
            '1389': 38,
            '1390': 38,
            '1391': 32,
            '1392': 121,
            '1393': 97,
            '1394': 114,
            '1395': 110,
            '1396': 32,
            '1397': 114,
            '1398': 117,
            '1399': 110,
            '1400': 32,
            '1401': 98,
            '1402': 117,
            '1403': 105,
            '1404': 108,
            '1405': 100,
            '1406': 34,
            '1407': 10,
            '1408': 32,
            '1409': 32,
            '1410': 125,
            '1411': 44,
            '1412': 10,
            '1413': 32,
            '1414': 32,
            '1415': 34,
            '1416': 114,
            '1417': 101,
            '1418': 112,
            '1419': 111,
            '1420': 115,
            '1421': 105,
            '1422': 116,
            '1423': 111,
            '1424': 114,
            '1425': 121,
            '1426': 34,
            '1427': 58,
            '1428': 32,
            '1429': 123,
            '1430': 10,
            '1431': 32,
            '1432': 32,
            '1433': 32,
            '1434': 32,
            '1435': 34,
            '1436': 116,
            '1437': 121,
            '1438': 112,
            '1439': 101,
            '1440': 34,
            '1441': 58,
            '1442': 32,
            '1443': 34,
            '1444': 103,
            '1445': 105,
            '1446': 116,
            '1447': 34,
            '1448': 44,
            '1449': 10,
            '1450': 32,
            '1451': 32,
            '1452': 32,
            '1453': 32,
            '1454': 34,
            '1455': 117,
            '1456': 114,
            '1457': 108,
            '1458': 34,
            '1459': 58,
            '1460': 32,
            '1461': 34,
            '1462': 34,
            '1463': 10,
            '1464': 32,
            '1465': 32,
            '1466': 125,
            '1467': 44,
            '1468': 10,
            '1469': 32,
            '1470': 32,
            '1471': 34,
            '1472': 97,
            '1473': 117,
            '1474': 116,
            '1475': 104,
            '1476': 111,
            '1477': 114,
            '1478': 34,
            '1479': 58,
            '1480': 32,
            '1481': 34,
            '1482': 77,
            '1483': 117,
            '1484': 104,
            '1485': 97,
            '1486': 109,
            '1487': 109,
            '1488': 97,
            '1489': 100,
            '1490': 32,
            '1491': 65,
            '1492': 97,
            '1493': 113,
            '1494': 105,
            '1495': 108,
            '1496': 32,
            '1497': 60,
            '1498': 97,
            '1499': 97,
            '1500': 113,
            '1501': 105,
            '1502': 108,
            '1503': 110,
            '1504': 105,
            '1505': 122,
            '1506': 64,
            '1507': 121,
            '1508': 97,
            '1509': 104,
            '1510': 111,
            '1511': 111,
            '1512': 46,
            '1513': 99,
            '1514': 111,
            '1515': 109,
            '1516': 62,
            '1517': 34,
            '1518': 44,
            '1519': 10,
            '1520': 32,
            '1521': 32,
            '1522': 34,
            '1523': 108,
            '1524': 105,
            '1525': 99,
            '1526': 101,
            '1527': 110,
            '1528': 115,
            '1529': 101,
            '1530': 34,
            '1531': 58,
            '1532': 32,
            '1533': 34,
            '1534': 34,
            '1535': 44,
            '1536': 10,
            '1537': 32,
            '1538': 32,
            '1539': 34,
            '1540': 102,
            '1541': 105,
            '1542': 108,
            '1543': 101,
            '1544': 115,
            '1545': 34,
            '1546': 58,
            '1547': 32,
            '1548': 91,
            '1549': 10,
            '1550': 32,
            '1551': 32,
            '1552': 32,
            '1553': 32,
            '1554': 34,
            '1555': 82,
            '1556': 69,
            '1557': 65,
            '1558': 68,
            '1559': 77,
            '1560': 69,
            '1561': 46,
            '1562': 109,
            '1563': 100,
            '1564': 34,
            '1565': 44,
            '1566': 10,
            '1567': 32,
            '1568': 32,
            '1569': 32,
            '1570': 32,
            '1571': 34,
            '1572': 100,
            '1573': 105,
            '1574': 115,
            '1575': 116,
            '1576': 34,
            '1577': 44,
            '1578': 10,
            '1579': 32,
            '1580': 32,
            '1581': 32,
            '1582': 32,
            '1583': 34,
            '1584': 115,
            '1585': 114,
            '1586': 99,
            '1587': 34,
            '1588': 44,
            '1589': 10,
            '1590': 32,
            '1591': 32,
            '1592': 32,
            '1593': 32,
            '1594': 34,
            '1595': 33,
            '1596': 42,
            '1597': 47,
            '1598': 95,
            '1599': 95,
            '1600': 116,
            '1601': 101,
            '1602': 115,
            '1603': 116,
            '1604': 115,
            '1605': 95,
            '1606': 95,
            '1607': 34,
            '1608': 10,
            '1609': 32,
            '1610': 32,
            '1611': 93,
            '1612': 44,
            '1613': 10,
            '1614': 32,
            '1615': 32,
            '1616': 34,
            '1617': 100,
            '1618': 101,
            '1619': 112,
            '1620': 101,
            '1621': 110,
            '1622': 100,
            '1623': 101,
            '1624': 110,
            '1625': 99,
            '1626': 105,
            '1627': 101,
            '1628': 115,
            '1629': 34,
            '1630': 58,
            '1631': 32,
            '1632': 123,
            '1633': 10,
            '1634': 32,
            '1635': 32,
            '1636': 32,
            '1637': 32,
            '1638': 34,
            '1639': 64,
            '1640': 108,
            '1641': 111,
            '1642': 111,
            '1643': 112,
            '1644': 98,
            '1645': 97,
            '1646': 99,
            '1647': 107,
            '1648': 47,
            '1649': 98,
            '1650': 111,
            '1651': 111,
            '1652': 116,
            '1653': 34,
            '1654': 58,
            '1655': 32,
            '1656': 34,
            '1657': 94,
            '1658': 53,
            '1659': 46,
            '1660': 48,
            '1661': 46,
            '1662': 51,
            '1663': 34,
            '1664': 44,
            '1665': 10,
            '1666': 32,
            '1667': 32,
            '1668': 32,
            '1669': 32,
            '1670': 34,
            '1671': 64,
            '1672': 108,
            '1673': 111,
            '1674': 111,
            '1675': 112,
            '1676': 98,
            '1677': 97,
            '1678': 99,
            '1679': 107,
            '1680': 47,
            '1681': 99,
            '1682': 111,
            '1683': 114,
            '1684': 101,
            '1685': 34,
            '1686': 58,
            '1687': 32,
            '1688': 34,
            '1689': 94,
            '1690': 52,
            '1691': 46,
            '1692': 48,
            '1693': 46,
            '1694': 51,
            '1695': 34,
            '1696': 44,
            '1697': 10,
            '1698': 32,
            '1699': 32,
            '1700': 32,
            '1701': 32,
            '1702': 34,
            '1703': 64,
            '1704': 108,
            '1705': 111,
            '1706': 111,
            '1707': 112,
            '1708': 98,
            '1709': 97,
            '1710': 99,
            '1711': 107,
            '1712': 47,
            '1713': 114,
            '1714': 101,
            '1715': 112,
            '1716': 111,
            '1717': 115,
            '1718': 105,
            '1719': 116,
            '1720': 111,
            '1721': 114,
            '1722': 121,
            '1723': 34,
            '1724': 58,
            '1725': 32,
            '1726': 34,
            '1727': 94,
            '1728': 53,
            '1729': 46,
            '1730': 48,
            '1731': 46,
            '1732': 51,
            '1733': 34,
            '1734': 44,
            '1735': 10,
            '1736': 32,
            '1737': 32,
            '1738': 32,
            '1739': 32,
            '1740': 34,
            '1741': 64,
            '1742': 108,
            '1743': 111,
            '1744': 111,
            '1745': 112,
            '1746': 98,
            '1747': 97,
            '1748': 99,
            '1749': 107,
            '1750': 47,
            '1751': 114,
            '1752': 101,
            '1753': 115,
            '1754': 116,
            '1755': 34,
            '1756': 58,
            '1757': 32,
            '1758': 34,
            '1759': 94,
            '1760': 49,
            '1761': 50,
            '1762': 46,
            '1763': 48,
            '1764': 46,
            '1765': 51,
            '1766': 34,
            '1767': 44,
            '1768': 10,
            '1769': 32,
            '1770': 32,
            '1771': 32,
            '1772': 32,
            '1773': 34,
            '1774': 64,
            '1775': 108,
            '1776': 111,
            '1777': 111,
            '1778': 112,
            '1779': 98,
            '1780': 97,
            '1781': 99,
            '1782': 107,
            '1783': 47,
            '1784': 114,
            '1785': 101,
            '1786': 115,
            '1787': 116,
            '1788': 45,
            '1789': 101,
            '1790': 120,
            '1791': 112,
            '1792': 108,
            '1793': 111,
            '1794': 114,
            '1795': 101,
            '1796': 114,
            '1797': 34,
            '1798': 58,
            '1799': 32,
            '1800': 34,
            '1801': 94,
            '1802': 53,
            '1803': 46,
            '1804': 48,
            '1805': 46,
            '1806': 51,
            '1807': 34,
            '1808': 44,
            '1809': 10,
            '1810': 32,
            '1811': 32,
            '1812': 32,
            '1813': 32,
            '1814': 34,
            '1815': 64,
            '1816': 108,
            '1817': 111,
            '1818': 111,
            '1819': 112,
            '1820': 98,
            '1821': 97,
            '1822': 99,
            '1823': 107,
            '1824': 47,
            '1825': 115,
            '1826': 101,
            '1827': 114,
            '1828': 118,
            '1829': 105,
            '1830': 99,
            '1831': 101,
            '1832': 45,
            '1833': 112,
            '1834': 114,
            '1835': 111,
            '1836': 120,
            '1837': 121,
            '1838': 34,
            '1839': 58,
            '1840': 32,
            '1841': 34,
            '1842': 94,
            '1843': 53,
            '1844': 46,
            '1845': 48,
            '1846': 46,
            '1847': 51,
            '1848': 34,
            '1849': 44,
            '1850': 10,
            '1851': 32,
            '1852': 32,
            '1853': 32,
            '1854': 32,
            '1855': 34,
            '1856': 108,
            '1857': 111,
            '1858': 111,
            '1859': 112,
            '1860': 98,
            '1861': 97,
            '1862': 99,
            '1863': 107,
            '1864': 45,
            '1865': 99,
            '1866': 111,
            '1867': 110,
            '1868': 110,
            '1869': 101,
            '1870': 99,
            '1871': 116,
            '1872': 111,
            '1873': 114,
            '1874': 45,
            '1875': 109,
            '1876': 121,
            '1877': 115,
            '1878': 113,
            '1879': 108,
            '1880': 34,
            '1881': 58,
            '1882': 32,
            '1883': 34,
            '1884': 94,
            '1885': 53,
            '1886': 46,
            '1887': 51,
            '1888': 46,
            '1889': 48,
            '1890': 34,
            '1891': 44,
            '1892': 10,
            '1893': 32,
            '1894': 32,
            '1895': 32,
            '1896': 32,
            '1897': 34,
            '1898': 116,
            '1899': 115,
            '1900': 108,
            '1901': 105,
            '1902': 98,
            '1903': 34,
            '1904': 58,
            '1905': 32,
            '1906': 34,
            '1907': 94,
            '1908': 50,
            '1909': 46,
            '1910': 48,
            '1911': 46,
            '1912': 48,
            '1913': 34,
            '1914': 10,
            '1915': 32,
            '1916': 32,
            '1917': 125,
            '1918': 44,
            '1919': 10,
            '1920': 32,
            '1921': 32,
            '1922': 34,
            '1923': 100,
            '1924': 101,
            '1925': 118,
            '1926': 68,
            '1927': 101,
            '1928': 112,
            '1929': 101,
            '1930': 110,
            '1931': 100,
            '1932': 101,
            '1933': 110,
            '1934': 99,
            '1935': 105,
            '1936': 101,
            '1937': 115,
            '1938': 34,
            '1939': 58,
            '1940': 32,
            '1941': 123,
            '1942': 10,
            '1943': 32,
            '1944': 32,
            '1945': 32,
            '1946': 32,
            '1947': 34,
            '1948': 64,
            '1949': 108,
            '1950': 111,
            '1951': 111,
            '1952': 112,
            '1953': 98,
            '1954': 97,
            '1955': 99,
            '1956': 107,
            '1957': 47,
            '1958': 98,
            '1959': 117,
            '1960': 105,
            '1961': 108,
            '1962': 100,
            '1963': 34,
            '1964': 58,
            '1965': 32,
            '1966': 34,
            '1967': 94,
            '1968': 57,
            '1969': 46,
            '1970': 48,
            '1971': 46,
            '1972': 51,
            '1973': 34,
            '1974': 44,
            '1975': 10,
            '1976': 32,
            '1977': 32,
            '1978': 32,
            '1979': 32,
            '1980': 34,
            '1981': 64,
            '1982': 108,
            '1983': 111,
            '1984': 111,
            '1985': 112,
            '1986': 98,
            '1987': 97,
            '1988': 99,
            '1989': 107,
            '1990': 47,
            '1991': 101,
            '1992': 115,
            '1993': 108,
            '1994': 105,
            '1995': 110,
            '1996': 116,
            '1997': 45,
            '1998': 99,
            '1999': 111,
            '2000': 110,
            '2001': 102,
            '2002': 105,
            '2003': 103,
            '2004': 34,
            '2005': 58,
            '2006': 32,
            '2007': 34,
            '2008': 94,
            '2009': 49,
            '2010': 51,
            '2011': 46,
            '2012': 48,
            '2013': 46,
            '2014': 51,
            '2015': 34,
            '2016': 44,
            '2017': 10,
            '2018': 32,
            '2019': 32,
            '2020': 32,
            '2021': 32,
            '2022': 34,
            '2023': 64,
            '2024': 108,
            '2025': 111,
            '2026': 111,
            '2027': 112,
            '2028': 98,
            '2029': 97,
            '2030': 99,
            '2031': 107,
            '2032': 47,
            '2033': 116,
            '2034': 101,
            '2035': 115,
            '2036': 116,
            '2037': 108,
            '2038': 97,
            '2039': 98,
            '2040': 34,
            '2041': 58,
            '2042': 32,
            '2043': 34,
            '2044': 94,
            '2045': 53,
            '2046': 46,
            '2047': 48,
            '2048': 46,
            '2049': 51,
            '2050': 34,
            '2051': 44,
            '2052': 10,
            '2053': 32,
            '2054': 32,
            '2055': 32,
            '2056': 32,
            '2057': 34,
            '2058': 64,
            '2059': 116,
            '2060': 121,
            '2061': 112,
            '2062': 101,
            '2063': 115,
            '2064': 47,
            '2065': 110,
            '2066': 111,
            '2067': 100,
            '2068': 101,
            '2069': 34,
            '2070': 58,
            '2071': 32,
            '2072': 34,
            '2073': 94,
            '2074': 49,
            '2075': 52,
            '2076': 46,
            '2077': 49,
            '2078': 56,
            '2079': 46,
            '2080': 50,
            '2081': 54,
            '2082': 34,
            '2083': 44,
            '2084': 10,
            '2085': 32,
            '2086': 32,
            '2087': 32,
            '2088': 32,
            '2089': 34,
            '2090': 101,
            '2091': 115,
            '2092': 108,
            '2093': 105,
            '2094': 110,
            '2095': 116,
            '2096': 34,
            '2097': 58,
            '2098': 32,
            '2099': 34,
            '2100': 94,
            '2101': 56,
            '2102': 46,
            '2103': 50,
            '2104': 50,
            '2105': 46,
            '2106': 48,
            '2107': 34,
            '2108': 44,
            '2109': 10,
            '2110': 32,
            '2111': 32,
            '2112': 32,
            '2113': 32,
            '2114': 34,
            '2115': 115,
            '2116': 111,
            '2117': 117,
            '2118': 114,
            '2119': 99,
            '2120': 101,
            '2121': 45,
            '2122': 109,
            '2123': 97,
            '2124': 112,
            '2125': 45,
            '2126': 115,
            '2127': 117,
            '2128': 112,
            '2129': 112,
            '2130': 111,
            '2131': 114,
            '2132': 116,
            '2133': 34,
            '2134': 58,
            '2135': 32,
            '2136': 34,
            '2137': 94,
            '2138': 48,
            '2139': 46,
            '2140': 53,
            '2141': 46,
            '2142': 50,
            '2143': 49,
            '2144': 34,
            '2145': 44,
            '2146': 10,
            '2147': 32,
            '2148': 32,
            '2149': 32,
            '2150': 32,
            '2151': 34,
            '2152': 116,
            '2153': 121,
            '2154': 112,
            '2155': 101,
            '2156': 115,
            '2157': 99,
            '2158': 114,
            '2159': 105,
            '2160': 112,
            '2161': 116,
            '2162': 34,
            '2163': 58,
            '2164': 32,
            '2165': 34,
            '2166': 126,
            '2167': 52,
            '2168': 46,
            '2169': 55,
            '2170': 46,
            '2171': 52,
            '2172': 34,
            '2173': 10,
            '2174': 32,
            '2175': 32,
            '2176': 125,
            '2177': 10,
            '2178': 125,
            '2179': 10
          },
          history: [
            '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json'
          ],
          _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
          _isVinyl: true,
          _symlink: null
        },
        '/home/aaqilniz/.yo-rc-global.json': {
          stat: null,
          _contents: null,
          history: [
            '/home/aaqilniz/.yo-rc-global.json'
          ],
          _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
          _isVinyl: true,
          _symlink: null
        },
        '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json': {
          stat: {
            dev: 2055,
            mode: 33279,
            nlink: 1,
            uid: 1000,
            gid: 1000,
            rdev: 0,
            blksize: 4096,
            ino: 2241690,
            size: 82,
            blocks: 1,
            atimeMs: 1664468198390.669,
            mtimeMs: 1664467890046.1177,
            ctimeMs: 1664467890046.1177,
            birthtimeMs: 0,
            atime: new Date('2022-09-29T16:16:38.391Z'),
            mtime: new Date('2022-09-29T16:11:30.046Z'),
            ctime: new Date('2022-09-29T16:11:30.046Z'),
            birthtime: new Date('1970-01-01T00:00:00.000Z')
          },
          _contents: {
            '0': 123,
            '1': 10,
            '2': 32,
            '3': 32,
            '4': 34,
            '5': 64,
            '6': 108,
            '7': 111,
            '8': 111,
            '9': 112,
            '10': 98,
            '11': 97,
            '12': 99,
            '13': 107,
            '14': 47,
            '15': 99,
            '16': 108,
            '17': 105,
            '18': 34,
            '19': 58,
            '20': 32,
            '21': 123,
            '22': 10,
            '23': 32,
            '24': 32,
            '25': 32,
            '26': 32,
            '27': 34,
            '28': 112,
            '29': 97,
            '30': 99,
            '31': 107,
            '32': 97,
            '33': 103,
            '34': 101,
            '35': 77,
            '36': 97,
            '37': 110,
            '38': 97,
            '39': 103,
            '40': 101,
            '41': 114,
            '42': 34,
            '43': 58,
            '44': 32,
            '45': 34,
            '46': 121,
            '47': 97,
            '48': 114,
            '49': 110,
            '50': 34,
            '51': 44,
            '52': 10,
            '53': 32,
            '54': 32,
            '55': 32,
            '56': 32,
            '57': 34,
            '58': 118,
            '59': 101,
            '60': 114,
            '61': 115,
            '62': 105,
            '63': 111,
            '64': 110,
            '65': 34,
            '66': 58,
            '67': 32,
            '68': 34,
            '69': 52,
            '70': 46,
            '71': 49,
            '72': 46,
            '73': 51,
            '74': 34,
            '75': 10,
            '76': 32,
            '77': 32,
            '78': 125,
            '79': 10,
            '80': 125,
            '81': 10
          },
          history: [
            '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json'
          ],
          _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
          _isVinyl: true,
          _symlink: null
        }
      },
      Symbol(kCapture): false
    },
    fs: {
      store: {
        _events: {
          change: [
            (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    },
            (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    }
          ]
        },
        _eventsCount: 1,
        _maxListeners: 0,
        store: {
          '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json': {
            stat: null,
            _contents: null,
            history: [
              '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json'
            ],
            _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
            _isVinyl: true,
            _symlink: null
          },
          '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json': {
            stat: {
              dev: 2055,
              mode: 33279,
              nlink: 1,
              uid: 1000,
              gid: 1000,
              rdev: 0,
              blksize: 4096,
              ino: 2241697,
              size: 2180,
              blocks: 8,
              atimeMs: 1664473760957.5466,
              mtimeMs: 1664473760805.593,
              ctimeMs: 1664473760805.593,
              birthtimeMs: 0,
              atime: new Date('2022-09-29T17:49:20.958Z'),
              mtime: new Date('2022-09-29T17:49:20.806Z'),
              ctime: new Date('2022-09-29T17:49:20.806Z'),
              birthtime: new Date('1970-01-01T00:00:00.000Z')
            },
            _contents: {
              '0': 123,
              '1': 10,
              '2': 32,
              '3': 32,
              '4': 34,
              '5': 110,
              '6': 97,
              '7': 109,
              '8': 101,
              '9': 34,
              '10': 58,
              '11': 32,
              '12': 34,
              '13': 116,
              '14': 101,
              '15': 115,
              '16': 116,
              '17': 45,
              '18': 97,
              '19': 112,
              '20': 112,
              '21': 34,
              '22': 44,
              '23': 10,
              '24': 32,
              '25': 32,
              '26': 34,
              '27': 118,
              '28': 101,
              '29': 114,
              '30': 115,
              '31': 105,
              '32': 111,
              '33': 110,
              '34': 34,
              '35': 58,
              '36': 32,
              '37': 34,
              '38': 48,
              '39': 46,
              '40': 48,
              '41': 46,
              '42': 49,
              '43': 34,
              '44': 44,
              '45': 10,
              '46': 32,
              '47': 32,
              '48': 34,
              '49': 100,
              '50': 101,
              '51': 115,
              '52': 99,
              '53': 114,
              '54': 105,
              '55': 112,
              '56': 116,
              '57': 105,
              '58': 111,
              '59': 110,
              '60': 34,
              '61': 58,
              '62': 32,
              '63': 34,
              '64': 112,
              '65': 97,
              '66': 116,
              '67': 114,
              '68': 105,
              '69': 99,
              '70': 107,
              '71': 34,
              '72': 44,
              '73': 10,
              '74': 32,
              '75': 32,
              '76': 34,
              '77': 107,
              '78': 101,
              '79': 121,
              '80': 119,
              '81': 111,
              '82': 114,
              '83': 100,
              '84': 115,
              '85': 34,
              '86': 58,
              '87': 32,
              '88': 91,
              '89': 10,
              '90': 32,
              '91': 32,
              '92': 32,
              '93': 32,
              '94': 34,
              '95': 108,
              '96': 111,
              '97': 111,
              '98': 112,
              '99': 98,
              '100': 97,
              '101': 99,
              '102': 107,
              '103': 45,
              '104': 97,
              '105': 112,
              '106': 112,
              '107': 108,
              '108': 105,
              '109': 99,
              '110': 97,
              '111': 116,
              '112': 105,
              '113': 111,
              '114': 110,
              '115': 34,
              '116': 44,
              '117': 10,
              '118': 32,
              '119': 32,
              '120': 32,
              '121': 32,
              '122': 34,
              '123': 108,
              '124': 111,
              '125': 111,
              '126': 112,
              '127': 98,
              '128': 97,
              '129': 99,
              '130': 107,
              '131': 34,
              '132': 10,
              '133': 32,
              '134': 32,
              '135': 93,
              '136': 44,
              '137': 10,
              '138': 32,
              '139': 32,
              '140': 34,
              '141': 109,
              '142': 97,
              '143': 105,
              '144': 110,
              '145': 34,
              '146': 58,
              '147': 32,
              '148': 34,
              '149': 100,
              '150': 105,
              '151': 115,
              '152': 116,
              '153': 47,
              '154': 105,
              '155': 110,
              '156': 100,
              '157': 101,
              '158': 120,
              '159': 46,
              '160': 106,
              '161': 115,
              '162': 34,
              '163': 44,
              '164': 10,
              '165': 32,
              '166': 32,
              '167': 34,
              '168': 116,
              '169': 121,
              '170': 112,
              '171': 101,
              '172': 115,
              '173': 34,
              '174': 58,
              '175': 32,
              '176': 34,
              '177': 100,
              '178': 105,
              '179': 115,
              '180': 116,
              '181': 47,
              '182': 105,
              '183': 110,
              '184': 100,
              '185': 101,
              '186': 120,
              '187': 46,
              '188': 100,
              '189': 46,
              '190': 116,
              '191': 115,
              '192': 34,
              '193': 44,
              '194': 10,
              '195': 32,
              '196': 32,
              '197': 34,
              '198': 101,
              '199': 110,
              '200': 103,
              '201': 105,
              '202': 110,
              '203': 101,
              '204': 115,
              '205': 34,
              '206': 58,
              '207': 32,
              '208': 123,
              '209': 10,
              '210': 32,
              '211': 32,
              '212': 32,
              '213': 32,
              '214': 34,
              '215': 110,
              '216': 111,
              '217': 100,
              '218': 101,
              '219': 34,
              '220': 58,
              '221': 32,
              '222': 34,
              '223': 49,
              '224': 52,
              '225': 32,
              '226': 124,
              '227': 124,
              '228': 32,
              '229': 49,
              '230': 54,
              '231': 32,
              '232': 124,
              '233': 124,
              '234': 32,
              '235': 49,
              '236': 55,
              '237': 32,
              '238': 124,
              '239': 124,
              '240': 32,
              '241': 49,
              '242': 56,
              '243': 34,
              '244': 10,
              '245': 32,
              '246': 32,
              '247': 125,
              '248': 44,
              '249': 10,
              '250': 32,
              '251': 32,
              '252': 34,
              '253': 115,
              '254': 99,
              '255': 114,
              '256': 105,
              '257': 112,
              '258': 116,
              '259': 115,
              '260': 34,
              '261': 58,
              '262': 32,
              '263': 123,
              '264': 10,
              '265': 32,
              '266': 32,
              '267': 32,
              '268': 32,
              '269': 34,
              '270': 98,
              '271': 117,
              '272': 105,
              '273': 108,
              '274': 100,
              '275': 34,
              '276': 58,
              '277': 32,
              '278': 34,
              '279': 108,
              '280': 98,
              '281': 45,
              '282': 116,
              '283': 115,
              '284': 99,
              '285': 34,
              '286': 44,
              '287': 10,
              '288': 32,
              '289': 32,
              '290': 32,
              '291': 32,
              '292': 34,
              '293': 98,
              '294': 117,
              '295': 105,
              '296': 108,
              '297': 100,
              '298': 58,
              '299': 119,
              '300': 97,
              '301': 116,
              '302': 99,
              '303': 104,
              '304': 34,
              '305': 58,
              '306': 32,
              '307': 34,
              '308': 108,
              '309': 98,
              '310': 45,
              '311': 116,
              '312': 115,
              '313': 99,
              '314': 32,
              '315': 45,
              '316': 45,
              '317': 119,
              '318': 97,
              '319': 116,
              '320': 99,
              '321': 104,
              '322': 34,
              '323': 44,
              '324': 10,
              '325': 32,
              '326': 32,
              '327': 32,
              '328': 32,
              '329': 34,
              '330': 108,
              '331': 105,
              '332': 110,
              '333': 116,
              '334': 34,
              '335': 58,
              '336': 32,
              '337': 34,
              '338': 121,
              '339': 97,
              '340': 114,
              '341': 110,
              '342': 32,
              '343': 114,
              '344': 117,
              '345': 110,
              '346': 32,
              '347': 101,
              '348': 115,
              '349': 108,
              '350': 105,
              '351': 110,
              '352': 116,
              '353': 32,
              '354': 38,
              '355': 38,
              '356': 32,
              '357': 121,
              '358': 97,
              '359': 114,
              '360': 110,
              '361': 32,
              '362': 114,
              '363': 117,
              '364': 110,
              '365': 32,
              '366': 112,
              '367': 114,
              '368': 101,
              '369': 116,
              '370': 116,
              '371': 105,
              '372': 101,
              '373': 114,
              '374': 58,
              '375': 99,
              '376': 104,
              '377': 101,
              '378': 99,
              '379': 107,
              '380': 34,
              '381': 44,
              '382': 10,
              '383': 32,
              '384': 32,
              '385': 32,
              '386': 32,
              '387': 34,
              '388': 108,
              '389': 105,
              '390': 110,
              '391': 116,
              '392': 58,
              '393': 102,
              '394': 105,
              '395': 120,
              '396': 34,
              '397': 58,
              '398': 32,
              '399': 34,
              '400': 121,
              '401': 97,
              '402': 114,
              '403': 110,
              '404': 32,
              '405': 114,
              '406': 117,
              '407': 110,
              '408': 32,
              '409': 101,
              '410': 115,
              '411': 108,
              '412': 105,
              '413': 110,
              '414': 116,
              '415': 58,
              '416': 102,
              '417': 105,
              '418': 120,
              '419': 32,
              '420': 38,
              '421': 38,
              '422': 32,
              '423': 121,
              '424': 97,
              '425': 114,
              '426': 110,
              '427': 32,
              '428': 114,
              '429': 117,
              '430': 110,
              '431': 32,
              '432': 112,
              '433': 114,
              '434': 101,
              '435': 116,
              '436': 116,
              '437': 105,
              '438': 101,
              '439': 114,
              '440': 58,
              '441': 102,
              '442': 105,
              '443': 120,
              '444': 34,
              '445': 44,
              '446': 10,
              '447': 32,
              '448': 32,
              '449': 32,
              '450': 32,
              '451': 34,
              '452': 112,
              '453': 114,
              '454': 101,
              '455': 116,
              '456': 116,
              '457': 105,
              '458': 101,
              '459': 114,
              '460': 58,
              '461': 99,
              '462': 108,
              '463': 105,
              '464': 34,
              '465': 58,
              '466': 32,
              '467': 34,
              '468': 108,
              '469': 98,
              '470': 45,
              '471': 112,
              '472': 114,
              '473': 101,
              '474': 116,
              '475': 116,
              '476': 105,
              '477': 101,
              '478': 114,
              '479': 32,
              '480': 92,
              '481': 34,
              '482': 42,
              '483': 42,
              '484': 47,
              '485': 42,
              '486': 46,
              '487': 116,
              '488': 115,
              '489': 92,
              '490': 34,
              '491': 32,
              '492': 92,
              '493': 34,
              '494': 42,
              '495': 42,
              '496': 47,
              '497': 42,
              '498': 46,
              '499': 106,
              '500': 115,
              '501': 92,
              '502': 34,
              '503': 34,
              '504': 44,
              '505': 10,
              '506': 32,
              '507': 32,
              '508': 32,
              '509': 32,
              '510': 34,
              '511': 112,
              '512': 114,
              '513': 101,
              '514': 116,
              '515': 116,
              '516': 105,
              '517': 101,
              '518': 114,
              '519': 58,
              '520': 99,
              '521': 104,
              '522': 101,
              '523': 99,
              '524': 107,
              '525': 34,
              '526': 58,
              '527': 32,
              '528': 34,
              '529': 121,
              '530': 97,
              '531': 114,
              '532': 110,
              '533': 32,
              '534': 114,
              '535': 117,
              '536': 110,
              '537': 32,
              '538': 112,
              '539': 114,
              '540': 101,
              '541': 116,
              '542': 116,
              '543': 105,
              '544': 101,
              '545': 114,
              '546': 58,
              '547': 99,
              '548': 108,
              '549': 105,
              '550': 32,
              '551': 45,
              '552': 108,
              '553': 34,
              '554': 44,
              '555': 10,
              '556': 32,
              '557': 32,
              '558': 32,
              '559': 32,
              '560': 34,
              '561': 112,
              '562': 114,
              '563': 101,
              '564': 116,
              '565': 116,
              '566': 105,
              '567': 101,
              '568': 114,
              '569': 58,
              '570': 102,
              '571': 105,
              '572': 120,
              '573': 34,
              '574': 58,
              '575': 32,
              '576': 34,
              '577': 121,
              '578': 97,
              '579': 114,
              '580': 110,
              '581': 32,
              '582': 114,
              '583': 117,
              '584': 110,
              '585': 32,
              '586': 112,
              '587': 114,
              '588': 101,
              '589': 116,
              '590': 116,
              '591': 105,
              '592': 101,
              '593': 114,
              '594': 58,
              '595': 99,
              '596': 108,
              '597': 105,
              '598': 32,
              '599': 45,
              '600': 45,
              '601': 119,
              '602': 114,
              '603': 105,
              '604': 116,
              '605': 101,
              '606': 34,
              '607': 44,
              '608': 10,
              '609': 32,
              '610': 32,
              '611': 32,
              '612': 32,
              '613': 34,
              '614': 101,
              '615': 115,
              '616': 108,
              '617': 105,
              '618': 110,
              '619': 116,
              '620': 34,
              '621': 58,
              '622': 32,
              '623': 34,
              '624': 108,
              '625': 98,
              '626': 45,
              '627': 101,
              '628': 115,
              '629': 108,
              '630': 105,
              '631': 110,
              '632': 116,
              '633': 32,
              '634': 45,
              '635': 45,
              '636': 114,
              '637': 101,
              '638': 112,
              '639': 111,
              '640': 114,
              '641': 116,
              '642': 45,
              '643': 117,
              '644': 110,
              '645': 117,
              '646': 115,
              '647': 101,
              '648': 100,
              '649': 45,
              '650': 100,
              '651': 105,
              '652': 115,
              '653': 97,
              '654': 98,
              '655': 108,
              '656': 101,
              '657': 45,
              '658': 100,
              '659': 105,
              '660': 114,
              '661': 101,
              '662': 99,
              '663': 116,
              '664': 105,
              '665': 118,
              '666': 101,
              '667': 115,
              '668': 32,
              '669': 46,
              '670': 34,
              '671': 44,
              '672': 10,
              '673': 32,
              '674': 32,
              '675': 32,
              '676': 32,
              '677': 34,
              '678': 101,
              '679': 115,
              '680': 108,
              '681': 105,
              '682': 110,
              '683': 116,
              '684': 58,
              '685': 102,
              '686': 105,
              '687': 120,
              '688': 34,
              '689': 58,
              '690': 32,
              '691': 34,
              '692': 121,
              '693': 97,
              '694': 114,
              '695': 110,
              '696': 32,
              '697': 114,
              '698': 117,
              '699': 110,
              '700': 32,
              '701': 101,
              '702': 115,
              '703': 108,
              '704': 105,
              '705': 110,
              '706': 116,
              '707': 32,
              '708': 45,
              '709': 45,
              '710': 102,
              '711': 105,
              '712': 120,
              '713': 34,
              '714': 44,
              '715': 10,
              '716': 32,
              '717': 32,
              '718': 32,
              '719': 32,
              '720': 34,
              '721': 112,
              '722': 114,
              '723': 101,
              '724': 116,
              '725': 101,
              '726': 115,
              '727': 116,
              '728': 34,
              '729': 58,
              '730': 32,
              '731': 34,
              '732': 121,
              '733': 97,
              '734': 114,
              '735': 110,
              '736': 32,
              '737': 114,
              '738': 117,
              '739': 110,
              '740': 32,
              '741': 114,
              '742': 101,
              '743': 98,
              '744': 117,
              '745': 105,
              '746': 108,
              '747': 100,
              '748': 34,
              '749': 44,
              '750': 10,
              '751': 32,
              '752': 32,
              '753': 32,
              '754': 32,
              '755': 34,
              '756': 116,
              '757': 101,
              '758': 115,
              '759': 116,
              '760': 34,
              '761': 58,
              '762': 32,
              '763': 34,
              '764': 108,
              '765': 98,
              '766': 45,
              '767': 109,
              '768': 111,
              '769': 99,
              '770': 104,
              '771': 97,
              '772': 32,
              '773': 45,
              '774': 45,
              '775': 97,
              '776': 108,
              '777': 108,
              '778': 111,
              '779': 119,
              '780': 45,
              '781': 99,
              '782': 111,
              '783': 110,
              '784': 115,
              '785': 111,
              '786': 108,
              '787': 101,
              '788': 45,
              '789': 108,
              '790': 111,
              '791': 103,
              '792': 115,
              '793': 32,
              '794': 92,
              '795': 34,
              '796': 100,
              '797': 105,
              '798': 115,
              '799': 116,
              '800': 47,
              '801': 95,
              '802': 95,
              '803': 116,
              '804': 101,
              '805': 115,
              '806': 116,
              '807': 115,
              '808': 95,
              '809': 95,
              '810': 92,
              '811': 34,
              '812': 34,
              '813': 44,
              '814': 10,
              '815': 32,
              '816': 32,
              '817': 32,
              '818': 32,
              '819': 34,
              '820': 112,
              '821': 111,
              '822': 115,
              '823': 116,
              '824': 116,
              '825': 101,
              '826': 115,
              '827': 116,
              '828': 34,
              '829': 58,
              '830': 32,
              '831': 34,
              '832': 121,
              '833': 97,
              '834': 114,
              '835': 110,
              '836': 32,
              '837': 114,
              '838': 117,
              '839': 110,
              '840': 32,
              '841': 108,
              '842': 105,
              '843': 110,
              '844': 116,
              '845': 34,
              '846': 44,
              '847': 10,
              '848': 32,
              '849': 32,
              '850': 32,
              '851': 32,
              '852': 34,
              '853': 116,
              '854': 101,
              '855': 115,
              '856': 116,
              '857': 58,
              '858': 100,
              '859': 101,
              '860': 118,
              '861': 34,
              '862': 58,
              '863': 32,
              '864': 34,
              '865': 108,
              '866': 98,
              '867': 45,
              '868': 109,
              '869': 111,
              '870': 99,
              '871': 104,
              '872': 97,
              '873': 32,
              '874': 45,
              '875': 45,
              '876': 97,
              '877': 108,
              '878': 108,
              '879': 111,
              '880': 119,
              '881': 45,
              '882': 99,
              '883': 111,
              '884': 110,
              '885': 115,
              '886': 111,
              '887': 108,
              '888': 101,
              '889': 45,
              '890': 108,
              '891': 111,
              '892': 103,
              '893': 115,
              '894': 32,
              '895': 100,
              '896': 105,
              '897': 115,
              '898': 116,
              '899': 47,
              '900': 95,
              '901': 95,
              '902': 116,
              '903': 101,
              '904': 115,
              '905': 116,
              '906': 115,
              '907': 95,
              '908': 95,
              '909': 47,
              '910': 42,
              '911': 42,
              '912': 47,
              '913': 42,
              '914': 46,
              '915': 106,
              '916': 115,
              '917': 32,
              '918': 38,
              '919': 38,
              '920': 32,
              '921': 121,
              '922': 97,
              '923': 114,
              '924': 110,
              '925': 32,
              '926': 114,
              '927': 117,
              '928': 110,
              '929': 32,
              '930': 112,
              '931': 111,
              '932': 115,
              '933': 116,
              '934': 116,
              '935': 101,
              '936': 115,
              '937': 116,
              '938': 34,
              '939': 44,
              '940': 10,
              '941': 32,
              '942': 32,
              '943': 32,
              '944': 32,
              '945': 34,
              '946': 100,
              '947': 111,
              '948': 99,
              '949': 107,
              '950': 101,
              '951': 114,
              '952': 58,
              '953': 98,
              '954': 117,
              '955': 105,
              '956': 108,
              '957': 100,
              '958': 34,
              '959': 58,
              '960': 32,
              '961': 34,
              '962': 100,
              '963': 111,
              '964': 99,
              '965': 107,
              '966': 101,
              '967': 114,
              '968': 32,
              '969': 98,
              '970': 117,
              '971': 105,
              '972': 108,
              '973': 100,
              '974': 32,
              '975': 45,
              '976': 116,
              '977': 32,
              '978': 116,
              '979': 101,
              '980': 115,
              '981': 116,
              '982': 45,
              '983': 97,
              '984': 112,
              '985': 112,
              '986': 32,
              '987': 46,
              '988': 34,
              '989': 44,
              '990': 10,
              '991': 32,
              '992': 32,
              '993': 32,
              '994': 32,
              '995': 34,
              '996': 100,
              '997': 111,
              '998': 99,
              '999': 107,
              '1000': 101,
              '1001': 114,
              '1002': 58,
              '1003': 114,
              '1004': 117,
              '1005': 110,
              '1006': 34,
              '1007': 58,
              '1008': 32,
              '1009': 34,
              '1010': 100,
              '1011': 111,
              '1012': 99,
              '1013': 107,
              '1014': 101,
              '1015': 114,
              '1016': 32,
              '1017': 114,
              '1018': 117,
              '1019': 110,
              '1020': 32,
              '1021': 45,
              '1022': 112,
              '1023': 32,
              '1024': 51,
              '1025': 48,
              '1026': 48,
              '1027': 48,
              '1028': 58,
              '1029': 51,
              '1030': 48,
              '1031': 48,
              '1032': 48,
              '1033': 32,
              '1034': 45,
              '1035': 100,
              '1036': 32,
              '1037': 116,
              '1038': 101,
              '1039': 115,
              '1040': 116,
              '1041': 45,
              '1042': 97,
              '1043': 112,
              '1044': 112,
              '1045': 34,
              '1046': 44,
              '1047': 10,
              '1048': 32,
              '1049': 32,
              '1050': 32,
              '1051': 32,
              '1052': 34,
              '1053': 112,
              '1054': 114,
              '1055': 101,
              '1056': 109,
              '1057': 105,
              '1058': 103,
              '1059': 114,
              '1060': 97,
              '1061': 116,
              '1062': 101,
              '1063': 34,
              '1064': 58,
              '1065': 32,
              '1066': 34,
              '1067': 121,
              '1068': 97,
              '1069': 114,
              '1070': 110,
              '1071': 32,
              '1072': 114,
              '1073': 117,
              '1074': 110,
              '1075': 32,
              '1076': 98,
              '1077': 117,
              '1078': 105,
              '1079': 108,
              '1080': 100,
              '1081': 34,
              '1082': 44,
              '1083': 10,
              '1084': 32,
              '1085': 32,
              '1086': 32,
              '1087': 32,
              '1088': 34,
              '1089': 109,
              '1090': 105,
              '1091': 103,
              '1092': 114,
              '1093': 97,
              '1094': 116,
              '1095': 101,
              '1096': 34,
              '1097': 58,
              '1098': 32,
              '1099': 34,
              '1100': 110,
              '1101': 111,
              '1102': 100,
              '1103': 101,
              '1104': 32,
              '1105': 46,
              '1106': 47,
              '1107': 100,
              '1108': 105,
              '1109': 115,
              '1110': 116,
              '1111': 47,
              '1112': 109,
              '1113': 105,
              '1114': 103,
              '1115': 114,
              '1116': 97,
              '1117': 116,
              '1118': 101,
              '1119': 34,
              '1120': 44,
              '1121': 10,
              '1122': 32,
              '1123': 32,
              '1124': 32,
              '1125': 32,
              '1126': 34,
              '1127': 112,
              '1128': 114,
              '1129': 101,
              '1130': 111,
              '1131': 112,
              '1132': 101,
              '1133': 110,
              '1134': 97,
              '1135': 112,
              '1136': 105,
              '1137': 45,
              '1138': 115,
              '1139': 112,
              '1140': 101,
              '1141': 99,
              '1142': 34,
              '1143': 58,
              '1144': 32,
              '1145': 34,
              '1146': 121,
              '1147': 97,
              '1148': 114,
              '1149': 110,
              '1150': 32,
              '1151': 114,
              '1152': 117,
              '1153': 110,
              '1154': 32,
              '1155': 98,
              '1156': 117,
              '1157': 105,
              '1158': 108,
              '1159': 100,
              '1160': 34,
              '1161': 44,
              '1162': 10,
              '1163': 32,
              '1164': 32,
              '1165': 32,
              '1166': 32,
              '1167': 34,
              '1168': 111,
              '1169': 112,
              '1170': 101,
              '1171': 110,
              '1172': 97,
              '1173': 112,
              '1174': 105,
              '1175': 45,
              '1176': 115,
              '1177': 112,
              '1178': 101,
              '1179': 99,
              '1180': 34,
              '1181': 58,
              '1182': 32,
              '1183': 34,
              '1184': 110,
              '1185': 111,
              '1186': 100,
              '1187': 101,
              '1188': 32,
              '1189': 46,
              '1190': 47,
              '1191': 100,
              '1192': 105,
              '1193': 115,
              '1194': 116,
              '1195': 47,
              '1196': 111,
              '1197': 112,
              '1198': 101,
              '1199': 110,
              '1200': 97,
              '1201': 112,
              '1202': 105,
              '1203': 45,
              '1204': 115,
              '1205': 112,
              '1206': 101,
              '1207': 99,
              '1208': 34,
              '1209': 44,
              '1210': 10,
              '1211': 32,
              '1212': 32,
              '1213': 32,
              '1214': 32,
              '1215': 34,
              '1216': 112,
              '1217': 114,
              '1218': 101,
              '1219': 115,
              '1220': 116,
              '1221': 97,
              '1222': 114,
              '1223': 116,
              '1224': 34,
              '1225': 58,
              '1226': 32,
              '1227': 34,
              '1228': 121,
              '1229': 97,
              '1230': 114,
              '1231': 110,
              '1232': 32,
              '1233': 114,
              '1234': 117,
              '1235': 110,
              '1236': 32,
              '1237': 114,
              '1238': 101,
              '1239': 98,
              '1240': 117,
              '1241': 105,
              '1242': 108,
              '1243': 100,
              '1244': 34,
              '1245': 44,
              '1246': 10,
              '1247': 32,
              '1248': 32,
              '1249': 32,
              '1250': 32,
              '1251': 34,
              '1252': 115,
              '1253': 116,
              '1254': 97,
              '1255': 114,
              '1256': 116,
              '1257': 34,
              '1258': 58,
              '1259': 32,
              '1260': 34,
              '1261': 110,
              '1262': 111,
              '1263': 100,
              '1264': 101,
              '1265': 32,
              '1266': 45,
              '1267': 114,
              '1268': 32,
              '1269': 115,
              '1270': 111,
              '1271': 117,
              '1272': 114,
              '1273': 99,
              '1274': 101,
              '1275': 45,
              '1276': 109,
              '1277': 97,
              '1278': 112,
              '1279': 45,
              '1280': 115,
              '1281': 117,
              '1282': 112,
              '1283': 112,
              '1284': 111,
              '1285': 114,
              '1286': 116,
              '1287': 47,
              '1288': 114,
              '1289': 101,
              '1290': 103,
              '1291': 105,
              '1292': 115,
              '1293': 116,
              '1294': 101,
              '1295': 114,
              '1296': 32,
              '1297': 46,
              '1298': 34,
              '1299': 44,
              '1300': 10,
              '1301': 32,
              '1302': 32,
              '1303': 32,
              '1304': 32,
              '1305': 34,
              '1306': 99,
              '1307': 108,
              '1308': 101,
              '1309': 97,
              '1310': 110,
              '1311': 34,
              '1312': 58,
              '1313': 32,
              '1314': 34,
              '1315': 108,
              '1316': 98,
              '1317': 45,
              '1318': 99,
              '1319': 108,
              '1320': 101,
              '1321': 97,
              '1322': 110,
              '1323': 32,
              '1324': 100,
              '1325': 105,
              '1326': 115,
              '1327': 116,
              '1328': 32,
              '1329': 42,
              '1330': 46,
              '1331': 116,
              '1332': 115,
              '1333': 98,
              '1334': 117,
              '1335': 105,
              '1336': 108,
              '1337': 100,
              '1338': 105,
              '1339': 110,
              '1340': 102,
              '1341': 111,
              '1342': 32,
              '1343': 46,
              '1344': 101,
              '1345': 115,
              '1346': 108,
              '1347': 105,
              '1348': 110,
              '1349': 116,
              '1350': 99,
              '1351': 97,
              '1352': 99,
              '1353': 104,
              '1354': 101,
              '1355': 34,
              '1356': 44,
              '1357': 10,
              '1358': 32,
              '1359': 32,
              '1360': 32,
              '1361': 32,
              '1362': 34,
              '1363': 114,
              '1364': 101,
              '1365': 98,
              '1366': 117,
              '1367': 105,
              '1368': 108,
              '1369': 100,
              '1370': 34,
              '1371': 58,
              '1372': 32,
              '1373': 34,
              '1374': 121,
              '1375': 97,
              '1376': 114,
              '1377': 110,
              '1378': 32,
              '1379': 114,
              '1380': 117,
              '1381': 110,
              '1382': 32,
              '1383': 99,
              '1384': 108,
              '1385': 101,
              '1386': 97,
              '1387': 110,
              '1388': 32,
              '1389': 38,
              '1390': 38,
              '1391': 32,
              '1392': 121,
              '1393': 97,
              '1394': 114,
              '1395': 110,
              '1396': 32,
              '1397': 114,
              '1398': 117,
              '1399': 110,
              '1400': 32,
              '1401': 98,
              '1402': 117,
              '1403': 105,
              '1404': 108,
              '1405': 100,
              '1406': 34,
              '1407': 10,
              '1408': 32,
              '1409': 32,
              '1410': 125,
              '1411': 44,
              '1412': 10,
              '1413': 32,
              '1414': 32,
              '1415': 34,
              '1416': 114,
              '1417': 101,
              '1418': 112,
              '1419': 111,
              '1420': 115,
              '1421': 105,
              '1422': 116,
              '1423': 111,
              '1424': 114,
              '1425': 121,
              '1426': 34,
              '1427': 58,
              '1428': 32,
              '1429': 123,
              '1430': 10,
              '1431': 32,
              '1432': 32,
              '1433': 32,
              '1434': 32,
              '1435': 34,
              '1436': 116,
              '1437': 121,
              '1438': 112,
              '1439': 101,
              '1440': 34,
              '1441': 58,
              '1442': 32,
              '1443': 34,
              '1444': 103,
              '1445': 105,
              '1446': 116,
              '1447': 34,
              '1448': 44,
              '1449': 10,
              '1450': 32,
              '1451': 32,
              '1452': 32,
              '1453': 32,
              '1454': 34,
              '1455': 117,
              '1456': 114,
              '1457': 108,
              '1458': 34,
              '1459': 58,
              '1460': 32,
              '1461': 34,
              '1462': 34,
              '1463': 10,
              '1464': 32,
              '1465': 32,
              '1466': 125,
              '1467': 44,
              '1468': 10,
              '1469': 32,
              '1470': 32,
              '1471': 34,
              '1472': 97,
              '1473': 117,
              '1474': 116,
              '1475': 104,
              '1476': 111,
              '1477': 114,
              '1478': 34,
              '1479': 58,
              '1480': 32,
              '1481': 34,
              '1482': 77,
              '1483': 117,
              '1484': 104,
              '1485': 97,
              '1486': 109,
              '1487': 109,
              '1488': 97,
              '1489': 100,
              '1490': 32,
              '1491': 65,
              '1492': 97,
              '1493': 113,
              '1494': 105,
              '1495': 108,
              '1496': 32,
              '1497': 60,
              '1498': 97,
              '1499': 97,
              '1500': 113,
              '1501': 105,
              '1502': 108,
              '1503': 110,
              '1504': 105,
              '1505': 122,
              '1506': 64,
              '1507': 121,
              '1508': 97,
              '1509': 104,
              '1510': 111,
              '1511': 111,
              '1512': 46,
              '1513': 99,
              '1514': 111,
              '1515': 109,
              '1516': 62,
              '1517': 34,
              '1518': 44,
              '1519': 10,
              '1520': 32,
              '1521': 32,
              '1522': 34,
              '1523': 108,
              '1524': 105,
              '1525': 99,
              '1526': 101,
              '1527': 110,
              '1528': 115,
              '1529': 101,
              '1530': 34,
              '1531': 58,
              '1532': 32,
              '1533': 34,
              '1534': 34,
              '1535': 44,
              '1536': 10,
              '1537': 32,
              '1538': 32,
              '1539': 34,
              '1540': 102,
              '1541': 105,
              '1542': 108,
              '1543': 101,
              '1544': 115,
              '1545': 34,
              '1546': 58,
              '1547': 32,
              '1548': 91,
              '1549': 10,
              '1550': 32,
              '1551': 32,
              '1552': 32,
              '1553': 32,
              '1554': 34,
              '1555': 82,
              '1556': 69,
              '1557': 65,
              '1558': 68,
              '1559': 77,
              '1560': 69,
              '1561': 46,
              '1562': 109,
              '1563': 100,
              '1564': 34,
              '1565': 44,
              '1566': 10,
              '1567': 32,
              '1568': 32,
              '1569': 32,
              '1570': 32,
              '1571': 34,
              '1572': 100,
              '1573': 105,
              '1574': 115,
              '1575': 116,
              '1576': 34,
              '1577': 44,
              '1578': 10,
              '1579': 32,
              '1580': 32,
              '1581': 32,
              '1582': 32,
              '1583': 34,
              '1584': 115,
              '1585': 114,
              '1586': 99,
              '1587': 34,
              '1588': 44,
              '1589': 10,
              '1590': 32,
              '1591': 32,
              '1592': 32,
              '1593': 32,
              '1594': 34,
              '1595': 33,
              '1596': 42,
              '1597': 47,
              '1598': 95,
              '1599': 95,
              '1600': 116,
              '1601': 101,
              '1602': 115,
              '1603': 116,
              '1604': 115,
              '1605': 95,
              '1606': 95,
              '1607': 34,
              '1608': 10,
              '1609': 32,
              '1610': 32,
              '1611': 93,
              '1612': 44,
              '1613': 10,
              '1614': 32,
              '1615': 32,
              '1616': 34,
              '1617': 100,
              '1618': 101,
              '1619': 112,
              '1620': 101,
              '1621': 110,
              '1622': 100,
              '1623': 101,
              '1624': 110,
              '1625': 99,
              '1626': 105,
              '1627': 101,
              '1628': 115,
              '1629': 34,
              '1630': 58,
              '1631': 32,
              '1632': 123,
              '1633': 10,
              '1634': 32,
              '1635': 32,
              '1636': 32,
              '1637': 32,
              '1638': 34,
              '1639': 64,
              '1640': 108,
              '1641': 111,
              '1642': 111,
              '1643': 112,
              '1644': 98,
              '1645': 97,
              '1646': 99,
              '1647': 107,
              '1648': 47,
              '1649': 98,
              '1650': 111,
              '1651': 111,
              '1652': 116,
              '1653': 34,
              '1654': 58,
              '1655': 32,
              '1656': 34,
              '1657': 94,
              '1658': 53,
              '1659': 46,
              '1660': 48,
              '1661': 46,
              '1662': 51,
              '1663': 34,
              '1664': 44,
              '1665': 10,
              '1666': 32,
              '1667': 32,
              '1668': 32,
              '1669': 32,
              '1670': 34,
              '1671': 64,
              '1672': 108,
              '1673': 111,
              '1674': 111,
              '1675': 112,
              '1676': 98,
              '1677': 97,
              '1678': 99,
              '1679': 107,
              '1680': 47,
              '1681': 99,
              '1682': 111,
              '1683': 114,
              '1684': 101,
              '1685': 34,
              '1686': 58,
              '1687': 32,
              '1688': 34,
              '1689': 94,
              '1690': 52,
              '1691': 46,
              '1692': 48,
              '1693': 46,
              '1694': 51,
              '1695': 34,
              '1696': 44,
              '1697': 10,
              '1698': 32,
              '1699': 32,
              '1700': 32,
              '1701': 32,
              '1702': 34,
              '1703': 64,
              '1704': 108,
              '1705': 111,
              '1706': 111,
              '1707': 112,
              '1708': 98,
              '1709': 97,
              '1710': 99,
              '1711': 107,
              '1712': 47,
              '1713': 114,
              '1714': 101,
              '1715': 112,
              '1716': 111,
              '1717': 115,
              '1718': 105,
              '1719': 116,
              '1720': 111,
              '1721': 114,
              '1722': 121,
              '1723': 34,
              '1724': 58,
              '1725': 32,
              '1726': 34,
              '1727': 94,
              '1728': 53,
              '1729': 46,
              '1730': 48,
              '1731': 46,
              '1732': 51,
              '1733': 34,
              '1734': 44,
              '1735': 10,
              '1736': 32,
              '1737': 32,
              '1738': 32,
              '1739': 32,
              '1740': 34,
              '1741': 64,
              '1742': 108,
              '1743': 111,
              '1744': 111,
              '1745': 112,
              '1746': 98,
              '1747': 97,
              '1748': 99,
              '1749': 107,
              '1750': 47,
              '1751': 114,
              '1752': 101,
              '1753': 115,
              '1754': 116,
              '1755': 34,
              '1756': 58,
              '1757': 32,
              '1758': 34,
              '1759': 94,
              '1760': 49,
              '1761': 50,
              '1762': 46,
              '1763': 48,
              '1764': 46,
              '1765': 51,
              '1766': 34,
              '1767': 44,
              '1768': 10,
              '1769': 32,
              '1770': 32,
              '1771': 32,
              '1772': 32,
              '1773': 34,
              '1774': 64,
              '1775': 108,
              '1776': 111,
              '1777': 111,
              '1778': 112,
              '1779': 98,
              '1780': 97,
              '1781': 99,
              '1782': 107,
              '1783': 47,
              '1784': 114,
              '1785': 101,
              '1786': 115,
              '1787': 116,
              '1788': 45,
              '1789': 101,
              '1790': 120,
              '1791': 112,
              '1792': 108,
              '1793': 111,
              '1794': 114,
              '1795': 101,
              '1796': 114,
              '1797': 34,
              '1798': 58,
              '1799': 32,
              '1800': 34,
              '1801': 94,
              '1802': 53,
              '1803': 46,
              '1804': 48,
              '1805': 46,
              '1806': 51,
              '1807': 34,
              '1808': 44,
              '1809': 10,
              '1810': 32,
              '1811': 32,
              '1812': 32,
              '1813': 32,
              '1814': 34,
              '1815': 64,
              '1816': 108,
              '1817': 111,
              '1818': 111,
              '1819': 112,
              '1820': 98,
              '1821': 97,
              '1822': 99,
              '1823': 107,
              '1824': 47,
              '1825': 115,
              '1826': 101,
              '1827': 114,
              '1828': 118,
              '1829': 105,
              '1830': 99,
              '1831': 101,
              '1832': 45,
              '1833': 112,
              '1834': 114,
              '1835': 111,
              '1836': 120,
              '1837': 121,
              '1838': 34,
              '1839': 58,
              '1840': 32,
              '1841': 34,
              '1842': 94,
              '1843': 53,
              '1844': 46,
              '1845': 48,
              '1846': 46,
              '1847': 51,
              '1848': 34,
              '1849': 44,
              '1850': 10,
              '1851': 32,
              '1852': 32,
              '1853': 32,
              '1854': 32,
              '1855': 34,
              '1856': 108,
              '1857': 111,
              '1858': 111,
              '1859': 112,
              '1860': 98,
              '1861': 97,
              '1862': 99,
              '1863': 107,
              '1864': 45,
              '1865': 99,
              '1866': 111,
              '1867': 110,
              '1868': 110,
              '1869': 101,
              '1870': 99,
              '1871': 116,
              '1872': 111,
              '1873': 114,
              '1874': 45,
              '1875': 109,
              '1876': 121,
              '1877': 115,
              '1878': 113,
              '1879': 108,
              '1880': 34,
              '1881': 58,
              '1882': 32,
              '1883': 34,
              '1884': 94,
              '1885': 53,
              '1886': 46,
              '1887': 51,
              '1888': 46,
              '1889': 48,
              '1890': 34,
              '1891': 44,
              '1892': 10,
              '1893': 32,
              '1894': 32,
              '1895': 32,
              '1896': 32,
              '1897': 34,
              '1898': 116,
              '1899': 115,
              '1900': 108,
              '1901': 105,
              '1902': 98,
              '1903': 34,
              '1904': 58,
              '1905': 32,
              '1906': 34,
              '1907': 94,
              '1908': 50,
              '1909': 46,
              '1910': 48,
              '1911': 46,
              '1912': 48,
              '1913': 34,
              '1914': 10,
              '1915': 32,
              '1916': 32,
              '1917': 125,
              '1918': 44,
              '1919': 10,
              '1920': 32,
              '1921': 32,
              '1922': 34,
              '1923': 100,
              '1924': 101,
              '1925': 118,
              '1926': 68,
              '1927': 101,
              '1928': 112,
              '1929': 101,
              '1930': 110,
              '1931': 100,
              '1932': 101,
              '1933': 110,
              '1934': 99,
              '1935': 105,
              '1936': 101,
              '1937': 115,
              '1938': 34,
              '1939': 58,
              '1940': 32,
              '1941': 123,
              '1942': 10,
              '1943': 32,
              '1944': 32,
              '1945': 32,
              '1946': 32,
              '1947': 34,
              '1948': 64,
              '1949': 108,
              '1950': 111,
              '1951': 111,
              '1952': 112,
              '1953': 98,
              '1954': 97,
              '1955': 99,
              '1956': 107,
              '1957': 47,
              '1958': 98,
              '1959': 117,
              '1960': 105,
              '1961': 108,
              '1962': 100,
              '1963': 34,
              '1964': 58,
              '1965': 32,
              '1966': 34,
              '1967': 94,
              '1968': 57,
              '1969': 46,
              '1970': 48,
              '1971': 46,
              '1972': 51,
              '1973': 34,
              '1974': 44,
              '1975': 10,
              '1976': 32,
              '1977': 32,
              '1978': 32,
              '1979': 32,
              '1980': 34,
              '1981': 64,
              '1982': 108,
              '1983': 111,
              '1984': 111,
              '1985': 112,
              '1986': 98,
              '1987': 97,
              '1988': 99,
              '1989': 107,
              '1990': 47,
              '1991': 101,
              '1992': 115,
              '1993': 108,
              '1994': 105,
              '1995': 110,
              '1996': 116,
              '1997': 45,
              '1998': 99,
              '1999': 111,
              '2000': 110,
              '2001': 102,
              '2002': 105,
              '2003': 103,
              '2004': 34,
              '2005': 58,
              '2006': 32,
              '2007': 34,
              '2008': 94,
              '2009': 49,
              '2010': 51,
              '2011': 46,
              '2012': 48,
              '2013': 46,
              '2014': 51,
              '2015': 34,
              '2016': 44,
              '2017': 10,
              '2018': 32,
              '2019': 32,
              '2020': 32,
              '2021': 32,
              '2022': 34,
              '2023': 64,
              '2024': 108,
              '2025': 111,
              '2026': 111,
              '2027': 112,
              '2028': 98,
              '2029': 97,
              '2030': 99,
              '2031': 107,
              '2032': 47,
              '2033': 116,
              '2034': 101,
              '2035': 115,
              '2036': 116,
              '2037': 108,
              '2038': 97,
              '2039': 98,
              '2040': 34,
              '2041': 58,
              '2042': 32,
              '2043': 34,
              '2044': 94,
              '2045': 53,
              '2046': 46,
              '2047': 48,
              '2048': 46,
              '2049': 51,
              '2050': 34,
              '2051': 44,
              '2052': 10,
              '2053': 32,
              '2054': 32,
              '2055': 32,
              '2056': 32,
              '2057': 34,
              '2058': 64,
              '2059': 116,
              '2060': 121,
              '2061': 112,
              '2062': 101,
              '2063': 115,
              '2064': 47,
              '2065': 110,
              '2066': 111,
              '2067': 100,
              '2068': 101,
              '2069': 34,
              '2070': 58,
              '2071': 32,
              '2072': 34,
              '2073': 94,
              '2074': 49,
              '2075': 52,
              '2076': 46,
              '2077': 49,
              '2078': 56,
              '2079': 46,
              '2080': 50,
              '2081': 54,
              '2082': 34,
              '2083': 44,
              '2084': 10,
              '2085': 32,
              '2086': 32,
              '2087': 32,
              '2088': 32,
              '2089': 34,
              '2090': 101,
              '2091': 115,
              '2092': 108,
              '2093': 105,
              '2094': 110,
              '2095': 116,
              '2096': 34,
              '2097': 58,
              '2098': 32,
              '2099': 34,
              '2100': 94,
              '2101': 56,
              '2102': 46,
              '2103': 50,
              '2104': 50,
              '2105': 46,
              '2106': 48,
              '2107': 34,
              '2108': 44,
              '2109': 10,
              '2110': 32,
              '2111': 32,
              '2112': 32,
              '2113': 32,
              '2114': 34,
              '2115': 115,
              '2116': 111,
              '2117': 117,
              '2118': 114,
              '2119': 99,
              '2120': 101,
              '2121': 45,
              '2122': 109,
              '2123': 97,
              '2124': 112,
              '2125': 45,
              '2126': 115,
              '2127': 117,
              '2128': 112,
              '2129': 112,
              '2130': 111,
              '2131': 114,
              '2132': 116,
              '2133': 34,
              '2134': 58,
              '2135': 32,
              '2136': 34,
              '2137': 94,
              '2138': 48,
              '2139': 46,
              '2140': 53,
              '2141': 46,
              '2142': 50,
              '2143': 49,
              '2144': 34,
              '2145': 44,
              '2146': 10,
              '2147': 32,
              '2148': 32,
              '2149': 32,
              '2150': 32,
              '2151': 34,
              '2152': 116,
              '2153': 121,
              '2154': 112,
              '2155': 101,
              '2156': 115,
              '2157': 99,
              '2158': 114,
              '2159': 105,
              '2160': 112,
              '2161': 116,
              '2162': 34,
              '2163': 58,
              '2164': 32,
              '2165': 34,
              '2166': 126,
              '2167': 52,
              '2168': 46,
              '2169': 55,
              '2170': 46,
              '2171': 52,
              '2172': 34,
              '2173': 10,
              '2174': 32,
              '2175': 32,
              '2176': 125,
              '2177': 10,
              '2178': 125,
              '2179': 10
            },
            history: [
              '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json'
            ],
            _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
            _isVinyl: true,
            _symlink: null
          },
          '/home/aaqilniz/.yo-rc-global.json': {
            stat: null,
            _contents: null,
            history: [
              '/home/aaqilniz/.yo-rc-global.json'
            ],
            _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
            _isVinyl: true,
            _symlink: null
          },
          '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json': {
            stat: {
              dev: 2055,
              mode: 33279,
              nlink: 1,
              uid: 1000,
              gid: 1000,
              rdev: 0,
              blksize: 4096,
              ino: 2241690,
              size: 82,
              blocks: 1,
              atimeMs: 1664468198390.669,
              mtimeMs: 1664467890046.1177,
              ctimeMs: 1664467890046.1177,
              birthtimeMs: 0,
              atime: new Date('2022-09-29T16:16:38.391Z'),
              mtime: new Date('2022-09-29T16:11:30.046Z'),
              ctime: new Date('2022-09-29T16:11:30.046Z'),
              birthtime: new Date('1970-01-01T00:00:00.000Z')
            },
            _contents: {
              '0': 123,
              '1': 10,
              '2': 32,
              '3': 32,
              '4': 34,
              '5': 64,
              '6': 108,
              '7': 111,
              '8': 111,
              '9': 112,
              '10': 98,
              '11': 97,
              '12': 99,
              '13': 107,
              '14': 47,
              '15': 99,
              '16': 108,
              '17': 105,
              '18': 34,
              '19': 58,
              '20': 32,
              '21': 123,
              '22': 10,
              '23': 32,
              '24': 32,
              '25': 32,
              '26': 32,
              '27': 34,
              '28': 112,
              '29': 97,
              '30': 99,
              '31': 107,
              '32': 97,
              '33': 103,
              '34': 101,
              '35': 77,
              '36': 97,
              '37': 110,
              '38': 97,
              '39': 103,
              '40': 101,
              '41': 114,
              '42': 34,
              '43': 58,
              '44': 32,
              '45': 34,
              '46': 121,
              '47': 97,
              '48': 114,
              '49': 110,
              '50': 34,
              '51': 44,
              '52': 10,
              '53': 32,
              '54': 32,
              '55': 32,
              '56': 32,
              '57': 34,
              '58': 118,
              '59': 101,
              '60': 114,
              '61': 115,
              '62': 105,
              '63': 111,
              '64': 110,
              '65': 34,
              '66': 58,
              '67': 32,
              '68': 34,
              '69': 52,
              '70': 46,
              '71': 49,
              '72': 46,
              '73': 51,
              '74': 34,
              '75': 10,
              '76': 32,
              '77': 32,
              '78': 125,
              '79': 10,
              '80': 125,
              '81': 10
            },
            history: [
              '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json'
            ],
            _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
            _isVinyl: true,
            _symlink: null
          }
        },
        Symbol(kCapture): false
      }
    },
    lookups: [
      '.',
      'generators',
      'lib/generators',
      'dist/generators'
    ],
    aliases: [
      {
        match: /^([^:]+)$/,
        value: '$1:app'
      }
    ],
    sharedOptions: {
      sharedData: {},
      forwardErrorToEnvironment: false,
      skipLocalCache: true
    },
    repository: {
      log: function log(message, ctx) {
    message = message || '';

    if (typeof ctx === 'object' && !Array.isArray(ctx)) {
      customConsole.error(formatter(message, ctx));
    } else {
      customConsole.error.apply(customConsole, arguments);
    }

    return log;
  },
      tracker: {
        _events: {
          error: function () {}
        },
        _eventsCount: 1,
        _maxListeners: undefined,
        useColor: function () {
  return colorEnabled != null ? colorEnabled : stream.isTTY
},
        enableColor: function () {
  colorEnabled = true
  this.gauge.setTheme({hasColor: colorEnabled, hasUnicode: unicodeEnabled})
},
        disableColor: function () {
  colorEnabled = false
  this.gauge.setTheme({hasColor: colorEnabled, hasUnicode: unicodeEnabled})
},
        level: 'error',
        gauge: {
          _status: {
            spun: 0,
            section: '',
            subsection: ''
          },
          _paused: false,
          _disabled: true,
          _showing: false,
          _onScreen: false,
          _needsRedraw: false,
          _hideCursor: true,
          _fixedFramerate: true,
          _lastUpdateAt: null,
          _updateInterval: 50,
          _themes: function (opts) {
    return themeset.getDefault(opts)
  },
          _theme: {
            hasColor: true
          },
          _writeTo: {
            connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _readableState: {
              objectMode: false,
              highWaterMark: 16384,
              buffer: {
                head: null,
                tail: null,
                length: 0
              },
              length: 0,
              pipes: [],
              flowing: null,
              ended: false,
              endEmitted: false,
              reading: false,
              constructed: true,
              sync: true,
              needReadable: false,
              emittedReadable: false,
              readableListening: false,
              resumeScheduled: false,
              errorEmitted: false,
              emitClose: false,
              autoDestroy: true,
              destroyed: false,
              errored: null,
              closed: false,
              closeEmitted: false,
              defaultEncoding: 'utf8',
              awaitDrainWriters: null,
              multiAwaitDrain: false,
              readingMore: false,
              decoder: null,
              encoding: null,
              readable: false,
              Symbol(kPaused): null
            },
            _events: {
              end: function onReadableStreamEnd() {
  if (!this.allowHalfOpen) {
    this.write = writeAfterFIN;
  }
}
            },
            _eventsCount: 1,
            _maxListeners: undefined,
            _writableState: {
              objectMode: false,
              highWaterMark: 16384,
              finalCalled: false,
              needDrain: false,
              ending: false,
              ended: false,
              finished: false,
              destroyed: false,
              decodeStrings: false,
              defaultEncoding: 'utf8',
              length: 0,
              writing: false,
              corked: 0,
              sync: true,
              bufferProcessing: false,
              onwrite: function () { [native code] },
              writecb: null,
              writelen: 0,
              afterWriteTickInfo: null,
              buffered: [],
              bufferedIndex: 0,
              allBuffers: true,
              allNoop: true,
              pendingcb: 0,
              constructed: true,
              prefinished: false,
              errorEmitted: false,
              emitClose: false,
              autoDestroy: true,
              errored: null,
              closed: false,
              closeEmitted: false,
              Symbol(kOnFinished): []
            },
            allowHalfOpen: false,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server: null,
            _server: null,
            columns: 150,
            rows: 36,
            _type: 'tty',
            fd: 2,
            _isStdio: true,
            destroySoon: function destroy(err, cb) {
  const r = this._readableState;
  const w = this._writableState;
  // With duplex streams we use the writable side for state.
  const s = w || r;

  if ((w && w.destroyed) || (r && r.destroyed)) {
    if (typeof cb === 'function') {
      cb();
    }

    return this;
  }


  // We set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks
  checkError(err, w, r);

  if (w) {
    w.destroyed = true;
  }
  if (r) {
    r.destroyed = true;
  }

  // If still constructing then defer calling _destroy.
  if (!s.constructed) {
    this.once(kDestroy, function(er) {
      _destroy(this, aggregateTwoErrors(er, err), cb);
    });
  } else {
    _destroy(this, err, cb);
  }

  return this;
},
            _destroy: function dummyDestroy(err, cb) {
  cb(err);

  // We need to emit 'close' anyway so that the closing
  // of the stream is observable. We just make sure we
  // are not going to do it twice.
  // The 'close' event is needed so that finished and
  // pipeline work correctly.
  if (!this._writableState.emitClose) {
    process.nextTick(() => {
      this.emit('close');
    });
  }
},
            Symbol(async_id_symbol): 2,
            Symbol(kHandle): {
              Symbol(owner_symbol): "[Circular]"
            },
            Symbol(kSetNoDelay): false,
            Symbol(lastWriteQueueSize): 0,
            Symbol(timeout): null,
            Symbol(kBuffer): null,
            Symbol(kBufferCb): null,
            Symbol(kBufferGen): null,
            Symbol(kCapture): false,
            Symbol(kBytesRead): 0,
            Symbol(kBytesWritten): 0
          },
          _tty: {
            connecting: false,
            _hadError: false,
            _parent: null,
            _host: null,
            _readableState: {
              objectMode: false,
              highWaterMark: 16384,
              buffer: {
                head: null,
                tail: null,
                length: 0
              },
              length: 0,
              pipes: [],
              flowing: null,
              ended: false,
              endEmitted: false,
              reading: false,
              constructed: true,
              sync: true,
              needReadable: false,
              emittedReadable: false,
              readableListening: false,
              resumeScheduled: false,
              errorEmitted: false,
              emitClose: false,
              autoDestroy: true,
              destroyed: false,
              errored: null,
              closed: false,
              closeEmitted: false,
              defaultEncoding: 'utf8',
              awaitDrainWriters: null,
              multiAwaitDrain: false,
              readingMore: false,
              decoder: null,
              encoding: null,
              readable: false,
              Symbol(kPaused): null
            },
            _events: {
              end: function onReadableStreamEnd() {
  if (!this.allowHalfOpen) {
    this.write = writeAfterFIN;
  }
}
            },
            _eventsCount: 1,
            _maxListeners: undefined,
            _writableState: {
              objectMode: false,
              highWaterMark: 16384,
              finalCalled: false,
              needDrain: false,
              ending: false,
              ended: false,
              finished: false,
              destroyed: false,
              decodeStrings: false,
              defaultEncoding: 'utf8',
              length: 0,
              writing: false,
              corked: 0,
              sync: true,
              bufferProcessing: false,
              onwrite: function () { [native code] },
              writecb: null,
              writelen: 0,
              afterWriteTickInfo: null,
              buffered: [],
              bufferedIndex: 0,
              allBuffers: true,
              allNoop: true,
              pendingcb: 0,
              constructed: true,
              prefinished: false,
              errorEmitted: false,
              emitClose: false,
              autoDestroy: true,
              errored: null,
              closed: false,
              closeEmitted: false,
              Symbol(kOnFinished): []
            },
            allowHalfOpen: false,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server: null,
            _server: null,
            columns: 150,
            rows: 36,
            _type: 'tty',
            fd: 1,
            _isStdio: true,
            destroySoon: function destroy(err, cb) {
  const r = this._readableState;
  const w = this._writableState;
  // With duplex streams we use the writable side for state.
  const s = w || r;

  if ((w && w.destroyed) || (r && r.destroyed)) {
    if (typeof cb === 'function') {
      cb();
    }

    return this;
  }


  // We set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks
  checkError(err, w, r);

  if (w) {
    w.destroyed = true;
  }
  if (r) {
    r.destroyed = true;
  }

  // If still constructing then defer calling _destroy.
  if (!s.constructed) {
    this.once(kDestroy, function(er) {
      _destroy(this, aggregateTwoErrors(er, err), cb);
    });
  } else {
    _destroy(this, err, cb);
  }

  return this;
},
            _destroy: function dummyDestroy(err, cb) {
  cb(err);

  // We need to emit 'close' anyway so that the closing
  // of the stream is observable. We just make sure we
  // are not going to do it twice.
  // The 'close' event is needed so that finished and
  // pipeline work correctly.
  if (!this._writableState.emitClose) {
    process.nextTick(() => {
      this.emit('close');
    });
  }
},
            Symbol(async_id_symbol): 4,
            Symbol(kHandle): {
              Symbol(owner_symbol): "[Circular]"
            },
            Symbol(kSetNoDelay): false,
            Symbol(lastWriteQueueSize): 0,
            Symbol(timeout): null,
            Symbol(kBuffer): null,
            Symbol(kBufferCb): null,
            Symbol(kBufferGen): null,
            Symbol(kCapture): false,
            Symbol(kBytesRead): 0,
            Symbol(kBytesWritten): 0
          },
          _gauge: {
            showing: false,
            theme: {
              activityIndicator: function (values, theme, width) {
    if (values.spun == null) return
    return spin(theme, values.spun)
  },
              progressbar: function (values, theme, width) {
    if (values.completed == null) return
    return progressBar(theme, width, values.completed)
  },
              preProgressbar: '⸨',
              postProgressbar: '⸩',
              progressbarTheme: {
                preComplete: '[107;97m',
                complete: '#',
                postComplete: '[0m',
                preRemaining: '[100;90m',
                remaining: '⠂',
                postRemaining: '[0m'
              },
              activityIndicatorTheme: '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏',
              preSubsection: '>'
            },
            width: 149,
            template: [
              {
                type: 'progressbar',
                length: 20
              },
              {
                type: 'activityIndicator',
                kerning: 1,
                length: 1
              },
              {
                type: 'section',
                default: ''
              },
              ':',
              {
                type: 'logline',
                kerning: 1,
                default: ''
              }
            ]
          },
          _$$doRedraw: function () {
    return method.call(obj)
  },
          _$$handleSizeChange: function () {
    return method.call(obj)
  },
          _cleanupOnExit: true,
          _removeOnExit: null
        },
        tracker: {
          _events: {},
          _eventsCount: 0,
          _maxListeners: undefined,
          id: 1,
          name: undefined,
          parentGroup: null,
          trackers: [],
          completion: {},
          weight: {},
          totalWeight: 0,
          finished: false,
          bubbleChange: function (name, completed, tracker) {
    trackerGroup.completion[tracker.id] = completed
    if (trackerGroup.finished) {
      return
    }
    trackerGroup.emit('change', name || trackerGroup.name, trackerGroup.completed(), trackerGroup)
  },
          Symbol(kCapture): false
        },
        progressEnabled: false,
        enableUnicode: function () {
  unicodeEnabled = true
  this.gauge.setTheme({hasColor: this.useColor(), hasUnicode: unicodeEnabled})
},
        disableUnicode: function () {
  unicodeEnabled = false
  this.gauge.setTheme({hasColor: this.useColor(), hasUnicode: unicodeEnabled})
},
        setGaugeThemeset: function (themes) {
  this.gauge.setThemeset(themes)
},
        setGaugeTemplate: function (template) {
  this.gauge.setTemplate(template)
},
        enableProgress: function () {
  if (this.progressEnabled) {
    return
  }

  this.progressEnabled = true
  this.tracker.on('change', this.showProgress)
  if (this._paused) {
    return
  }

  this.gauge.enable()
},
        disableProgress: function () {
  if (!this.progressEnabled) {
    return
  }
  this.progressEnabled = false
  this.tracker.removeListener('change', this.showProgress)
  this.gauge.disable()
},
        newGroup: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
        newItem: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
        newStream: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
        clearProgress: function (cb) {
  if (!this.progressEnabled) {
    return cb && process.nextTick(cb)
  }

  this.gauge.hide(cb)
},
        showProgress: function () { [native code] },
        pause: function () {
  this._paused = true
  if (this.progressEnabled) {
    this.gauge.disable()
  }
},
        resume: function () {
  if (!this._paused) {
    return
  }

  this._paused = false

  var b = this._buffer
  this._buffer = []
  b.forEach(function (m) {
    this.emitLog(m)
  }, this)
  if (this.progressEnabled) {
    this.gauge.enable()
  }
},
        _buffer: [],
        record: [],
        maxRecordSize: 10000,
        log: function () { [native code] },
        emitLog: function (m) {
  if (this._paused) {
    this._buffer.push(m)
    return
  }
  if (this.progressEnabled) {
    this.gauge.pulse(m.prefix)
  }

  var l = this.levels[m.level]
  if (l === undefined) {
    return
  }

  if (l < this.levels[this.level]) {
    return
  }

  if (l > 0 && !isFinite(l)) {
    return
  }

  // If 'disp' is null or undefined, use the lvl as a default
  // Allows: '', 0 as valid disp
  var disp = log.disp[m.level] != null ? log.disp[m.level] : m.level
  this.clearProgress()
  m.message.split(/\r?\n/).forEach(function (line) {
    if (this.heading) {
      this.write(this.heading, this.headingStyle)
      this.write(' ')
    }
    this.write(disp, log.style[m.level])
    var p = m.prefix || ''
    if (p) {
      this.write(' ')
    }

    this.write(p, this.prefixStyle)
    this.write(' ' + line + '\n')
  }, this)
  this.showProgress()
},
        _format: function (msg, style) {
  if (!stream) {
    return
  }

  var output = ''
  if (this.useColor()) {
    style = style || {}
    var settings = []
    if (style.fg) {
      settings.push(style.fg)
    }

    if (style.bg) {
      settings.push('bg' + style.bg[0].toUpperCase() + style.bg.slice(1))
    }

    if (style.bold) {
      settings.push('bold')
    }

    if (style.underline) {
      settings.push('underline')
    }

    if (style.inverse) {
      settings.push('inverse')
    }

    if (settings.length) {
      output += consoleControl.color(settings)
    }

    if (style.beep) {
      output += consoleControl.beep()
    }
  }
  output += msg
  if (this.useColor()) {
    output += consoleControl.color('reset')
  }

  return output
},
        write: function (msg, style) {
  if (!stream) {
    return
  }

  stream.write(this._format(msg, style))
},
        addLevel: function (lvl, n, style, disp) {
  // If 'disp' is null or undefined, use the lvl as a default
  if (disp == null) {
    disp = lvl
  }

  this.levels[lvl] = n
  this.style[lvl] = style
  if (!this[lvl]) {
    this[lvl] = function () {
      var a = new Array(arguments.length + 1)
      a[0] = lvl
      for (var i = 0; i < arguments.length; i++) {
        a[i + 1] = arguments[i]
      }

      return this.log.apply(this, a)
    }.bind(this)
  }
  this.disp[lvl] = disp
},
        prefixStyle: {
          fg: 'magenta'
        },
        headingStyle: {
          fg: 'white',
          bg: 'black'
        },
        style: {
          silly: {
            inverse: true
          },
          verbose: {
            fg: 'blue',
            bg: 'black'
          },
          info: {
            fg: 'green'
          },
          timing: {
            fg: 'green',
            bg: 'black'
          },
          http: {
            fg: 'green',
            bg: 'black'
          },
          notice: {
            fg: 'blue',
            bg: 'black'
          },
          warn: {
            fg: 'black',
            bg: 'yellow'
          },
          error: {
            fg: 'red',
            bg: 'black'
          },
          silent: undefined
        },
        levels: {
          silly: -Infinity,
          verbose: 1000,
          info: 2000,
          timing: 2500,
          http: 3000,
          notice: 3500,
          warn: 4000,
          error: 5000,
          silent: Infinity
        },
        disp: {
          silly: 'sill',
          verbose: 'verb',
          info: 'info',
          timing: 'timing',
          http: 'http',
          notice: 'notice',
          warn: 'WARN',
          error: 'ERR!',
          silent: 'silent'
        },
        silly: function () { [native code] },
        verbose: function () { [native code] },
        info: function () { [native code] },
        timing: function () { [native code] },
        http: function () { [native code] },
        notice: function () { [native code] },
        warn: function () { [native code] },
        error: function () { [native code] },
        silent: function () { [native code] },
        Symbol(kCapture): false
      },
      _repositoryPath: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-repository',
      _nodeModulesPath: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-repository/node_modules',
      arboristRegister: undefined
    },
    _generatorsForPath: {
      '/media/aaqilniz/data/working-space/freelancing/patrick/test-app': {
        'loopback4:datasource#72dab12080232604a1a058fdd6f4341187a99d82': {
          _events: {},
          _eventsCount: 0,
          _maxListeners: undefined,
          options: {
            sharedData: {},
            forwardErrorToEnvironment: false,
            skipLocalCache: true,
            _: [],
            c: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
            y: true,
            initialGenerator: true,
            env: "[Circular]",
            resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/index.js',
            namespace: 'loopback4:datasource',
            'skip-cache': false,
            'skip-install': false,
            'force-install': false,
            'ask-answered': false,
            config: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
            yes: true,
            name: 'localmodels',
            connector: 'mysql',
            url: '',
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'asdf',
            database: 'quiz'
          },
          _initOptions: {
            sharedData: {},
            forwardErrorToEnvironment: false,
            skipLocalCache: true,
            _: [],
            c: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
            y: true,
            initialGenerator: true,
            env: "[Circular]",
            resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/index.js',
            namespace: 'loopback4:datasource'
          },
          _args: [],
          _options: {
            help: {
              name: 'help',
              type: function Boolean() { [native code] },
              alias: 'h',
              description: 'Print the generator\'s options and usage'
            },
            'skip-cache': {
              name: 'skip-cache',
              type: function Boolean() { [native code] },
              description: 'Do not remember prompt answers',
              default: false
            },
            'skip-install': {
              name: 'skip-install',
              type: function Boolean() { [native code] },
              description: 'Do not automatically install dependencies',
              default: false
            },
            'force-install': {
              name: 'force-install',
              type: function Boolean() { [native code] },
              description: 'Fail on install dependencies error',
              default: false
            },
            'ask-answered': {
              type: function Boolean() { [native code] },
              description: 'Show prompts for already configured options',
              default: false,
              name: 'ask-answered',
              hide: false
            },
            config: {
              type: function String() { [native code] },
              alias: 'c',
              description: 'JSON file name or value to configure options',
              name: 'config',
              hide: false
            },
            yes: {
              type: function Boolean() { [native code] },
              alias: 'y',
              description: 'Skip all confirmation prompts with default or provided value',
              name: 'yes',
              hide: false
            },
            format: {
              type: function Boolean() { [native code] },
              description: 'Format generated code using npm run lint:fix',
              name: 'format',
              hide: false
            },
            packageManager: {
              type: function String() { [native code] },
              description: 'Change the default package manager',
              alias: 'pm',
              name: 'packageManager',
              hide: false
            }
          },
          _arguments: [
            {
              type: function String() { [native code] },
              required: false,
              description: 'Name for the datasource',
              name: 'name'
            }
          ],
          _prompts: [],
          _composedWith: [],
          _namespace: 'loopback4:datasource',
          _namespaceId: undefined,
          yoGeneratorVersion: '5.7.0',
          features: {
            unique: undefined
          },
          args: [],
          arguments: [],
          env: "[Circular]",
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/index.js',
          description: '',
          contextRoot: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
          _destinationRoot: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
          _config: {
            path: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json',
            name: '@loopback/cli',
            fs: {
              store: {
                _events: {
                  change: [
                    (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    },
                    (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    }
                  ]
                },
                _eventsCount: 1,
                _maxListeners: 0,
                store: {
                  '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json': {
                    stat: null,
                    _contents: null,
                    history: [
                      '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json'
                    ],
                    _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                    _isVinyl: true,
                    _symlink: null
                  },
                  '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json': {
                    stat: {
                      dev: 2055,
                      mode: 33279,
                      nlink: 1,
                      uid: 1000,
                      gid: 1000,
                      rdev: 0,
                      blksize: 4096,
                      ino: 2241697,
                      size: 2180,
                      blocks: 8,
                      atimeMs: 1664473760957.5466,
                      mtimeMs: 1664473760805.593,
                      ctimeMs: 1664473760805.593,
                      birthtimeMs: 0,
                      atime: new Date('2022-09-29T17:49:20.958Z'),
                      mtime: new Date('2022-09-29T17:49:20.806Z'),
                      ctime: new Date('2022-09-29T17:49:20.806Z'),
                      birthtime: new Date('1970-01-01T00:00:00.000Z')
                    },
                    _contents: {
                      '0': 123,
                      '1': 10,
                      '2': 32,
                      '3': 32,
                      '4': 34,
                      '5': 110,
                      '6': 97,
                      '7': 109,
                      '8': 101,
                      '9': 34,
                      '10': 58,
                      '11': 32,
                      '12': 34,
                      '13': 116,
                      '14': 101,
                      '15': 115,
                      '16': 116,
                      '17': 45,
                      '18': 97,
                      '19': 112,
                      '20': 112,
                      '21': 34,
                      '22': 44,
                      '23': 10,
                      '24': 32,
                      '25': 32,
                      '26': 34,
                      '27': 118,
                      '28': 101,
                      '29': 114,
                      '30': 115,
                      '31': 105,
                      '32': 111,
                      '33': 110,
                      '34': 34,
                      '35': 58,
                      '36': 32,
                      '37': 34,
                      '38': 48,
                      '39': 46,
                      '40': 48,
                      '41': 46,
                      '42': 49,
                      '43': 34,
                      '44': 44,
                      '45': 10,
                      '46': 32,
                      '47': 32,
                      '48': 34,
                      '49': 100,
                      '50': 101,
                      '51': 115,
                      '52': 99,
                      '53': 114,
                      '54': 105,
                      '55': 112,
                      '56': 116,
                      '57': 105,
                      '58': 111,
                      '59': 110,
                      '60': 34,
                      '61': 58,
                      '62': 32,
                      '63': 34,
                      '64': 112,
                      '65': 97,
                      '66': 116,
                      '67': 114,
                      '68': 105,
                      '69': 99,
                      '70': 107,
                      '71': 34,
                      '72': 44,
                      '73': 10,
                      '74': 32,
                      '75': 32,
                      '76': 34,
                      '77': 107,
                      '78': 101,
                      '79': 121,
                      '80': 119,
                      '81': 111,
                      '82': 114,
                      '83': 100,
                      '84': 115,
                      '85': 34,
                      '86': 58,
                      '87': 32,
                      '88': 91,
                      '89': 10,
                      '90': 32,
                      '91': 32,
                      '92': 32,
                      '93': 32,
                      '94': 34,
                      '95': 108,
                      '96': 111,
                      '97': 111,
                      '98': 112,
                      '99': 98,
                      '100': 97,
                      '101': 99,
                      '102': 107,
                      '103': 45,
                      '104': 97,
                      '105': 112,
                      '106': 112,
                      '107': 108,
                      '108': 105,
                      '109': 99,
                      '110': 97,
                      '111': 116,
                      '112': 105,
                      '113': 111,
                      '114': 110,
                      '115': 34,
                      '116': 44,
                      '117': 10,
                      '118': 32,
                      '119': 32,
                      '120': 32,
                      '121': 32,
                      '122': 34,
                      '123': 108,
                      '124': 111,
                      '125': 111,
                      '126': 112,
                      '127': 98,
                      '128': 97,
                      '129': 99,
                      '130': 107,
                      '131': 34,
                      '132': 10,
                      '133': 32,
                      '134': 32,
                      '135': 93,
                      '136': 44,
                      '137': 10,
                      '138': 32,
                      '139': 32,
                      '140': 34,
                      '141': 109,
                      '142': 97,
                      '143': 105,
                      '144': 110,
                      '145': 34,
                      '146': 58,
                      '147': 32,
                      '148': 34,
                      '149': 100,
                      '150': 105,
                      '151': 115,
                      '152': 116,
                      '153': 47,
                      '154': 105,
                      '155': 110,
                      '156': 100,
                      '157': 101,
                      '158': 120,
                      '159': 46,
                      '160': 106,
                      '161': 115,
                      '162': 34,
                      '163': 44,
                      '164': 10,
                      '165': 32,
                      '166': 32,
                      '167': 34,
                      '168': 116,
                      '169': 121,
                      '170': 112,
                      '171': 101,
                      '172': 115,
                      '173': 34,
                      '174': 58,
                      '175': 32,
                      '176': 34,
                      '177': 100,
                      '178': 105,
                      '179': 115,
                      '180': 116,
                      '181': 47,
                      '182': 105,
                      '183': 110,
                      '184': 100,
                      '185': 101,
                      '186': 120,
                      '187': 46,
                      '188': 100,
                      '189': 46,
                      '190': 116,
                      '191': 115,
                      '192': 34,
                      '193': 44,
                      '194': 10,
                      '195': 32,
                      '196': 32,
                      '197': 34,
                      '198': 101,
                      '199': 110,
                      '200': 103,
                      '201': 105,
                      '202': 110,
                      '203': 101,
                      '204': 115,
                      '205': 34,
                      '206': 58,
                      '207': 32,
                      '208': 123,
                      '209': 10,
                      '210': 32,
                      '211': 32,
                      '212': 32,
                      '213': 32,
                      '214': 34,
                      '215': 110,
                      '216': 111,
                      '217': 100,
                      '218': 101,
                      '219': 34,
                      '220': 58,
                      '221': 32,
                      '222': 34,
                      '223': 49,
                      '224': 52,
                      '225': 32,
                      '226': 124,
                      '227': 124,
                      '228': 32,
                      '229': 49,
                      '230': 54,
                      '231': 32,
                      '232': 124,
                      '233': 124,
                      '234': 32,
                      '235': 49,
                      '236': 55,
                      '237': 32,
                      '238': 124,
                      '239': 124,
                      '240': 32,
                      '241': 49,
                      '242': 56,
                      '243': 34,
                      '244': 10,
                      '245': 32,
                      '246': 32,
                      '247': 125,
                      '248': 44,
                      '249': 10,
                      '250': 32,
                      '251': 32,
                      '252': 34,
                      '253': 115,
                      '254': 99,
                      '255': 114,
                      '256': 105,
                      '257': 112,
                      '258': 116,
                      '259': 115,
                      '260': 34,
                      '261': 58,
                      '262': 32,
                      '263': 123,
                      '264': 10,
                      '265': 32,
                      '266': 32,
                      '267': 32,
                      '268': 32,
                      '269': 34,
                      '270': 98,
                      '271': 117,
                      '272': 105,
                      '273': 108,
                      '274': 100,
                      '275': 34,
                      '276': 58,
                      '277': 32,
                      '278': 34,
                      '279': 108,
                      '280': 98,
                      '281': 45,
                      '282': 116,
                      '283': 115,
                      '284': 99,
                      '285': 34,
                      '286': 44,
                      '287': 10,
                      '288': 32,
                      '289': 32,
                      '290': 32,
                      '291': 32,
                      '292': 34,
                      '293': 98,
                      '294': 117,
                      '295': 105,
                      '296': 108,
                      '297': 100,
                      '298': 58,
                      '299': 119,
                      '300': 97,
                      '301': 116,
                      '302': 99,
                      '303': 104,
                      '304': 34,
                      '305': 58,
                      '306': 32,
                      '307': 34,
                      '308': 108,
                      '309': 98,
                      '310': 45,
                      '311': 116,
                      '312': 115,
                      '313': 99,
                      '314': 32,
                      '315': 45,
                      '316': 45,
                      '317': 119,
                      '318': 97,
                      '319': 116,
                      '320': 99,
                      '321': 104,
                      '322': 34,
                      '323': 44,
                      '324': 10,
                      '325': 32,
                      '326': 32,
                      '327': 32,
                      '328': 32,
                      '329': 34,
                      '330': 108,
                      '331': 105,
                      '332': 110,
                      '333': 116,
                      '334': 34,
                      '335': 58,
                      '336': 32,
                      '337': 34,
                      '338': 121,
                      '339': 97,
                      '340': 114,
                      '341': 110,
                      '342': 32,
                      '343': 114,
                      '344': 117,
                      '345': 110,
                      '346': 32,
                      '347': 101,
                      '348': 115,
                      '349': 108,
                      '350': 105,
                      '351': 110,
                      '352': 116,
                      '353': 32,
                      '354': 38,
                      '355': 38,
                      '356': 32,
                      '357': 121,
                      '358': 97,
                      '359': 114,
                      '360': 110,
                      '361': 32,
                      '362': 114,
                      '363': 117,
                      '364': 110,
                      '365': 32,
                      '366': 112,
                      '367': 114,
                      '368': 101,
                      '369': 116,
                      '370': 116,
                      '371': 105,
                      '372': 101,
                      '373': 114,
                      '374': 58,
                      '375': 99,
                      '376': 104,
                      '377': 101,
                      '378': 99,
                      '379': 107,
                      '380': 34,
                      '381': 44,
                      '382': 10,
                      '383': 32,
                      '384': 32,
                      '385': 32,
                      '386': 32,
                      '387': 34,
                      '388': 108,
                      '389': 105,
                      '390': 110,
                      '391': 116,
                      '392': 58,
                      '393': 102,
                      '394': 105,
                      '395': 120,
                      '396': 34,
                      '397': 58,
                      '398': 32,
                      '399': 34,
                      '400': 121,
                      '401': 97,
                      '402': 114,
                      '403': 110,
                      '404': 32,
                      '405': 114,
                      '406': 117,
                      '407': 110,
                      '408': 32,
                      '409': 101,
                      '410': 115,
                      '411': 108,
                      '412': 105,
                      '413': 110,
                      '414': 116,
                      '415': 58,
                      '416': 102,
                      '417': 105,
                      '418': 120,
                      '419': 32,
                      '420': 38,
                      '421': 38,
                      '422': 32,
                      '423': 121,
                      '424': 97,
                      '425': 114,
                      '426': 110,
                      '427': 32,
                      '428': 114,
                      '429': 117,
                      '430': 110,
                      '431': 32,
                      '432': 112,
                      '433': 114,
                      '434': 101,
                      '435': 116,
                      '436': 116,
                      '437': 105,
                      '438': 101,
                      '439': 114,
                      '440': 58,
                      '441': 102,
                      '442': 105,
                      '443': 120,
                      '444': 34,
                      '445': 44,
                      '446': 10,
                      '447': 32,
                      '448': 32,
                      '449': 32,
                      '450': 32,
                      '451': 34,
                      '452': 112,
                      '453': 114,
                      '454': 101,
                      '455': 116,
                      '456': 116,
                      '457': 105,
                      '458': 101,
                      '459': 114,
                      '460': 58,
                      '461': 99,
                      '462': 108,
                      '463': 105,
                      '464': 34,
                      '465': 58,
                      '466': 32,
                      '467': 34,
                      '468': 108,
                      '469': 98,
                      '470': 45,
                      '471': 112,
                      '472': 114,
                      '473': 101,
                      '474': 116,
                      '475': 116,
                      '476': 105,
                      '477': 101,
                      '478': 114,
                      '479': 32,
                      '480': 92,
                      '481': 34,
                      '482': 42,
                      '483': 42,
                      '484': 47,
                      '485': 42,
                      '486': 46,
                      '487': 116,
                      '488': 115,
                      '489': 92,
                      '490': 34,
                      '491': 32,
                      '492': 92,
                      '493': 34,
                      '494': 42,
                      '495': 42,
                      '496': 47,
                      '497': 42,
                      '498': 46,
                      '499': 106,
                      '500': 115,
                      '501': 92,
                      '502': 34,
                      '503': 34,
                      '504': 44,
                      '505': 10,
                      '506': 32,
                      '507': 32,
                      '508': 32,
                      '509': 32,
                      '510': 34,
                      '511': 112,
                      '512': 114,
                      '513': 101,
                      '514': 116,
                      '515': 116,
                      '516': 105,
                      '517': 101,
                      '518': 114,
                      '519': 58,
                      '520': 99,
                      '521': 104,
                      '522': 101,
                      '523': 99,
                      '524': 107,
                      '525': 34,
                      '526': 58,
                      '527': 32,
                      '528': 34,
                      '529': 121,
                      '530': 97,
                      '531': 114,
                      '532': 110,
                      '533': 32,
                      '534': 114,
                      '535': 117,
                      '536': 110,
                      '537': 32,
                      '538': 112,
                      '539': 114,
                      '540': 101,
                      '541': 116,
                      '542': 116,
                      '543': 105,
                      '544': 101,
                      '545': 114,
                      '546': 58,
                      '547': 99,
                      '548': 108,
                      '549': 105,
                      '550': 32,
                      '551': 45,
                      '552': 108,
                      '553': 34,
                      '554': 44,
                      '555': 10,
                      '556': 32,
                      '557': 32,
                      '558': 32,
                      '559': 32,
                      '560': 34,
                      '561': 112,
                      '562': 114,
                      '563': 101,
                      '564': 116,
                      '565': 116,
                      '566': 105,
                      '567': 101,
                      '568': 114,
                      '569': 58,
                      '570': 102,
                      '571': 105,
                      '572': 120,
                      '573': 34,
                      '574': 58,
                      '575': 32,
                      '576': 34,
                      '577': 121,
                      '578': 97,
                      '579': 114,
                      '580': 110,
                      '581': 32,
                      '582': 114,
                      '583': 117,
                      '584': 110,
                      '585': 32,
                      '586': 112,
                      '587': 114,
                      '588': 101,
                      '589': 116,
                      '590': 116,
                      '591': 105,
                      '592': 101,
                      '593': 114,
                      '594': 58,
                      '595': 99,
                      '596': 108,
                      '597': 105,
                      '598': 32,
                      '599': 45,
                      '600': 45,
                      '601': 119,
                      '602': 114,
                      '603': 105,
                      '604': 116,
                      '605': 101,
                      '606': 34,
                      '607': 44,
                      '608': 10,
                      '609': 32,
                      '610': 32,
                      '611': 32,
                      '612': 32,
                      '613': 34,
                      '614': 101,
                      '615': 115,
                      '616': 108,
                      '617': 105,
                      '618': 110,
                      '619': 116,
                      '620': 34,
                      '621': 58,
                      '622': 32,
                      '623': 34,
                      '624': 108,
                      '625': 98,
                      '626': 45,
                      '627': 101,
                      '628': 115,
                      '629': 108,
                      '630': 105,
                      '631': 110,
                      '632': 116,
                      '633': 32,
                      '634': 45,
                      '635': 45,
                      '636': 114,
                      '637': 101,
                      '638': 112,
                      '639': 111,
                      '640': 114,
                      '641': 116,
                      '642': 45,
                      '643': 117,
                      '644': 110,
                      '645': 117,
                      '646': 115,
                      '647': 101,
                      '648': 100,
                      '649': 45,
                      '650': 100,
                      '651': 105,
                      '652': 115,
                      '653': 97,
                      '654': 98,
                      '655': 108,
                      '656': 101,
                      '657': 45,
                      '658': 100,
                      '659': 105,
                      '660': 114,
                      '661': 101,
                      '662': 99,
                      '663': 116,
                      '664': 105,
                      '665': 118,
                      '666': 101,
                      '667': 115,
                      '668': 32,
                      '669': 46,
                      '670': 34,
                      '671': 44,
                      '672': 10,
                      '673': 32,
                      '674': 32,
                      '675': 32,
                      '676': 32,
                      '677': 34,
                      '678': 101,
                      '679': 115,
                      '680': 108,
                      '681': 105,
                      '682': 110,
                      '683': 116,
                      '684': 58,
                      '685': 102,
                      '686': 105,
                      '687': 120,
                      '688': 34,
                      '689': 58,
                      '690': 32,
                      '691': 34,
                      '692': 121,
                      '693': 97,
                      '694': 114,
                      '695': 110,
                      '696': 32,
                      '697': 114,
                      '698': 117,
                      '699': 110,
                      '700': 32,
                      '701': 101,
                      '702': 115,
                      '703': 108,
                      '704': 105,
                      '705': 110,
                      '706': 116,
                      '707': 32,
                      '708': 45,
                      '709': 45,
                      '710': 102,
                      '711': 105,
                      '712': 120,
                      '713': 34,
                      '714': 44,
                      '715': 10,
                      '716': 32,
                      '717': 32,
                      '718': 32,
                      '719': 32,
                      '720': 34,
                      '721': 112,
                      '722': 114,
                      '723': 101,
                      '724': 116,
                      '725': 101,
                      '726': 115,
                      '727': 116,
                      '728': 34,
                      '729': 58,
                      '730': 32,
                      '731': 34,
                      '732': 121,
                      '733': 97,
                      '734': 114,
                      '735': 110,
                      '736': 32,
                      '737': 114,
                      '738': 117,
                      '739': 110,
                      '740': 32,
                      '741': 114,
                      '742': 101,
                      '743': 98,
                      '744': 117,
                      '745': 105,
                      '746': 108,
                      '747': 100,
                      '748': 34,
                      '749': 44,
                      '750': 10,
                      '751': 32,
                      '752': 32,
                      '753': 32,
                      '754': 32,
                      '755': 34,
                      '756': 116,
                      '757': 101,
                      '758': 115,
                      '759': 116,
                      '760': 34,
                      '761': 58,
                      '762': 32,
                      '763': 34,
                      '764': 108,
                      '765': 98,
                      '766': 45,
                      '767': 109,
                      '768': 111,
                      '769': 99,
                      '770': 104,
                      '771': 97,
                      '772': 32,
                      '773': 45,
                      '774': 45,
                      '775': 97,
                      '776': 108,
                      '777': 108,
                      '778': 111,
                      '779': 119,
                      '780': 45,
                      '781': 99,
                      '782': 111,
                      '783': 110,
                      '784': 115,
                      '785': 111,
                      '786': 108,
                      '787': 101,
                      '788': 45,
                      '789': 108,
                      '790': 111,
                      '791': 103,
                      '792': 115,
                      '793': 32,
                      '794': 92,
                      '795': 34,
                      '796': 100,
                      '797': 105,
                      '798': 115,
                      '799': 116,
                      '800': 47,
                      '801': 95,
                      '802': 95,
                      '803': 116,
                      '804': 101,
                      '805': 115,
                      '806': 116,
                      '807': 115,
                      '808': 95,
                      '809': 95,
                      '810': 92,
                      '811': 34,
                      '812': 34,
                      '813': 44,
                      '814': 10,
                      '815': 32,
                      '816': 32,
                      '817': 32,
                      '818': 32,
                      '819': 34,
                      '820': 112,
                      '821': 111,
                      '822': 115,
                      '823': 116,
                      '824': 116,
                      '825': 101,
                      '826': 115,
                      '827': 116,
                      '828': 34,
                      '829': 58,
                      '830': 32,
                      '831': 34,
                      '832': 121,
                      '833': 97,
                      '834': 114,
                      '835': 110,
                      '836': 32,
                      '837': 114,
                      '838': 117,
                      '839': 110,
                      '840': 32,
                      '841': 108,
                      '842': 105,
                      '843': 110,
                      '844': 116,
                      '845': 34,
                      '846': 44,
                      '847': 10,
                      '848': 32,
                      '849': 32,
                      '850': 32,
                      '851': 32,
                      '852': 34,
                      '853': 116,
                      '854': 101,
                      '855': 115,
                      '856': 116,
                      '857': 58,
                      '858': 100,
                      '859': 101,
                      '860': 118,
                      '861': 34,
                      '862': 58,
                      '863': 32,
                      '864': 34,
                      '865': 108,
                      '866': 98,
                      '867': 45,
                      '868': 109,
                      '869': 111,
                      '870': 99,
                      '871': 104,
                      '872': 97,
                      '873': 32,
                      '874': 45,
                      '875': 45,
                      '876': 97,
                      '877': 108,
                      '878': 108,
                      '879': 111,
                      '880': 119,
                      '881': 45,
                      '882': 99,
                      '883': 111,
                      '884': 110,
                      '885': 115,
                      '886': 111,
                      '887': 108,
                      '888': 101,
                      '889': 45,
                      '890': 108,
                      '891': 111,
                      '892': 103,
                      '893': 115,
                      '894': 32,
                      '895': 100,
                      '896': 105,
                      '897': 115,
                      '898': 116,
                      '899': 47,
                      '900': 95,
                      '901': 95,
                      '902': 116,
                      '903': 101,
                      '904': 115,
                      '905': 116,
                      '906': 115,
                      '907': 95,
                      '908': 95,
                      '909': 47,
                      '910': 42,
                      '911': 42,
                      '912': 47,
                      '913': 42,
                      '914': 46,
                      '915': 106,
                      '916': 115,
                      '917': 32,
                      '918': 38,
                      '919': 38,
                      '920': 32,
                      '921': 121,
                      '922': 97,
                      '923': 114,
                      '924': 110,
                      '925': 32,
                      '926': 114,
                      '927': 117,
                      '928': 110,
                      '929': 32,
                      '930': 112,
                      '931': 111,
                      '932': 115,
                      '933': 116,
                      '934': 116,
                      '935': 101,
                      '936': 115,
                      '937': 116,
                      '938': 34,
                      '939': 44,
                      '940': 10,
                      '941': 32,
                      '942': 32,
                      '943': 32,
                      '944': 32,
                      '945': 34,
                      '946': 100,
                      '947': 111,
                      '948': 99,
                      '949': 107,
                      '950': 101,
                      '951': 114,
                      '952': 58,
                      '953': 98,
                      '954': 117,
                      '955': 105,
                      '956': 108,
                      '957': 100,
                      '958': 34,
                      '959': 58,
                      '960': 32,
                      '961': 34,
                      '962': 100,
                      '963': 111,
                      '964': 99,
                      '965': 107,
                      '966': 101,
                      '967': 114,
                      '968': 32,
                      '969': 98,
                      '970': 117,
                      '971': 105,
                      '972': 108,
                      '973': 100,
                      '974': 32,
                      '975': 45,
                      '976': 116,
                      '977': 32,
                      '978': 116,
                      '979': 101,
                      '980': 115,
                      '981': 116,
                      '982': 45,
                      '983': 97,
                      '984': 112,
                      '985': 112,
                      '986': 32,
                      '987': 46,
                      '988': 34,
                      '989': 44,
                      '990': 10,
                      '991': 32,
                      '992': 32,
                      '993': 32,
                      '994': 32,
                      '995': 34,
                      '996': 100,
                      '997': 111,
                      '998': 99,
                      '999': 107,
                      '1000': 101,
                      '1001': 114,
                      '1002': 58,
                      '1003': 114,
                      '1004': 117,
                      '1005': 110,
                      '1006': 34,
                      '1007': 58,
                      '1008': 32,
                      '1009': 34,
                      '1010': 100,
                      '1011': 111,
                      '1012': 99,
                      '1013': 107,
                      '1014': 101,
                      '1015': 114,
                      '1016': 32,
                      '1017': 114,
                      '1018': 117,
                      '1019': 110,
                      '1020': 32,
                      '1021': 45,
                      '1022': 112,
                      '1023': 32,
                      '1024': 51,
                      '1025': 48,
                      '1026': 48,
                      '1027': 48,
                      '1028': 58,
                      '1029': 51,
                      '1030': 48,
                      '1031': 48,
                      '1032': 48,
                      '1033': 32,
                      '1034': 45,
                      '1035': 100,
                      '1036': 32,
                      '1037': 116,
                      '1038': 101,
                      '1039': 115,
                      '1040': 116,
                      '1041': 45,
                      '1042': 97,
                      '1043': 112,
                      '1044': 112,
                      '1045': 34,
                      '1046': 44,
                      '1047': 10,
                      '1048': 32,
                      '1049': 32,
                      '1050': 32,
                      '1051': 32,
                      '1052': 34,
                      '1053': 112,
                      '1054': 114,
                      '1055': 101,
                      '1056': 109,
                      '1057': 105,
                      '1058': 103,
                      '1059': 114,
                      '1060': 97,
                      '1061': 116,
                      '1062': 101,
                      '1063': 34,
                      '1064': 58,
                      '1065': 32,
                      '1066': 34,
                      '1067': 121,
                      '1068': 97,
                      '1069': 114,
                      '1070': 110,
                      '1071': 32,
                      '1072': 114,
                      '1073': 117,
                      '1074': 110,
                      '1075': 32,
                      '1076': 98,
                      '1077': 117,
                      '1078': 105,
                      '1079': 108,
                      '1080': 100,
                      '1081': 34,
                      '1082': 44,
                      '1083': 10,
                      '1084': 32,
                      '1085': 32,
                      '1086': 32,
                      '1087': 32,
                      '1088': 34,
                      '1089': 109,
                      '1090': 105,
                      '1091': 103,
                      '1092': 114,
                      '1093': 97,
                      '1094': 116,
                      '1095': 101,
                      '1096': 34,
                      '1097': 58,
                      '1098': 32,
                      '1099': 34,
                      '1100': 110,
                      '1101': 111,
                      '1102': 100,
                      '1103': 101,
                      '1104': 32,
                      '1105': 46,
                      '1106': 47,
                      '1107': 100,
                      '1108': 105,
                      '1109': 115,
                      '1110': 116,
                      '1111': 47,
                      '1112': 109,
                      '1113': 105,
                      '1114': 103,
                      '1115': 114,
                      '1116': 97,
                      '1117': 116,
                      '1118': 101,
                      '1119': 34,
                      '1120': 44,
                      '1121': 10,
                      '1122': 32,
                      '1123': 32,
                      '1124': 32,
                      '1125': 32,
                      '1126': 34,
                      '1127': 112,
                      '1128': 114,
                      '1129': 101,
                      '1130': 111,
                      '1131': 112,
                      '1132': 101,
                      '1133': 110,
                      '1134': 97,
                      '1135': 112,
                      '1136': 105,
                      '1137': 45,
                      '1138': 115,
                      '1139': 112,
                      '1140': 101,
                      '1141': 99,
                      '1142': 34,
                      '1143': 58,
                      '1144': 32,
                      '1145': 34,
                      '1146': 121,
                      '1147': 97,
                      '1148': 114,
                      '1149': 110,
                      '1150': 32,
                      '1151': 114,
                      '1152': 117,
                      '1153': 110,
                      '1154': 32,
                      '1155': 98,
                      '1156': 117,
                      '1157': 105,
                      '1158': 108,
                      '1159': 100,
                      '1160': 34,
                      '1161': 44,
                      '1162': 10,
                      '1163': 32,
                      '1164': 32,
                      '1165': 32,
                      '1166': 32,
                      '1167': 34,
                      '1168': 111,
                      '1169': 112,
                      '1170': 101,
                      '1171': 110,
                      '1172': 97,
                      '1173': 112,
                      '1174': 105,
                      '1175': 45,
                      '1176': 115,
                      '1177': 112,
                      '1178': 101,
                      '1179': 99,
                      '1180': 34,
                      '1181': 58,
                      '1182': 32,
                      '1183': 34,
                      '1184': 110,
                      '1185': 111,
                      '1186': 100,
                      '1187': 101,
                      '1188': 32,
                      '1189': 46,
                      '1190': 47,
                      '1191': 100,
                      '1192': 105,
                      '1193': 115,
                      '1194': 116,
                      '1195': 47,
                      '1196': 111,
                      '1197': 112,
                      '1198': 101,
                      '1199': 110,
                      '1200': 97,
                      '1201': 112,
                      '1202': 105,
                      '1203': 45,
                      '1204': 115,
                      '1205': 112,
                      '1206': 101,
                      '1207': 99,
                      '1208': 34,
                      '1209': 44,
                      '1210': 10,
                      '1211': 32,
                      '1212': 32,
                      '1213': 32,
                      '1214': 32,
                      '1215': 34,
                      '1216': 112,
                      '1217': 114,
                      '1218': 101,
                      '1219': 115,
                      '1220': 116,
                      '1221': 97,
                      '1222': 114,
                      '1223': 116,
                      '1224': 34,
                      '1225': 58,
                      '1226': 32,
                      '1227': 34,
                      '1228': 121,
                      '1229': 97,
                      '1230': 114,
                      '1231': 110,
                      '1232': 32,
                      '1233': 114,
                      '1234': 117,
                      '1235': 110,
                      '1236': 32,
                      '1237': 114,
                      '1238': 101,
                      '1239': 98,
                      '1240': 117,
                      '1241': 105,
                      '1242': 108,
                      '1243': 100,
                      '1244': 34,
                      '1245': 44,
                      '1246': 10,
                      '1247': 32,
                      '1248': 32,
                      '1249': 32,
                      '1250': 32,
                      '1251': 34,
                      '1252': 115,
                      '1253': 116,
                      '1254': 97,
                      '1255': 114,
                      '1256': 116,
                      '1257': 34,
                      '1258': 58,
                      '1259': 32,
                      '1260': 34,
                      '1261': 110,
                      '1262': 111,
                      '1263': 100,
                      '1264': 101,
                      '1265': 32,
                      '1266': 45,
                      '1267': 114,
                      '1268': 32,
                      '1269': 115,
                      '1270': 111,
                      '1271': 117,
                      '1272': 114,
                      '1273': 99,
                      '1274': 101,
                      '1275': 45,
                      '1276': 109,
                      '1277': 97,
                      '1278': 112,
                      '1279': 45,
                      '1280': 115,
                      '1281': 117,
                      '1282': 112,
                      '1283': 112,
                      '1284': 111,
                      '1285': 114,
                      '1286': 116,
                      '1287': 47,
                      '1288': 114,
                      '1289': 101,
                      '1290': 103,
                      '1291': 105,
                      '1292': 115,
                      '1293': 116,
                      '1294': 101,
                      '1295': 114,
                      '1296': 32,
                      '1297': 46,
                      '1298': 34,
                      '1299': 44,
                      '1300': 10,
                      '1301': 32,
                      '1302': 32,
                      '1303': 32,
                      '1304': 32,
                      '1305': 34,
                      '1306': 99,
                      '1307': 108,
                      '1308': 101,
                      '1309': 97,
                      '1310': 110,
                      '1311': 34,
                      '1312': 58,
                      '1313': 32,
                      '1314': 34,
                      '1315': 108,
                      '1316': 98,
                      '1317': 45,
                      '1318': 99,
                      '1319': 108,
                      '1320': 101,
                      '1321': 97,
                      '1322': 110,
                      '1323': 32,
                      '1324': 100,
                      '1325': 105,
                      '1326': 115,
                      '1327': 116,
                      '1328': 32,
                      '1329': 42,
                      '1330': 46,
                      '1331': 116,
                      '1332': 115,
                      '1333': 98,
                      '1334': 117,
                      '1335': 105,
                      '1336': 108,
                      '1337': 100,
                      '1338': 105,
                      '1339': 110,
                      '1340': 102,
                      '1341': 111,
                      '1342': 32,
                      '1343': 46,
                      '1344': 101,
                      '1345': 115,
                      '1346': 108,
                      '1347': 105,
                      '1348': 110,
                      '1349': 116,
                      '1350': 99,
                      '1351': 97,
                      '1352': 99,
                      '1353': 104,
                      '1354': 101,
                      '1355': 34,
                      '1356': 44,
                      '1357': 10,
                      '1358': 32,
                      '1359': 32,
                      '1360': 32,
                      '1361': 32,
                      '1362': 34,
                      '1363': 114,
                      '1364': 101,
                      '1365': 98,
                      '1366': 117,
                      '1367': 105,
                      '1368': 108,
                      '1369': 100,
                      '1370': 34,
                      '1371': 58,
                      '1372': 32,
                      '1373': 34,
                      '1374': 121,
                      '1375': 97,
                      '1376': 114,
                      '1377': 110,
                      '1378': 32,
                      '1379': 114,
                      '1380': 117,
                      '1381': 110,
                      '1382': 32,
                      '1383': 99,
                      '1384': 108,
                      '1385': 101,
                      '1386': 97,
                      '1387': 110,
                      '1388': 32,
                      '1389': 38,
                      '1390': 38,
                      '1391': 32,
                      '1392': 121,
                      '1393': 97,
                      '1394': 114,
                      '1395': 110,
                      '1396': 32,
                      '1397': 114,
                      '1398': 117,
                      '1399': 110,
                      '1400': 32,
                      '1401': 98,
                      '1402': 117,
                      '1403': 105,
                      '1404': 108,
                      '1405': 100,
                      '1406': 34,
                      '1407': 10,
                      '1408': 32,
                      '1409': 32,
                      '1410': 125,
                      '1411': 44,
                      '1412': 10,
                      '1413': 32,
                      '1414': 32,
                      '1415': 34,
                      '1416': 114,
                      '1417': 101,
                      '1418': 112,
                      '1419': 111,
                      '1420': 115,
                      '1421': 105,
                      '1422': 116,
                      '1423': 111,
                      '1424': 114,
                      '1425': 121,
                      '1426': 34,
                      '1427': 58,
                      '1428': 32,
                      '1429': 123,
                      '1430': 10,
                      '1431': 32,
                      '1432': 32,
                      '1433': 32,
                      '1434': 32,
                      '1435': 34,
                      '1436': 116,
                      '1437': 121,
                      '1438': 112,
                      '1439': 101,
                      '1440': 34,
                      '1441': 58,
                      '1442': 32,
                      '1443': 34,
                      '1444': 103,
                      '1445': 105,
                      '1446': 116,
                      '1447': 34,
                      '1448': 44,
                      '1449': 10,
                      '1450': 32,
                      '1451': 32,
                      '1452': 32,
                      '1453': 32,
                      '1454': 34,
                      '1455': 117,
                      '1456': 114,
                      '1457': 108,
                      '1458': 34,
                      '1459': 58,
                      '1460': 32,
                      '1461': 34,
                      '1462': 34,
                      '1463': 10,
                      '1464': 32,
                      '1465': 32,
                      '1466': 125,
                      '1467': 44,
                      '1468': 10,
                      '1469': 32,
                      '1470': 32,
                      '1471': 34,
                      '1472': 97,
                      '1473': 117,
                      '1474': 116,
                      '1475': 104,
                      '1476': 111,
                      '1477': 114,
                      '1478': 34,
                      '1479': 58,
                      '1480': 32,
                      '1481': 34,
                      '1482': 77,
                      '1483': 117,
                      '1484': 104,
                      '1485': 97,
                      '1486': 109,
                      '1487': 109,
                      '1488': 97,
                      '1489': 100,
                      '1490': 32,
                      '1491': 65,
                      '1492': 97,
                      '1493': 113,
                      '1494': 105,
                      '1495': 108,
                      '1496': 32,
                      '1497': 60,
                      '1498': 97,
                      '1499': 97,
                      '1500': 113,
                      '1501': 105,
                      '1502': 108,
                      '1503': 110,
                      '1504': 105,
                      '1505': 122,
                      '1506': 64,
                      '1507': 121,
                      '1508': 97,
                      '1509': 104,
                      '1510': 111,
                      '1511': 111,
                      '1512': 46,
                      '1513': 99,
                      '1514': 111,
                      '1515': 109,
                      '1516': 62,
                      '1517': 34,
                      '1518': 44,
                      '1519': 10,
                      '1520': 32,
                      '1521': 32,
                      '1522': 34,
                      '1523': 108,
                      '1524': 105,
                      '1525': 99,
                      '1526': 101,
                      '1527': 110,
                      '1528': 115,
                      '1529': 101,
                      '1530': 34,
                      '1531': 58,
                      '1532': 32,
                      '1533': 34,
                      '1534': 34,
                      '1535': 44,
                      '1536': 10,
                      '1537': 32,
                      '1538': 32,
                      '1539': 34,
                      '1540': 102,
                      '1541': 105,
                      '1542': 108,
                      '1543': 101,
                      '1544': 115,
                      '1545': 34,
                      '1546': 58,
                      '1547': 32,
                      '1548': 91,
                      '1549': 10,
                      '1550': 32,
                      '1551': 32,
                      '1552': 32,
                      '1553': 32,
                      '1554': 34,
                      '1555': 82,
                      '1556': 69,
                      '1557': 65,
                      '1558': 68,
                      '1559': 77,
                      '1560': 69,
                      '1561': 46,
                      '1562': 109,
                      '1563': 100,
                      '1564': 34,
                      '1565': 44,
                      '1566': 10,
                      '1567': 32,
                      '1568': 32,
                      '1569': 32,
                      '1570': 32,
                      '1571': 34,
                      '1572': 100,
                      '1573': 105,
                      '1574': 115,
                      '1575': 116,
                      '1576': 34,
                      '1577': 44,
                      '1578': 10,
                      '1579': 32,
                      '1580': 32,
                      '1581': 32,
                      '1582': 32,
                      '1583': 34,
                      '1584': 115,
                      '1585': 114,
                      '1586': 99,
                      '1587': 34,
                      '1588': 44,
                      '1589': 10,
                      '1590': 32,
                      '1591': 32,
                      '1592': 32,
                      '1593': 32,
                      '1594': 34,
                      '1595': 33,
                      '1596': 42,
                      '1597': 47,
                      '1598': 95,
                      '1599': 95,
                      '1600': 116,
                      '1601': 101,
                      '1602': 115,
                      '1603': 116,
                      '1604': 115,
                      '1605': 95,
                      '1606': 95,
                      '1607': 34,
                      '1608': 10,
                      '1609': 32,
                      '1610': 32,
                      '1611': 93,
                      '1612': 44,
                      '1613': 10,
                      '1614': 32,
                      '1615': 32,
                      '1616': 34,
                      '1617': 100,
                      '1618': 101,
                      '1619': 112,
                      '1620': 101,
                      '1621': 110,
                      '1622': 100,
                      '1623': 101,
                      '1624': 110,
                      '1625': 99,
                      '1626': 105,
                      '1627': 101,
                      '1628': 115,
                      '1629': 34,
                      '1630': 58,
                      '1631': 32,
                      '1632': 123,
                      '1633': 10,
                      '1634': 32,
                      '1635': 32,
                      '1636': 32,
                      '1637': 32,
                      '1638': 34,
                      '1639': 64,
                      '1640': 108,
                      '1641': 111,
                      '1642': 111,
                      '1643': 112,
                      '1644': 98,
                      '1645': 97,
                      '1646': 99,
                      '1647': 107,
                      '1648': 47,
                      '1649': 98,
                      '1650': 111,
                      '1651': 111,
                      '1652': 116,
                      '1653': 34,
                      '1654': 58,
                      '1655': 32,
                      '1656': 34,
                      '1657': 94,
                      '1658': 53,
                      '1659': 46,
                      '1660': 48,
                      '1661': 46,
                      '1662': 51,
                      '1663': 34,
                      '1664': 44,
                      '1665': 10,
                      '1666': 32,
                      '1667': 32,
                      '1668': 32,
                      '1669': 32,
                      '1670': 34,
                      '1671': 64,
                      '1672': 108,
                      '1673': 111,
                      '1674': 111,
                      '1675': 112,
                      '1676': 98,
                      '1677': 97,
                      '1678': 99,
                      '1679': 107,
                      '1680': 47,
                      '1681': 99,
                      '1682': 111,
                      '1683': 114,
                      '1684': 101,
                      '1685': 34,
                      '1686': 58,
                      '1687': 32,
                      '1688': 34,
                      '1689': 94,
                      '1690': 52,
                      '1691': 46,
                      '1692': 48,
                      '1693': 46,
                      '1694': 51,
                      '1695': 34,
                      '1696': 44,
                      '1697': 10,
                      '1698': 32,
                      '1699': 32,
                      '1700': 32,
                      '1701': 32,
                      '1702': 34,
                      '1703': 64,
                      '1704': 108,
                      '1705': 111,
                      '1706': 111,
                      '1707': 112,
                      '1708': 98,
                      '1709': 97,
                      '1710': 99,
                      '1711': 107,
                      '1712': 47,
                      '1713': 114,
                      '1714': 101,
                      '1715': 112,
                      '1716': 111,
                      '1717': 115,
                      '1718': 105,
                      '1719': 116,
                      '1720': 111,
                      '1721': 114,
                      '1722': 121,
                      '1723': 34,
                      '1724': 58,
                      '1725': 32,
                      '1726': 34,
                      '1727': 94,
                      '1728': 53,
                      '1729': 46,
                      '1730': 48,
                      '1731': 46,
                      '1732': 51,
                      '1733': 34,
                      '1734': 44,
                      '1735': 10,
                      '1736': 32,
                      '1737': 32,
                      '1738': 32,
                      '1739': 32,
                      '1740': 34,
                      '1741': 64,
                      '1742': 108,
                      '1743': 111,
                      '1744': 111,
                      '1745': 112,
                      '1746': 98,
                      '1747': 97,
                      '1748': 99,
                      '1749': 107,
                      '1750': 47,
                      '1751': 114,
                      '1752': 101,
                      '1753': 115,
                      '1754': 116,
                      '1755': 34,
                      '1756': 58,
                      '1757': 32,
                      '1758': 34,
                      '1759': 94,
                      '1760': 49,
                      '1761': 50,
                      '1762': 46,
                      '1763': 48,
                      '1764': 46,
                      '1765': 51,
                      '1766': 34,
                      '1767': 44,
                      '1768': 10,
                      '1769': 32,
                      '1770': 32,
                      '1771': 32,
                      '1772': 32,
                      '1773': 34,
                      '1774': 64,
                      '1775': 108,
                      '1776': 111,
                      '1777': 111,
                      '1778': 112,
                      '1779': 98,
                      '1780': 97,
                      '1781': 99,
                      '1782': 107,
                      '1783': 47,
                      '1784': 114,
                      '1785': 101,
                      '1786': 115,
                      '1787': 116,
                      '1788': 45,
                      '1789': 101,
                      '1790': 120,
                      '1791': 112,
                      '1792': 108,
                      '1793': 111,
                      '1794': 114,
                      '1795': 101,
                      '1796': 114,
                      '1797': 34,
                      '1798': 58,
                      '1799': 32,
                      '1800': 34,
                      '1801': 94,
                      '1802': 53,
                      '1803': 46,
                      '1804': 48,
                      '1805': 46,
                      '1806': 51,
                      '1807': 34,
                      '1808': 44,
                      '1809': 10,
                      '1810': 32,
                      '1811': 32,
                      '1812': 32,
                      '1813': 32,
                      '1814': 34,
                      '1815': 64,
                      '1816': 108,
                      '1817': 111,
                      '1818': 111,
                      '1819': 112,
                      '1820': 98,
                      '1821': 97,
                      '1822': 99,
                      '1823': 107,
                      '1824': 47,
                      '1825': 115,
                      '1826': 101,
                      '1827': 114,
                      '1828': 118,
                      '1829': 105,
                      '1830': 99,
                      '1831': 101,
                      '1832': 45,
                      '1833': 112,
                      '1834': 114,
                      '1835': 111,
                      '1836': 120,
                      '1837': 121,
                      '1838': 34,
                      '1839': 58,
                      '1840': 32,
                      '1841': 34,
                      '1842': 94,
                      '1843': 53,
                      '1844': 46,
                      '1845': 48,
                      '1846': 46,
                      '1847': 51,
                      '1848': 34,
                      '1849': 44,
                      '1850': 10,
                      '1851': 32,
                      '1852': 32,
                      '1853': 32,
                      '1854': 32,
                      '1855': 34,
                      '1856': 108,
                      '1857': 111,
                      '1858': 111,
                      '1859': 112,
                      '1860': 98,
                      '1861': 97,
                      '1862': 99,
                      '1863': 107,
                      '1864': 45,
                      '1865': 99,
                      '1866': 111,
                      '1867': 110,
                      '1868': 110,
                      '1869': 101,
                      '1870': 99,
                      '1871': 116,
                      '1872': 111,
                      '1873': 114,
                      '1874': 45,
                      '1875': 109,
                      '1876': 121,
                      '1877': 115,
                      '1878': 113,
                      '1879': 108,
                      '1880': 34,
                      '1881': 58,
                      '1882': 32,
                      '1883': 34,
                      '1884': 94,
                      '1885': 53,
                      '1886': 46,
                      '1887': 51,
                      '1888': 46,
                      '1889': 48,
                      '1890': 34,
                      '1891': 44,
                      '1892': 10,
                      '1893': 32,
                      '1894': 32,
                      '1895': 32,
                      '1896': 32,
                      '1897': 34,
                      '1898': 116,
                      '1899': 115,
                      '1900': 108,
                      '1901': 105,
                      '1902': 98,
                      '1903': 34,
                      '1904': 58,
                      '1905': 32,
                      '1906': 34,
                      '1907': 94,
                      '1908': 50,
                      '1909': 46,
                      '1910': 48,
                      '1911': 46,
                      '1912': 48,
                      '1913': 34,
                      '1914': 10,
                      '1915': 32,
                      '1916': 32,
                      '1917': 125,
                      '1918': 44,
                      '1919': 10,
                      '1920': 32,
                      '1921': 32,
                      '1922': 34,
                      '1923': 100,
                      '1924': 101,
                      '1925': 118,
                      '1926': 68,
                      '1927': 101,
                      '1928': 112,
                      '1929': 101,
                      '1930': 110,
                      '1931': 100,
                      '1932': 101,
                      '1933': 110,
                      '1934': 99,
                      '1935': 105,
                      '1936': 101,
                      '1937': 115,
                      '1938': 34,
                      '1939': 58,
                      '1940': 32,
                      '1941': 123,
                      '1942': 10,
                      '1943': 32,
                      '1944': 32,
                      '1945': 32,
                      '1946': 32,
                      '1947': 34,
                      '1948': 64,
                      '1949': 108,
                      '1950': 111,
                      '1951': 111,
                      '1952': 112,
                      '1953': 98,
                      '1954': 97,
                      '1955': 99,
                      '1956': 107,
                      '1957': 47,
                      '1958': 98,
                      '1959': 117,
                      '1960': 105,
                      '1961': 108,
                      '1962': 100,
                      '1963': 34,
                      '1964': 58,
                      '1965': 32,
                      '1966': 34,
                      '1967': 94,
                      '1968': 57,
                      '1969': 46,
                      '1970': 48,
                      '1971': 46,
                      '1972': 51,
                      '1973': 34,
                      '1974': 44,
                      '1975': 10,
                      '1976': 32,
                      '1977': 32,
                      '1978': 32,
                      '1979': 32,
                      '1980': 34,
                      '1981': 64,
                      '1982': 108,
                      '1983': 111,
                      '1984': 111,
                      '1985': 112,
                      '1986': 98,
                      '1987': 97,
                      '1988': 99,
                      '1989': 107,
                      '1990': 47,
                      '1991': 101,
                      '1992': 115,
                      '1993': 108,
                      '1994': 105,
                      '1995': 110,
                      '1996': 116,
                      '1997': 45,
                      '1998': 99,
                      '1999': 111,
                      '2000': 110,
                      '2001': 102,
                      '2002': 105,
                      '2003': 103,
                      '2004': 34,
                      '2005': 58,
                      '2006': 32,
                      '2007': 34,
                      '2008': 94,
                      '2009': 49,
                      '2010': 51,
                      '2011': 46,
                      '2012': 48,
                      '2013': 46,
                      '2014': 51,
                      '2015': 34,
                      '2016': 44,
                      '2017': 10,
                      '2018': 32,
                      '2019': 32,
                      '2020': 32,
                      '2021': 32,
                      '2022': 34,
                      '2023': 64,
                      '2024': 108,
                      '2025': 111,
                      '2026': 111,
                      '2027': 112,
                      '2028': 98,
                      '2029': 97,
                      '2030': 99,
                      '2031': 107,
                      '2032': 47,
                      '2033': 116,
                      '2034': 101,
                      '2035': 115,
                      '2036': 116,
                      '2037': 108,
                      '2038': 97,
                      '2039': 98,
                      '2040': 34,
                      '2041': 58,
                      '2042': 32,
                      '2043': 34,
                      '2044': 94,
                      '2045': 53,
                      '2046': 46,
                      '2047': 48,
                      '2048': 46,
                      '2049': 51,
                      '2050': 34,
                      '2051': 44,
                      '2052': 10,
                      '2053': 32,
                      '2054': 32,
                      '2055': 32,
                      '2056': 32,
                      '2057': 34,
                      '2058': 64,
                      '2059': 116,
                      '2060': 121,
                      '2061': 112,
                      '2062': 101,
                      '2063': 115,
                      '2064': 47,
                      '2065': 110,
                      '2066': 111,
                      '2067': 100,
                      '2068': 101,
                      '2069': 34,
                      '2070': 58,
                      '2071': 32,
                      '2072': 34,
                      '2073': 94,
                      '2074': 49,
                      '2075': 52,
                      '2076': 46,
                      '2077': 49,
                      '2078': 56,
                      '2079': 46,
                      '2080': 50,
                      '2081': 54,
                      '2082': 34,
                      '2083': 44,
                      '2084': 10,
                      '2085': 32,
                      '2086': 32,
                      '2087': 32,
                      '2088': 32,
                      '2089': 34,
                      '2090': 101,
                      '2091': 115,
                      '2092': 108,
                      '2093': 105,
                      '2094': 110,
                      '2095': 116,
                      '2096': 34,
                      '2097': 58,
                      '2098': 32,
                      '2099': 34,
                      '2100': 94,
                      '2101': 56,
                      '2102': 46,
                      '2103': 50,
                      '2104': 50,
                      '2105': 46,
                      '2106': 48,
                      '2107': 34,
                      '2108': 44,
                      '2109': 10,
                      '2110': 32,
                      '2111': 32,
                      '2112': 32,
                      '2113': 32,
                      '2114': 34,
                      '2115': 115,
                      '2116': 111,
                      '2117': 117,
                      '2118': 114,
                      '2119': 99,
                      '2120': 101,
                      '2121': 45,
                      '2122': 109,
                      '2123': 97,
                      '2124': 112,
                      '2125': 45,
                      '2126': 115,
                      '2127': 117,
                      '2128': 112,
                      '2129': 112,
                      '2130': 111,
                      '2131': 114,
                      '2132': 116,
                      '2133': 34,
                      '2134': 58,
                      '2135': 32,
                      '2136': 34,
                      '2137': 94,
                      '2138': 48,
                      '2139': 46,
                      '2140': 53,
                      '2141': 46,
                      '2142': 50,
                      '2143': 49,
                      '2144': 34,
                      '2145': 44,
                      '2146': 10,
                      '2147': 32,
                      '2148': 32,
                      '2149': 32,
                      '2150': 32,
                      '2151': 34,
                      '2152': 116,
                      '2153': 121,
                      '2154': 112,
                      '2155': 101,
                      '2156': 115,
                      '2157': 99,
                      '2158': 114,
                      '2159': 105,
                      '2160': 112,
                      '2161': 116,
                      '2162': 34,
                      '2163': 58,
                      '2164': 32,
                      '2165': 34,
                      '2166': 126,
                      '2167': 52,
                      '2168': 46,
                      '2169': 55,
                      '2170': 46,
                      '2171': 52,
                      '2172': 34,
                      '2173': 10,
                      '2174': 32,
                      '2175': 32,
                      '2176': 125,
                      '2177': 10,
                      '2178': 125,
                      '2179': 10
                    },
                    history: [
                      '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json'
                    ],
                    _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                    _isVinyl: true,
                    _symlink: null
                  },
                  '/home/aaqilniz/.yo-rc-global.json': {
                    stat: null,
                    _contents: null,
                    history: [
                      '/home/aaqilniz/.yo-rc-global.json'
                    ],
                    _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                    _isVinyl: true,
                    _symlink: null
                  },
                  '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json': {
                    stat: {
                      dev: 2055,
                      mode: 33279,
                      nlink: 1,
                      uid: 1000,
                      gid: 1000,
                      rdev: 0,
                      blksize: 4096,
                      ino: 2241690,
                      size: 82,
                      blocks: 1,
                      atimeMs: 1664468198390.669,
                      mtimeMs: 1664467890046.1177,
                      ctimeMs: 1664467890046.1177,
                      birthtimeMs: 0,
                      atime: new Date('2022-09-29T16:16:38.391Z'),
                      mtime: new Date('2022-09-29T16:11:30.046Z'),
                      ctime: new Date('2022-09-29T16:11:30.046Z'),
                      birthtime: new Date('1970-01-01T00:00:00.000Z')
                    },
                    _contents: {
                      '0': 123,
                      '1': 10,
                      '2': 32,
                      '3': 32,
                      '4': 34,
                      '5': 64,
                      '6': 108,
                      '7': 111,
                      '8': 111,
                      '9': 112,
                      '10': 98,
                      '11': 97,
                      '12': 99,
                      '13': 107,
                      '14': 47,
                      '15': 99,
                      '16': 108,
                      '17': 105,
                      '18': 34,
                      '19': 58,
                      '20': 32,
                      '21': 123,
                      '22': 10,
                      '23': 32,
                      '24': 32,
                      '25': 32,
                      '26': 32,
                      '27': 34,
                      '28': 112,
                      '29': 97,
                      '30': 99,
                      '31': 107,
                      '32': 97,
                      '33': 103,
                      '34': 101,
                      '35': 77,
                      '36': 97,
                      '37': 110,
                      '38': 97,
                      '39': 103,
                      '40': 101,
                      '41': 114,
                      '42': 34,
                      '43': 58,
                      '44': 32,
                      '45': 34,
                      '46': 121,
                      '47': 97,
                      '48': 114,
                      '49': 110,
                      '50': 34,
                      '51': 44,
                      '52': 10,
                      '53': 32,
                      '54': 32,
                      '55': 32,
                      '56': 32,
                      '57': 34,
                      '58': 118,
                      '59': 101,
                      '60': 114,
                      '61': 115,
                      '62': 105,
                      '63': 111,
                      '64': 110,
                      '65': 34,
                      '66': 58,
                      '67': 32,
                      '68': 34,
                      '69': 52,
                      '70': 46,
                      '71': 49,
                      '72': 46,
                      '73': 51,
                      '74': 34,
                      '75': 10,
                      '76': 32,
                      '77': 32,
                      '78': 125,
                      '79': 10,
                      '80': 125,
                      '81': 10
                    },
                    history: [
                      '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json'
                    ],
                    _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                    _isVinyl: true,
                    _symlink: null
                  }
                },
                Symbol(kCapture): false
              }
            },
            indent: 2,
            lodashPath: false,
            disableCache: false,
            disableCacheByFile: false,
            sorted: false,
            _cachedStore: {
              '@loopback/cli': {
                packageManager: 'yarn',
                version: '4.1.3'
              }
            },
            existed: true
          },
          _packageJson: undefined,
          _sourceRoot: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/templates',
          fs: {
            store: {
              _events: {
                change: [
                  (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    },
                  (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    }
                ]
              },
              _eventsCount: 1,
              _maxListeners: 0,
              store: {
                '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json': {
                  stat: null,
                  _contents: null,
                  history: [
                    '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json'
                  ],
                  _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                  _isVinyl: true,
                  _symlink: null
                },
                '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json': {
                  stat: {
                    dev: 2055,
                    mode: 33279,
                    nlink: 1,
                    uid: 1000,
                    gid: 1000,
                    rdev: 0,
                    blksize: 4096,
                    ino: 2241697,
                    size: 2180,
                    blocks: 8,
                    atimeMs: 1664473760957.5466,
                    mtimeMs: 1664473760805.593,
                    ctimeMs: 1664473760805.593,
                    birthtimeMs: 0,
                    atime: new Date('2022-09-29T17:49:20.958Z'),
                    mtime: new Date('2022-09-29T17:49:20.806Z'),
                    ctime: new Date('2022-09-29T17:49:20.806Z'),
                    birthtime: new Date('1970-01-01T00:00:00.000Z')
                  },
                  _contents: {
                    '0': 123,
                    '1': 10,
                    '2': 32,
                    '3': 32,
                    '4': 34,
                    '5': 110,
                    '6': 97,
                    '7': 109,
                    '8': 101,
                    '9': 34,
                    '10': 58,
                    '11': 32,
                    '12': 34,
                    '13': 116,
                    '14': 101,
                    '15': 115,
                    '16': 116,
                    '17': 45,
                    '18': 97,
                    '19': 112,
                    '20': 112,
                    '21': 34,
                    '22': 44,
                    '23': 10,
                    '24': 32,
                    '25': 32,
                    '26': 34,
                    '27': 118,
                    '28': 101,
                    '29': 114,
                    '30': 115,
                    '31': 105,
                    '32': 111,
                    '33': 110,
                    '34': 34,
                    '35': 58,
                    '36': 32,
                    '37': 34,
                    '38': 48,
                    '39': 46,
                    '40': 48,
                    '41': 46,
                    '42': 49,
                    '43': 34,
                    '44': 44,
                    '45': 10,
                    '46': 32,
                    '47': 32,
                    '48': 34,
                    '49': 100,
                    '50': 101,
                    '51': 115,
                    '52': 99,
                    '53': 114,
                    '54': 105,
                    '55': 112,
                    '56': 116,
                    '57': 105,
                    '58': 111,
                    '59': 110,
                    '60': 34,
                    '61': 58,
                    '62': 32,
                    '63': 34,
                    '64': 112,
                    '65': 97,
                    '66': 116,
                    '67': 114,
                    '68': 105,
                    '69': 99,
                    '70': 107,
                    '71': 34,
                    '72': 44,
                    '73': 10,
                    '74': 32,
                    '75': 32,
                    '76': 34,
                    '77': 107,
                    '78': 101,
                    '79': 121,
                    '80': 119,
                    '81': 111,
                    '82': 114,
                    '83': 100,
                    '84': 115,
                    '85': 34,
                    '86': 58,
                    '87': 32,
                    '88': 91,
                    '89': 10,
                    '90': 32,
                    '91': 32,
                    '92': 32,
                    '93': 32,
                    '94': 34,
                    '95': 108,
                    '96': 111,
                    '97': 111,
                    '98': 112,
                    '99': 98,
                    '100': 97,
                    '101': 99,
                    '102': 107,
                    '103': 45,
                    '104': 97,
                    '105': 112,
                    '106': 112,
                    '107': 108,
                    '108': 105,
                    '109': 99,
                    '110': 97,
                    '111': 116,
                    '112': 105,
                    '113': 111,
                    '114': 110,
                    '115': 34,
                    '116': 44,
                    '117': 10,
                    '118': 32,
                    '119': 32,
                    '120': 32,
                    '121': 32,
                    '122': 34,
                    '123': 108,
                    '124': 111,
                    '125': 111,
                    '126': 112,
                    '127': 98,
                    '128': 97,
                    '129': 99,
                    '130': 107,
                    '131': 34,
                    '132': 10,
                    '133': 32,
                    '134': 32,
                    '135': 93,
                    '136': 44,
                    '137': 10,
                    '138': 32,
                    '139': 32,
                    '140': 34,
                    '141': 109,
                    '142': 97,
                    '143': 105,
                    '144': 110,
                    '145': 34,
                    '146': 58,
                    '147': 32,
                    '148': 34,
                    '149': 100,
                    '150': 105,
                    '151': 115,
                    '152': 116,
                    '153': 47,
                    '154': 105,
                    '155': 110,
                    '156': 100,
                    '157': 101,
                    '158': 120,
                    '159': 46,
                    '160': 106,
                    '161': 115,
                    '162': 34,
                    '163': 44,
                    '164': 10,
                    '165': 32,
                    '166': 32,
                    '167': 34,
                    '168': 116,
                    '169': 121,
                    '170': 112,
                    '171': 101,
                    '172': 115,
                    '173': 34,
                    '174': 58,
                    '175': 32,
                    '176': 34,
                    '177': 100,
                    '178': 105,
                    '179': 115,
                    '180': 116,
                    '181': 47,
                    '182': 105,
                    '183': 110,
                    '184': 100,
                    '185': 101,
                    '186': 120,
                    '187': 46,
                    '188': 100,
                    '189': 46,
                    '190': 116,
                    '191': 115,
                    '192': 34,
                    '193': 44,
                    '194': 10,
                    '195': 32,
                    '196': 32,
                    '197': 34,
                    '198': 101,
                    '199': 110,
                    '200': 103,
                    '201': 105,
                    '202': 110,
                    '203': 101,
                    '204': 115,
                    '205': 34,
                    '206': 58,
                    '207': 32,
                    '208': 123,
                    '209': 10,
                    '210': 32,
                    '211': 32,
                    '212': 32,
                    '213': 32,
                    '214': 34,
                    '215': 110,
                    '216': 111,
                    '217': 100,
                    '218': 101,
                    '219': 34,
                    '220': 58,
                    '221': 32,
                    '222': 34,
                    '223': 49,
                    '224': 52,
                    '225': 32,
                    '226': 124,
                    '227': 124,
                    '228': 32,
                    '229': 49,
                    '230': 54,
                    '231': 32,
                    '232': 124,
                    '233': 124,
                    '234': 32,
                    '235': 49,
                    '236': 55,
                    '237': 32,
                    '238': 124,
                    '239': 124,
                    '240': 32,
                    '241': 49,
                    '242': 56,
                    '243': 34,
                    '244': 10,
                    '245': 32,
                    '246': 32,
                    '247': 125,
                    '248': 44,
                    '249': 10,
                    '250': 32,
                    '251': 32,
                    '252': 34,
                    '253': 115,
                    '254': 99,
                    '255': 114,
                    '256': 105,
                    '257': 112,
                    '258': 116,
                    '259': 115,
                    '260': 34,
                    '261': 58,
                    '262': 32,
                    '263': 123,
                    '264': 10,
                    '265': 32,
                    '266': 32,
                    '267': 32,
                    '268': 32,
                    '269': 34,
                    '270': 98,
                    '271': 117,
                    '272': 105,
                    '273': 108,
                    '274': 100,
                    '275': 34,
                    '276': 58,
                    '277': 32,
                    '278': 34,
                    '279': 108,
                    '280': 98,
                    '281': 45,
                    '282': 116,
                    '283': 115,
                    '284': 99,
                    '285': 34,
                    '286': 44,
                    '287': 10,
                    '288': 32,
                    '289': 32,
                    '290': 32,
                    '291': 32,
                    '292': 34,
                    '293': 98,
                    '294': 117,
                    '295': 105,
                    '296': 108,
                    '297': 100,
                    '298': 58,
                    '299': 119,
                    '300': 97,
                    '301': 116,
                    '302': 99,
                    '303': 104,
                    '304': 34,
                    '305': 58,
                    '306': 32,
                    '307': 34,
                    '308': 108,
                    '309': 98,
                    '310': 45,
                    '311': 116,
                    '312': 115,
                    '313': 99,
                    '314': 32,
                    '315': 45,
                    '316': 45,
                    '317': 119,
                    '318': 97,
                    '319': 116,
                    '320': 99,
                    '321': 104,
                    '322': 34,
                    '323': 44,
                    '324': 10,
                    '325': 32,
                    '326': 32,
                    '327': 32,
                    '328': 32,
                    '329': 34,
                    '330': 108,
                    '331': 105,
                    '332': 110,
                    '333': 116,
                    '334': 34,
                    '335': 58,
                    '336': 32,
                    '337': 34,
                    '338': 121,
                    '339': 97,
                    '340': 114,
                    '341': 110,
                    '342': 32,
                    '343': 114,
                    '344': 117,
                    '345': 110,
                    '346': 32,
                    '347': 101,
                    '348': 115,
                    '349': 108,
                    '350': 105,
                    '351': 110,
                    '352': 116,
                    '353': 32,
                    '354': 38,
                    '355': 38,
                    '356': 32,
                    '357': 121,
                    '358': 97,
                    '359': 114,
                    '360': 110,
                    '361': 32,
                    '362': 114,
                    '363': 117,
                    '364': 110,
                    '365': 32,
                    '366': 112,
                    '367': 114,
                    '368': 101,
                    '369': 116,
                    '370': 116,
                    '371': 105,
                    '372': 101,
                    '373': 114,
                    '374': 58,
                    '375': 99,
                    '376': 104,
                    '377': 101,
                    '378': 99,
                    '379': 107,
                    '380': 34,
                    '381': 44,
                    '382': 10,
                    '383': 32,
                    '384': 32,
                    '385': 32,
                    '386': 32,
                    '387': 34,
                    '388': 108,
                    '389': 105,
                    '390': 110,
                    '391': 116,
                    '392': 58,
                    '393': 102,
                    '394': 105,
                    '395': 120,
                    '396': 34,
                    '397': 58,
                    '398': 32,
                    '399': 34,
                    '400': 121,
                    '401': 97,
                    '402': 114,
                    '403': 110,
                    '404': 32,
                    '405': 114,
                    '406': 117,
                    '407': 110,
                    '408': 32,
                    '409': 101,
                    '410': 115,
                    '411': 108,
                    '412': 105,
                    '413': 110,
                    '414': 116,
                    '415': 58,
                    '416': 102,
                    '417': 105,
                    '418': 120,
                    '419': 32,
                    '420': 38,
                    '421': 38,
                    '422': 32,
                    '423': 121,
                    '424': 97,
                    '425': 114,
                    '426': 110,
                    '427': 32,
                    '428': 114,
                    '429': 117,
                    '430': 110,
                    '431': 32,
                    '432': 112,
                    '433': 114,
                    '434': 101,
                    '435': 116,
                    '436': 116,
                    '437': 105,
                    '438': 101,
                    '439': 114,
                    '440': 58,
                    '441': 102,
                    '442': 105,
                    '443': 120,
                    '444': 34,
                    '445': 44,
                    '446': 10,
                    '447': 32,
                    '448': 32,
                    '449': 32,
                    '450': 32,
                    '451': 34,
                    '452': 112,
                    '453': 114,
                    '454': 101,
                    '455': 116,
                    '456': 116,
                    '457': 105,
                    '458': 101,
                    '459': 114,
                    '460': 58,
                    '461': 99,
                    '462': 108,
                    '463': 105,
                    '464': 34,
                    '465': 58,
                    '466': 32,
                    '467': 34,
                    '468': 108,
                    '469': 98,
                    '470': 45,
                    '471': 112,
                    '472': 114,
                    '473': 101,
                    '474': 116,
                    '475': 116,
                    '476': 105,
                    '477': 101,
                    '478': 114,
                    '479': 32,
                    '480': 92,
                    '481': 34,
                    '482': 42,
                    '483': 42,
                    '484': 47,
                    '485': 42,
                    '486': 46,
                    '487': 116,
                    '488': 115,
                    '489': 92,
                    '490': 34,
                    '491': 32,
                    '492': 92,
                    '493': 34,
                    '494': 42,
                    '495': 42,
                    '496': 47,
                    '497': 42,
                    '498': 46,
                    '499': 106,
                    '500': 115,
                    '501': 92,
                    '502': 34,
                    '503': 34,
                    '504': 44,
                    '505': 10,
                    '506': 32,
                    '507': 32,
                    '508': 32,
                    '509': 32,
                    '510': 34,
                    '511': 112,
                    '512': 114,
                    '513': 101,
                    '514': 116,
                    '515': 116,
                    '516': 105,
                    '517': 101,
                    '518': 114,
                    '519': 58,
                    '520': 99,
                    '521': 104,
                    '522': 101,
                    '523': 99,
                    '524': 107,
                    '525': 34,
                    '526': 58,
                    '527': 32,
                    '528': 34,
                    '529': 121,
                    '530': 97,
                    '531': 114,
                    '532': 110,
                    '533': 32,
                    '534': 114,
                    '535': 117,
                    '536': 110,
                    '537': 32,
                    '538': 112,
                    '539': 114,
                    '540': 101,
                    '541': 116,
                    '542': 116,
                    '543': 105,
                    '544': 101,
                    '545': 114,
                    '546': 58,
                    '547': 99,
                    '548': 108,
                    '549': 105,
                    '550': 32,
                    '551': 45,
                    '552': 108,
                    '553': 34,
                    '554': 44,
                    '555': 10,
                    '556': 32,
                    '557': 32,
                    '558': 32,
                    '559': 32,
                    '560': 34,
                    '561': 112,
                    '562': 114,
                    '563': 101,
                    '564': 116,
                    '565': 116,
                    '566': 105,
                    '567': 101,
                    '568': 114,
                    '569': 58,
                    '570': 102,
                    '571': 105,
                    '572': 120,
                    '573': 34,
                    '574': 58,
                    '575': 32,
                    '576': 34,
                    '577': 121,
                    '578': 97,
                    '579': 114,
                    '580': 110,
                    '581': 32,
                    '582': 114,
                    '583': 117,
                    '584': 110,
                    '585': 32,
                    '586': 112,
                    '587': 114,
                    '588': 101,
                    '589': 116,
                    '590': 116,
                    '591': 105,
                    '592': 101,
                    '593': 114,
                    '594': 58,
                    '595': 99,
                    '596': 108,
                    '597': 105,
                    '598': 32,
                    '599': 45,
                    '600': 45,
                    '601': 119,
                    '602': 114,
                    '603': 105,
                    '604': 116,
                    '605': 101,
                    '606': 34,
                    '607': 44,
                    '608': 10,
                    '609': 32,
                    '610': 32,
                    '611': 32,
                    '612': 32,
                    '613': 34,
                    '614': 101,
                    '615': 115,
                    '616': 108,
                    '617': 105,
                    '618': 110,
                    '619': 116,
                    '620': 34,
                    '621': 58,
                    '622': 32,
                    '623': 34,
                    '624': 108,
                    '625': 98,
                    '626': 45,
                    '627': 101,
                    '628': 115,
                    '629': 108,
                    '630': 105,
                    '631': 110,
                    '632': 116,
                    '633': 32,
                    '634': 45,
                    '635': 45,
                    '636': 114,
                    '637': 101,
                    '638': 112,
                    '639': 111,
                    '640': 114,
                    '641': 116,
                    '642': 45,
                    '643': 117,
                    '644': 110,
                    '645': 117,
                    '646': 115,
                    '647': 101,
                    '648': 100,
                    '649': 45,
                    '650': 100,
                    '651': 105,
                    '652': 115,
                    '653': 97,
                    '654': 98,
                    '655': 108,
                    '656': 101,
                    '657': 45,
                    '658': 100,
                    '659': 105,
                    '660': 114,
                    '661': 101,
                    '662': 99,
                    '663': 116,
                    '664': 105,
                    '665': 118,
                    '666': 101,
                    '667': 115,
                    '668': 32,
                    '669': 46,
                    '670': 34,
                    '671': 44,
                    '672': 10,
                    '673': 32,
                    '674': 32,
                    '675': 32,
                    '676': 32,
                    '677': 34,
                    '678': 101,
                    '679': 115,
                    '680': 108,
                    '681': 105,
                    '682': 110,
                    '683': 116,
                    '684': 58,
                    '685': 102,
                    '686': 105,
                    '687': 120,
                    '688': 34,
                    '689': 58,
                    '690': 32,
                    '691': 34,
                    '692': 121,
                    '693': 97,
                    '694': 114,
                    '695': 110,
                    '696': 32,
                    '697': 114,
                    '698': 117,
                    '699': 110,
                    '700': 32,
                    '701': 101,
                    '702': 115,
                    '703': 108,
                    '704': 105,
                    '705': 110,
                    '706': 116,
                    '707': 32,
                    '708': 45,
                    '709': 45,
                    '710': 102,
                    '711': 105,
                    '712': 120,
                    '713': 34,
                    '714': 44,
                    '715': 10,
                    '716': 32,
                    '717': 32,
                    '718': 32,
                    '719': 32,
                    '720': 34,
                    '721': 112,
                    '722': 114,
                    '723': 101,
                    '724': 116,
                    '725': 101,
                    '726': 115,
                    '727': 116,
                    '728': 34,
                    '729': 58,
                    '730': 32,
                    '731': 34,
                    '732': 121,
                    '733': 97,
                    '734': 114,
                    '735': 110,
                    '736': 32,
                    '737': 114,
                    '738': 117,
                    '739': 110,
                    '740': 32,
                    '741': 114,
                    '742': 101,
                    '743': 98,
                    '744': 117,
                    '745': 105,
                    '746': 108,
                    '747': 100,
                    '748': 34,
                    '749': 44,
                    '750': 10,
                    '751': 32,
                    '752': 32,
                    '753': 32,
                    '754': 32,
                    '755': 34,
                    '756': 116,
                    '757': 101,
                    '758': 115,
                    '759': 116,
                    '760': 34,
                    '761': 58,
                    '762': 32,
                    '763': 34,
                    '764': 108,
                    '765': 98,
                    '766': 45,
                    '767': 109,
                    '768': 111,
                    '769': 99,
                    '770': 104,
                    '771': 97,
                    '772': 32,
                    '773': 45,
                    '774': 45,
                    '775': 97,
                    '776': 108,
                    '777': 108,
                    '778': 111,
                    '779': 119,
                    '780': 45,
                    '781': 99,
                    '782': 111,
                    '783': 110,
                    '784': 115,
                    '785': 111,
                    '786': 108,
                    '787': 101,
                    '788': 45,
                    '789': 108,
                    '790': 111,
                    '791': 103,
                    '792': 115,
                    '793': 32,
                    '794': 92,
                    '795': 34,
                    '796': 100,
                    '797': 105,
                    '798': 115,
                    '799': 116,
                    '800': 47,
                    '801': 95,
                    '802': 95,
                    '803': 116,
                    '804': 101,
                    '805': 115,
                    '806': 116,
                    '807': 115,
                    '808': 95,
                    '809': 95,
                    '810': 92,
                    '811': 34,
                    '812': 34,
                    '813': 44,
                    '814': 10,
                    '815': 32,
                    '816': 32,
                    '817': 32,
                    '818': 32,
                    '819': 34,
                    '820': 112,
                    '821': 111,
                    '822': 115,
                    '823': 116,
                    '824': 116,
                    '825': 101,
                    '826': 115,
                    '827': 116,
                    '828': 34,
                    '829': 58,
                    '830': 32,
                    '831': 34,
                    '832': 121,
                    '833': 97,
                    '834': 114,
                    '835': 110,
                    '836': 32,
                    '837': 114,
                    '838': 117,
                    '839': 110,
                    '840': 32,
                    '841': 108,
                    '842': 105,
                    '843': 110,
                    '844': 116,
                    '845': 34,
                    '846': 44,
                    '847': 10,
                    '848': 32,
                    '849': 32,
                    '850': 32,
                    '851': 32,
                    '852': 34,
                    '853': 116,
                    '854': 101,
                    '855': 115,
                    '856': 116,
                    '857': 58,
                    '858': 100,
                    '859': 101,
                    '860': 118,
                    '861': 34,
                    '862': 58,
                    '863': 32,
                    '864': 34,
                    '865': 108,
                    '866': 98,
                    '867': 45,
                    '868': 109,
                    '869': 111,
                    '870': 99,
                    '871': 104,
                    '872': 97,
                    '873': 32,
                    '874': 45,
                    '875': 45,
                    '876': 97,
                    '877': 108,
                    '878': 108,
                    '879': 111,
                    '880': 119,
                    '881': 45,
                    '882': 99,
                    '883': 111,
                    '884': 110,
                    '885': 115,
                    '886': 111,
                    '887': 108,
                    '888': 101,
                    '889': 45,
                    '890': 108,
                    '891': 111,
                    '892': 103,
                    '893': 115,
                    '894': 32,
                    '895': 100,
                    '896': 105,
                    '897': 115,
                    '898': 116,
                    '899': 47,
                    '900': 95,
                    '901': 95,
                    '902': 116,
                    '903': 101,
                    '904': 115,
                    '905': 116,
                    '906': 115,
                    '907': 95,
                    '908': 95,
                    '909': 47,
                    '910': 42,
                    '911': 42,
                    '912': 47,
                    '913': 42,
                    '914': 46,
                    '915': 106,
                    '916': 115,
                    '917': 32,
                    '918': 38,
                    '919': 38,
                    '920': 32,
                    '921': 121,
                    '922': 97,
                    '923': 114,
                    '924': 110,
                    '925': 32,
                    '926': 114,
                    '927': 117,
                    '928': 110,
                    '929': 32,
                    '930': 112,
                    '931': 111,
                    '932': 115,
                    '933': 116,
                    '934': 116,
                    '935': 101,
                    '936': 115,
                    '937': 116,
                    '938': 34,
                    '939': 44,
                    '940': 10,
                    '941': 32,
                    '942': 32,
                    '943': 32,
                    '944': 32,
                    '945': 34,
                    '946': 100,
                    '947': 111,
                    '948': 99,
                    '949': 107,
                    '950': 101,
                    '951': 114,
                    '952': 58,
                    '953': 98,
                    '954': 117,
                    '955': 105,
                    '956': 108,
                    '957': 100,
                    '958': 34,
                    '959': 58,
                    '960': 32,
                    '961': 34,
                    '962': 100,
                    '963': 111,
                    '964': 99,
                    '965': 107,
                    '966': 101,
                    '967': 114,
                    '968': 32,
                    '969': 98,
                    '970': 117,
                    '971': 105,
                    '972': 108,
                    '973': 100,
                    '974': 32,
                    '975': 45,
                    '976': 116,
                    '977': 32,
                    '978': 116,
                    '979': 101,
                    '980': 115,
                    '981': 116,
                    '982': 45,
                    '983': 97,
                    '984': 112,
                    '985': 112,
                    '986': 32,
                    '987': 46,
                    '988': 34,
                    '989': 44,
                    '990': 10,
                    '991': 32,
                    '992': 32,
                    '993': 32,
                    '994': 32,
                    '995': 34,
                    '996': 100,
                    '997': 111,
                    '998': 99,
                    '999': 107,
                    '1000': 101,
                    '1001': 114,
                    '1002': 58,
                    '1003': 114,
                    '1004': 117,
                    '1005': 110,
                    '1006': 34,
                    '1007': 58,
                    '1008': 32,
                    '1009': 34,
                    '1010': 100,
                    '1011': 111,
                    '1012': 99,
                    '1013': 107,
                    '1014': 101,
                    '1015': 114,
                    '1016': 32,
                    '1017': 114,
                    '1018': 117,
                    '1019': 110,
                    '1020': 32,
                    '1021': 45,
                    '1022': 112,
                    '1023': 32,
                    '1024': 51,
                    '1025': 48,
                    '1026': 48,
                    '1027': 48,
                    '1028': 58,
                    '1029': 51,
                    '1030': 48,
                    '1031': 48,
                    '1032': 48,
                    '1033': 32,
                    '1034': 45,
                    '1035': 100,
                    '1036': 32,
                    '1037': 116,
                    '1038': 101,
                    '1039': 115,
                    '1040': 116,
                    '1041': 45,
                    '1042': 97,
                    '1043': 112,
                    '1044': 112,
                    '1045': 34,
                    '1046': 44,
                    '1047': 10,
                    '1048': 32,
                    '1049': 32,
                    '1050': 32,
                    '1051': 32,
                    '1052': 34,
                    '1053': 112,
                    '1054': 114,
                    '1055': 101,
                    '1056': 109,
                    '1057': 105,
                    '1058': 103,
                    '1059': 114,
                    '1060': 97,
                    '1061': 116,
                    '1062': 101,
                    '1063': 34,
                    '1064': 58,
                    '1065': 32,
                    '1066': 34,
                    '1067': 121,
                    '1068': 97,
                    '1069': 114,
                    '1070': 110,
                    '1071': 32,
                    '1072': 114,
                    '1073': 117,
                    '1074': 110,
                    '1075': 32,
                    '1076': 98,
                    '1077': 117,
                    '1078': 105,
                    '1079': 108,
                    '1080': 100,
                    '1081': 34,
                    '1082': 44,
                    '1083': 10,
                    '1084': 32,
                    '1085': 32,
                    '1086': 32,
                    '1087': 32,
                    '1088': 34,
                    '1089': 109,
                    '1090': 105,
                    '1091': 103,
                    '1092': 114,
                    '1093': 97,
                    '1094': 116,
                    '1095': 101,
                    '1096': 34,
                    '1097': 58,
                    '1098': 32,
                    '1099': 34,
                    '1100': 110,
                    '1101': 111,
                    '1102': 100,
                    '1103': 101,
                    '1104': 32,
                    '1105': 46,
                    '1106': 47,
                    '1107': 100,
                    '1108': 105,
                    '1109': 115,
                    '1110': 116,
                    '1111': 47,
                    '1112': 109,
                    '1113': 105,
                    '1114': 103,
                    '1115': 114,
                    '1116': 97,
                    '1117': 116,
                    '1118': 101,
                    '1119': 34,
                    '1120': 44,
                    '1121': 10,
                    '1122': 32,
                    '1123': 32,
                    '1124': 32,
                    '1125': 32,
                    '1126': 34,
                    '1127': 112,
                    '1128': 114,
                    '1129': 101,
                    '1130': 111,
                    '1131': 112,
                    '1132': 101,
                    '1133': 110,
                    '1134': 97,
                    '1135': 112,
                    '1136': 105,
                    '1137': 45,
                    '1138': 115,
                    '1139': 112,
                    '1140': 101,
                    '1141': 99,
                    '1142': 34,
                    '1143': 58,
                    '1144': 32,
                    '1145': 34,
                    '1146': 121,
                    '1147': 97,
                    '1148': 114,
                    '1149': 110,
                    '1150': 32,
                    '1151': 114,
                    '1152': 117,
                    '1153': 110,
                    '1154': 32,
                    '1155': 98,
                    '1156': 117,
                    '1157': 105,
                    '1158': 108,
                    '1159': 100,
                    '1160': 34,
                    '1161': 44,
                    '1162': 10,
                    '1163': 32,
                    '1164': 32,
                    '1165': 32,
                    '1166': 32,
                    '1167': 34,
                    '1168': 111,
                    '1169': 112,
                    '1170': 101,
                    '1171': 110,
                    '1172': 97,
                    '1173': 112,
                    '1174': 105,
                    '1175': 45,
                    '1176': 115,
                    '1177': 112,
                    '1178': 101,
                    '1179': 99,
                    '1180': 34,
                    '1181': 58,
                    '1182': 32,
                    '1183': 34,
                    '1184': 110,
                    '1185': 111,
                    '1186': 100,
                    '1187': 101,
                    '1188': 32,
                    '1189': 46,
                    '1190': 47,
                    '1191': 100,
                    '1192': 105,
                    '1193': 115,
                    '1194': 116,
                    '1195': 47,
                    '1196': 111,
                    '1197': 112,
                    '1198': 101,
                    '1199': 110,
                    '1200': 97,
                    '1201': 112,
                    '1202': 105,
                    '1203': 45,
                    '1204': 115,
                    '1205': 112,
                    '1206': 101,
                    '1207': 99,
                    '1208': 34,
                    '1209': 44,
                    '1210': 10,
                    '1211': 32,
                    '1212': 32,
                    '1213': 32,
                    '1214': 32,
                    '1215': 34,
                    '1216': 112,
                    '1217': 114,
                    '1218': 101,
                    '1219': 115,
                    '1220': 116,
                    '1221': 97,
                    '1222': 114,
                    '1223': 116,
                    '1224': 34,
                    '1225': 58,
                    '1226': 32,
                    '1227': 34,
                    '1228': 121,
                    '1229': 97,
                    '1230': 114,
                    '1231': 110,
                    '1232': 32,
                    '1233': 114,
                    '1234': 117,
                    '1235': 110,
                    '1236': 32,
                    '1237': 114,
                    '1238': 101,
                    '1239': 98,
                    '1240': 117,
                    '1241': 105,
                    '1242': 108,
                    '1243': 100,
                    '1244': 34,
                    '1245': 44,
                    '1246': 10,
                    '1247': 32,
                    '1248': 32,
                    '1249': 32,
                    '1250': 32,
                    '1251': 34,
                    '1252': 115,
                    '1253': 116,
                    '1254': 97,
                    '1255': 114,
                    '1256': 116,
                    '1257': 34,
                    '1258': 58,
                    '1259': 32,
                    '1260': 34,
                    '1261': 110,
                    '1262': 111,
                    '1263': 100,
                    '1264': 101,
                    '1265': 32,
                    '1266': 45,
                    '1267': 114,
                    '1268': 32,
                    '1269': 115,
                    '1270': 111,
                    '1271': 117,
                    '1272': 114,
                    '1273': 99,
                    '1274': 101,
                    '1275': 45,
                    '1276': 109,
                    '1277': 97,
                    '1278': 112,
                    '1279': 45,
                    '1280': 115,
                    '1281': 117,
                    '1282': 112,
                    '1283': 112,
                    '1284': 111,
                    '1285': 114,
                    '1286': 116,
                    '1287': 47,
                    '1288': 114,
                    '1289': 101,
                    '1290': 103,
                    '1291': 105,
                    '1292': 115,
                    '1293': 116,
                    '1294': 101,
                    '1295': 114,
                    '1296': 32,
                    '1297': 46,
                    '1298': 34,
                    '1299': 44,
                    '1300': 10,
                    '1301': 32,
                    '1302': 32,
                    '1303': 32,
                    '1304': 32,
                    '1305': 34,
                    '1306': 99,
                    '1307': 108,
                    '1308': 101,
                    '1309': 97,
                    '1310': 110,
                    '1311': 34,
                    '1312': 58,
                    '1313': 32,
                    '1314': 34,
                    '1315': 108,
                    '1316': 98,
                    '1317': 45,
                    '1318': 99,
                    '1319': 108,
                    '1320': 101,
                    '1321': 97,
                    '1322': 110,
                    '1323': 32,
                    '1324': 100,
                    '1325': 105,
                    '1326': 115,
                    '1327': 116,
                    '1328': 32,
                    '1329': 42,
                    '1330': 46,
                    '1331': 116,
                    '1332': 115,
                    '1333': 98,
                    '1334': 117,
                    '1335': 105,
                    '1336': 108,
                    '1337': 100,
                    '1338': 105,
                    '1339': 110,
                    '1340': 102,
                    '1341': 111,
                    '1342': 32,
                    '1343': 46,
                    '1344': 101,
                    '1345': 115,
                    '1346': 108,
                    '1347': 105,
                    '1348': 110,
                    '1349': 116,
                    '1350': 99,
                    '1351': 97,
                    '1352': 99,
                    '1353': 104,
                    '1354': 101,
                    '1355': 34,
                    '1356': 44,
                    '1357': 10,
                    '1358': 32,
                    '1359': 32,
                    '1360': 32,
                    '1361': 32,
                    '1362': 34,
                    '1363': 114,
                    '1364': 101,
                    '1365': 98,
                    '1366': 117,
                    '1367': 105,
                    '1368': 108,
                    '1369': 100,
                    '1370': 34,
                    '1371': 58,
                    '1372': 32,
                    '1373': 34,
                    '1374': 121,
                    '1375': 97,
                    '1376': 114,
                    '1377': 110,
                    '1378': 32,
                    '1379': 114,
                    '1380': 117,
                    '1381': 110,
                    '1382': 32,
                    '1383': 99,
                    '1384': 108,
                    '1385': 101,
                    '1386': 97,
                    '1387': 110,
                    '1388': 32,
                    '1389': 38,
                    '1390': 38,
                    '1391': 32,
                    '1392': 121,
                    '1393': 97,
                    '1394': 114,
                    '1395': 110,
                    '1396': 32,
                    '1397': 114,
                    '1398': 117,
                    '1399': 110,
                    '1400': 32,
                    '1401': 98,
                    '1402': 117,
                    '1403': 105,
                    '1404': 108,
                    '1405': 100,
                    '1406': 34,
                    '1407': 10,
                    '1408': 32,
                    '1409': 32,
                    '1410': 125,
                    '1411': 44,
                    '1412': 10,
                    '1413': 32,
                    '1414': 32,
                    '1415': 34,
                    '1416': 114,
                    '1417': 101,
                    '1418': 112,
                    '1419': 111,
                    '1420': 115,
                    '1421': 105,
                    '1422': 116,
                    '1423': 111,
                    '1424': 114,
                    '1425': 121,
                    '1426': 34,
                    '1427': 58,
                    '1428': 32,
                    '1429': 123,
                    '1430': 10,
                    '1431': 32,
                    '1432': 32,
                    '1433': 32,
                    '1434': 32,
                    '1435': 34,
                    '1436': 116,
                    '1437': 121,
                    '1438': 112,
                    '1439': 101,
                    '1440': 34,
                    '1441': 58,
                    '1442': 32,
                    '1443': 34,
                    '1444': 103,
                    '1445': 105,
                    '1446': 116,
                    '1447': 34,
                    '1448': 44,
                    '1449': 10,
                    '1450': 32,
                    '1451': 32,
                    '1452': 32,
                    '1453': 32,
                    '1454': 34,
                    '1455': 117,
                    '1456': 114,
                    '1457': 108,
                    '1458': 34,
                    '1459': 58,
                    '1460': 32,
                    '1461': 34,
                    '1462': 34,
                    '1463': 10,
                    '1464': 32,
                    '1465': 32,
                    '1466': 125,
                    '1467': 44,
                    '1468': 10,
                    '1469': 32,
                    '1470': 32,
                    '1471': 34,
                    '1472': 97,
                    '1473': 117,
                    '1474': 116,
                    '1475': 104,
                    '1476': 111,
                    '1477': 114,
                    '1478': 34,
                    '1479': 58,
                    '1480': 32,
                    '1481': 34,
                    '1482': 77,
                    '1483': 117,
                    '1484': 104,
                    '1485': 97,
                    '1486': 109,
                    '1487': 109,
                    '1488': 97,
                    '1489': 100,
                    '1490': 32,
                    '1491': 65,
                    '1492': 97,
                    '1493': 113,
                    '1494': 105,
                    '1495': 108,
                    '1496': 32,
                    '1497': 60,
                    '1498': 97,
                    '1499': 97,
                    '1500': 113,
                    '1501': 105,
                    '1502': 108,
                    '1503': 110,
                    '1504': 105,
                    '1505': 122,
                    '1506': 64,
                    '1507': 121,
                    '1508': 97,
                    '1509': 104,
                    '1510': 111,
                    '1511': 111,
                    '1512': 46,
                    '1513': 99,
                    '1514': 111,
                    '1515': 109,
                    '1516': 62,
                    '1517': 34,
                    '1518': 44,
                    '1519': 10,
                    '1520': 32,
                    '1521': 32,
                    '1522': 34,
                    '1523': 108,
                    '1524': 105,
                    '1525': 99,
                    '1526': 101,
                    '1527': 110,
                    '1528': 115,
                    '1529': 101,
                    '1530': 34,
                    '1531': 58,
                    '1532': 32,
                    '1533': 34,
                    '1534': 34,
                    '1535': 44,
                    '1536': 10,
                    '1537': 32,
                    '1538': 32,
                    '1539': 34,
                    '1540': 102,
                    '1541': 105,
                    '1542': 108,
                    '1543': 101,
                    '1544': 115,
                    '1545': 34,
                    '1546': 58,
                    '1547': 32,
                    '1548': 91,
                    '1549': 10,
                    '1550': 32,
                    '1551': 32,
                    '1552': 32,
                    '1553': 32,
                    '1554': 34,
                    '1555': 82,
                    '1556': 69,
                    '1557': 65,
                    '1558': 68,
                    '1559': 77,
                    '1560': 69,
                    '1561': 46,
                    '1562': 109,
                    '1563': 100,
                    '1564': 34,
                    '1565': 44,
                    '1566': 10,
                    '1567': 32,
                    '1568': 32,
                    '1569': 32,
                    '1570': 32,
                    '1571': 34,
                    '1572': 100,
                    '1573': 105,
                    '1574': 115,
                    '1575': 116,
                    '1576': 34,
                    '1577': 44,
                    '1578': 10,
                    '1579': 32,
                    '1580': 32,
                    '1581': 32,
                    '1582': 32,
                    '1583': 34,
                    '1584': 115,
                    '1585': 114,
                    '1586': 99,
                    '1587': 34,
                    '1588': 44,
                    '1589': 10,
                    '1590': 32,
                    '1591': 32,
                    '1592': 32,
                    '1593': 32,
                    '1594': 34,
                    '1595': 33,
                    '1596': 42,
                    '1597': 47,
                    '1598': 95,
                    '1599': 95,
                    '1600': 116,
                    '1601': 101,
                    '1602': 115,
                    '1603': 116,
                    '1604': 115,
                    '1605': 95,
                    '1606': 95,
                    '1607': 34,
                    '1608': 10,
                    '1609': 32,
                    '1610': 32,
                    '1611': 93,
                    '1612': 44,
                    '1613': 10,
                    '1614': 32,
                    '1615': 32,
                    '1616': 34,
                    '1617': 100,
                    '1618': 101,
                    '1619': 112,
                    '1620': 101,
                    '1621': 110,
                    '1622': 100,
                    '1623': 101,
                    '1624': 110,
                    '1625': 99,
                    '1626': 105,
                    '1627': 101,
                    '1628': 115,
                    '1629': 34,
                    '1630': 58,
                    '1631': 32,
                    '1632': 123,
                    '1633': 10,
                    '1634': 32,
                    '1635': 32,
                    '1636': 32,
                    '1637': 32,
                    '1638': 34,
                    '1639': 64,
                    '1640': 108,
                    '1641': 111,
                    '1642': 111,
                    '1643': 112,
                    '1644': 98,
                    '1645': 97,
                    '1646': 99,
                    '1647': 107,
                    '1648': 47,
                    '1649': 98,
                    '1650': 111,
                    '1651': 111,
                    '1652': 116,
                    '1653': 34,
                    '1654': 58,
                    '1655': 32,
                    '1656': 34,
                    '1657': 94,
                    '1658': 53,
                    '1659': 46,
                    '1660': 48,
                    '1661': 46,
                    '1662': 51,
                    '1663': 34,
                    '1664': 44,
                    '1665': 10,
                    '1666': 32,
                    '1667': 32,
                    '1668': 32,
                    '1669': 32,
                    '1670': 34,
                    '1671': 64,
                    '1672': 108,
                    '1673': 111,
                    '1674': 111,
                    '1675': 112,
                    '1676': 98,
                    '1677': 97,
                    '1678': 99,
                    '1679': 107,
                    '1680': 47,
                    '1681': 99,
                    '1682': 111,
                    '1683': 114,
                    '1684': 101,
                    '1685': 34,
                    '1686': 58,
                    '1687': 32,
                    '1688': 34,
                    '1689': 94,
                    '1690': 52,
                    '1691': 46,
                    '1692': 48,
                    '1693': 46,
                    '1694': 51,
                    '1695': 34,
                    '1696': 44,
                    '1697': 10,
                    '1698': 32,
                    '1699': 32,
                    '1700': 32,
                    '1701': 32,
                    '1702': 34,
                    '1703': 64,
                    '1704': 108,
                    '1705': 111,
                    '1706': 111,
                    '1707': 112,
                    '1708': 98,
                    '1709': 97,
                    '1710': 99,
                    '1711': 107,
                    '1712': 47,
                    '1713': 114,
                    '1714': 101,
                    '1715': 112,
                    '1716': 111,
                    '1717': 115,
                    '1718': 105,
                    '1719': 116,
                    '1720': 111,
                    '1721': 114,
                    '1722': 121,
                    '1723': 34,
                    '1724': 58,
                    '1725': 32,
                    '1726': 34,
                    '1727': 94,
                    '1728': 53,
                    '1729': 46,
                    '1730': 48,
                    '1731': 46,
                    '1732': 51,
                    '1733': 34,
                    '1734': 44,
                    '1735': 10,
                    '1736': 32,
                    '1737': 32,
                    '1738': 32,
                    '1739': 32,
                    '1740': 34,
                    '1741': 64,
                    '1742': 108,
                    '1743': 111,
                    '1744': 111,
                    '1745': 112,
                    '1746': 98,
                    '1747': 97,
                    '1748': 99,
                    '1749': 107,
                    '1750': 47,
                    '1751': 114,
                    '1752': 101,
                    '1753': 115,
                    '1754': 116,
                    '1755': 34,
                    '1756': 58,
                    '1757': 32,
                    '1758': 34,
                    '1759': 94,
                    '1760': 49,
                    '1761': 50,
                    '1762': 46,
                    '1763': 48,
                    '1764': 46,
                    '1765': 51,
                    '1766': 34,
                    '1767': 44,
                    '1768': 10,
                    '1769': 32,
                    '1770': 32,
                    '1771': 32,
                    '1772': 32,
                    '1773': 34,
                    '1774': 64,
                    '1775': 108,
                    '1776': 111,
                    '1777': 111,
                    '1778': 112,
                    '1779': 98,
                    '1780': 97,
                    '1781': 99,
                    '1782': 107,
                    '1783': 47,
                    '1784': 114,
                    '1785': 101,
                    '1786': 115,
                    '1787': 116,
                    '1788': 45,
                    '1789': 101,
                    '1790': 120,
                    '1791': 112,
                    '1792': 108,
                    '1793': 111,
                    '1794': 114,
                    '1795': 101,
                    '1796': 114,
                    '1797': 34,
                    '1798': 58,
                    '1799': 32,
                    '1800': 34,
                    '1801': 94,
                    '1802': 53,
                    '1803': 46,
                    '1804': 48,
                    '1805': 46,
                    '1806': 51,
                    '1807': 34,
                    '1808': 44,
                    '1809': 10,
                    '1810': 32,
                    '1811': 32,
                    '1812': 32,
                    '1813': 32,
                    '1814': 34,
                    '1815': 64,
                    '1816': 108,
                    '1817': 111,
                    '1818': 111,
                    '1819': 112,
                    '1820': 98,
                    '1821': 97,
                    '1822': 99,
                    '1823': 107,
                    '1824': 47,
                    '1825': 115,
                    '1826': 101,
                    '1827': 114,
                    '1828': 118,
                    '1829': 105,
                    '1830': 99,
                    '1831': 101,
                    '1832': 45,
                    '1833': 112,
                    '1834': 114,
                    '1835': 111,
                    '1836': 120,
                    '1837': 121,
                    '1838': 34,
                    '1839': 58,
                    '1840': 32,
                    '1841': 34,
                    '1842': 94,
                    '1843': 53,
                    '1844': 46,
                    '1845': 48,
                    '1846': 46,
                    '1847': 51,
                    '1848': 34,
                    '1849': 44,
                    '1850': 10,
                    '1851': 32,
                    '1852': 32,
                    '1853': 32,
                    '1854': 32,
                    '1855': 34,
                    '1856': 108,
                    '1857': 111,
                    '1858': 111,
                    '1859': 112,
                    '1860': 98,
                    '1861': 97,
                    '1862': 99,
                    '1863': 107,
                    '1864': 45,
                    '1865': 99,
                    '1866': 111,
                    '1867': 110,
                    '1868': 110,
                    '1869': 101,
                    '1870': 99,
                    '1871': 116,
                    '1872': 111,
                    '1873': 114,
                    '1874': 45,
                    '1875': 109,
                    '1876': 121,
                    '1877': 115,
                    '1878': 113,
                    '1879': 108,
                    '1880': 34,
                    '1881': 58,
                    '1882': 32,
                    '1883': 34,
                    '1884': 94,
                    '1885': 53,
                    '1886': 46,
                    '1887': 51,
                    '1888': 46,
                    '1889': 48,
                    '1890': 34,
                    '1891': 44,
                    '1892': 10,
                    '1893': 32,
                    '1894': 32,
                    '1895': 32,
                    '1896': 32,
                    '1897': 34,
                    '1898': 116,
                    '1899': 115,
                    '1900': 108,
                    '1901': 105,
                    '1902': 98,
                    '1903': 34,
                    '1904': 58,
                    '1905': 32,
                    '1906': 34,
                    '1907': 94,
                    '1908': 50,
                    '1909': 46,
                    '1910': 48,
                    '1911': 46,
                    '1912': 48,
                    '1913': 34,
                    '1914': 10,
                    '1915': 32,
                    '1916': 32,
                    '1917': 125,
                    '1918': 44,
                    '1919': 10,
                    '1920': 32,
                    '1921': 32,
                    '1922': 34,
                    '1923': 100,
                    '1924': 101,
                    '1925': 118,
                    '1926': 68,
                    '1927': 101,
                    '1928': 112,
                    '1929': 101,
                    '1930': 110,
                    '1931': 100,
                    '1932': 101,
                    '1933': 110,
                    '1934': 99,
                    '1935': 105,
                    '1936': 101,
                    '1937': 115,
                    '1938': 34,
                    '1939': 58,
                    '1940': 32,
                    '1941': 123,
                    '1942': 10,
                    '1943': 32,
                    '1944': 32,
                    '1945': 32,
                    '1946': 32,
                    '1947': 34,
                    '1948': 64,
                    '1949': 108,
                    '1950': 111,
                    '1951': 111,
                    '1952': 112,
                    '1953': 98,
                    '1954': 97,
                    '1955': 99,
                    '1956': 107,
                    '1957': 47,
                    '1958': 98,
                    '1959': 117,
                    '1960': 105,
                    '1961': 108,
                    '1962': 100,
                    '1963': 34,
                    '1964': 58,
                    '1965': 32,
                    '1966': 34,
                    '1967': 94,
                    '1968': 57,
                    '1969': 46,
                    '1970': 48,
                    '1971': 46,
                    '1972': 51,
                    '1973': 34,
                    '1974': 44,
                    '1975': 10,
                    '1976': 32,
                    '1977': 32,
                    '1978': 32,
                    '1979': 32,
                    '1980': 34,
                    '1981': 64,
                    '1982': 108,
                    '1983': 111,
                    '1984': 111,
                    '1985': 112,
                    '1986': 98,
                    '1987': 97,
                    '1988': 99,
                    '1989': 107,
                    '1990': 47,
                    '1991': 101,
                    '1992': 115,
                    '1993': 108,
                    '1994': 105,
                    '1995': 110,
                    '1996': 116,
                    '1997': 45,
                    '1998': 99,
                    '1999': 111,
                    '2000': 110,
                    '2001': 102,
                    '2002': 105,
                    '2003': 103,
                    '2004': 34,
                    '2005': 58,
                    '2006': 32,
                    '2007': 34,
                    '2008': 94,
                    '2009': 49,
                    '2010': 51,
                    '2011': 46,
                    '2012': 48,
                    '2013': 46,
                    '2014': 51,
                    '2015': 34,
                    '2016': 44,
                    '2017': 10,
                    '2018': 32,
                    '2019': 32,
                    '2020': 32,
                    '2021': 32,
                    '2022': 34,
                    '2023': 64,
                    '2024': 108,
                    '2025': 111,
                    '2026': 111,
                    '2027': 112,
                    '2028': 98,
                    '2029': 97,
                    '2030': 99,
                    '2031': 107,
                    '2032': 47,
                    '2033': 116,
                    '2034': 101,
                    '2035': 115,
                    '2036': 116,
                    '2037': 108,
                    '2038': 97,
                    '2039': 98,
                    '2040': 34,
                    '2041': 58,
                    '2042': 32,
                    '2043': 34,
                    '2044': 94,
                    '2045': 53,
                    '2046': 46,
                    '2047': 48,
                    '2048': 46,
                    '2049': 51,
                    '2050': 34,
                    '2051': 44,
                    '2052': 10,
                    '2053': 32,
                    '2054': 32,
                    '2055': 32,
                    '2056': 32,
                    '2057': 34,
                    '2058': 64,
                    '2059': 116,
                    '2060': 121,
                    '2061': 112,
                    '2062': 101,
                    '2063': 115,
                    '2064': 47,
                    '2065': 110,
                    '2066': 111,
                    '2067': 100,
                    '2068': 101,
                    '2069': 34,
                    '2070': 58,
                    '2071': 32,
                    '2072': 34,
                    '2073': 94,
                    '2074': 49,
                    '2075': 52,
                    '2076': 46,
                    '2077': 49,
                    '2078': 56,
                    '2079': 46,
                    '2080': 50,
                    '2081': 54,
                    '2082': 34,
                    '2083': 44,
                    '2084': 10,
                    '2085': 32,
                    '2086': 32,
                    '2087': 32,
                    '2088': 32,
                    '2089': 34,
                    '2090': 101,
                    '2091': 115,
                    '2092': 108,
                    '2093': 105,
                    '2094': 110,
                    '2095': 116,
                    '2096': 34,
                    '2097': 58,
                    '2098': 32,
                    '2099': 34,
                    '2100': 94,
                    '2101': 56,
                    '2102': 46,
                    '2103': 50,
                    '2104': 50,
                    '2105': 46,
                    '2106': 48,
                    '2107': 34,
                    '2108': 44,
                    '2109': 10,
                    '2110': 32,
                    '2111': 32,
                    '2112': 32,
                    '2113': 32,
                    '2114': 34,
                    '2115': 115,
                    '2116': 111,
                    '2117': 117,
                    '2118': 114,
                    '2119': 99,
                    '2120': 101,
                    '2121': 45,
                    '2122': 109,
                    '2123': 97,
                    '2124': 112,
                    '2125': 45,
                    '2126': 115,
                    '2127': 117,
                    '2128': 112,
                    '2129': 112,
                    '2130': 111,
                    '2131': 114,
                    '2132': 116,
                    '2133': 34,
                    '2134': 58,
                    '2135': 32,
                    '2136': 34,
                    '2137': 94,
                    '2138': 48,
                    '2139': 46,
                    '2140': 53,
                    '2141': 46,
                    '2142': 50,
                    '2143': 49,
                    '2144': 34,
                    '2145': 44,
                    '2146': 10,
                    '2147': 32,
                    '2148': 32,
                    '2149': 32,
                    '2150': 32,
                    '2151': 34,
                    '2152': 116,
                    '2153': 121,
                    '2154': 112,
                    '2155': 101,
                    '2156': 115,
                    '2157': 99,
                    '2158': 114,
                    '2159': 105,
                    '2160': 112,
                    '2161': 116,
                    '2162': 34,
                    '2163': 58,
                    '2164': 32,
                    '2165': 34,
                    '2166': 126,
                    '2167': 52,
                    '2168': 46,
                    '2169': 55,
                    '2170': 46,
                    '2171': 52,
                    '2172': 34,
                    '2173': 10,
                    '2174': 32,
                    '2175': 32,
                    '2176': 125,
                    '2177': 10,
                    '2178': 125,
                    '2179': 10
                  },
                  history: [
                    '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json'
                  ],
                  _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                  _isVinyl: true,
                  _symlink: null
                },
                '/home/aaqilniz/.yo-rc-global.json': {
                  stat: null,
                  _contents: null,
                  history: [
                    '/home/aaqilniz/.yo-rc-global.json'
                  ],
                  _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                  _isVinyl: true,
                  _symlink: null
                },
                '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json': {
                  stat: {
                    dev: 2055,
                    mode: 33279,
                    nlink: 1,
                    uid: 1000,
                    gid: 1000,
                    rdev: 0,
                    blksize: 4096,
                    ino: 2241690,
                    size: 82,
                    blocks: 1,
                    atimeMs: 1664468198390.669,
                    mtimeMs: 1664467890046.1177,
                    ctimeMs: 1664467890046.1177,
                    birthtimeMs: 0,
                    atime: new Date('2022-09-29T16:16:38.391Z'),
                    mtime: new Date('2022-09-29T16:11:30.046Z'),
                    ctime: new Date('2022-09-29T16:11:30.046Z'),
                    birthtime: new Date('1970-01-01T00:00:00.000Z')
                  },
                  _contents: {
                    '0': 123,
                    '1': 10,
                    '2': 32,
                    '3': 32,
                    '4': 34,
                    '5': 64,
                    '6': 108,
                    '7': 111,
                    '8': 111,
                    '9': 112,
                    '10': 98,
                    '11': 97,
                    '12': 99,
                    '13': 107,
                    '14': 47,
                    '15': 99,
                    '16': 108,
                    '17': 105,
                    '18': 34,
                    '19': 58,
                    '20': 32,
                    '21': 123,
                    '22': 10,
                    '23': 32,
                    '24': 32,
                    '25': 32,
                    '26': 32,
                    '27': 34,
                    '28': 112,
                    '29': 97,
                    '30': 99,
                    '31': 107,
                    '32': 97,
                    '33': 103,
                    '34': 101,
                    '35': 77,
                    '36': 97,
                    '37': 110,
                    '38': 97,
                    '39': 103,
                    '40': 101,
                    '41': 114,
                    '42': 34,
                    '43': 58,
                    '44': 32,
                    '45': 34,
                    '46': 121,
                    '47': 97,
                    '48': 114,
                    '49': 110,
                    '50': 34,
                    '51': 44,
                    '52': 10,
                    '53': 32,
                    '54': 32,
                    '55': 32,
                    '56': 32,
                    '57': 34,
                    '58': 118,
                    '59': 101,
                    '60': 114,
                    '61': 115,
                    '62': 105,
                    '63': 111,
                    '64': 110,
                    '65': 34,
                    '66': 58,
                    '67': 32,
                    '68': 34,
                    '69': 52,
                    '70': 46,
                    '71': 49,
                    '72': 46,
                    '73': 51,
                    '74': 34,
                    '75': 10,
                    '76': 32,
                    '77': 32,
                    '78': 125,
                    '79': 10,
                    '80': 125,
                    '81': 10
                  },
                  history: [
                    '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json'
                  ],
                  _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                  _isVinyl: true,
                  _symlink: null
                }
              },
              Symbol(kCapture): false
            }
          },
          _debug: function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		},
          _: ,
          log: function log(message, ctx) {
    message = message || '';

    if (typeof ctx === 'object' && !Array.isArray(ctx)) {
      customConsole.error(formatter(message, ctx));
    } else {
      customConsole.error.apply(customConsole, arguments);
    }

    return log;
  },
          async: () => this.async(),
          appname: 'test app',
          _globalConfig: {
            path: '/home/aaqilniz/.yo-rc-global.json',
            name: '@loopback/cli:4.1.3',
            fs: {
              store: {
                _events: {
                  change: [
                    (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    },
                    (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    }
                  ]
                },
                _eventsCount: 1,
                _maxListeners: 0,
                store: {
                  '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json': {
                    stat: null,
                    _contents: null,
                    history: [
                      '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json'
                    ],
                    _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                    _isVinyl: true,
                    _symlink: null
                  },
                  '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json': {
                    stat: {
                      dev: 2055,
                      mode: 33279,
                      nlink: 1,
                      uid: 1000,
                      gid: 1000,
                      rdev: 0,
                      blksize: 4096,
                      ino: 2241697,
                      size: 2180,
                      blocks: 8,
                      atimeMs: 1664473760957.5466,
                      mtimeMs: 1664473760805.593,
                      ctimeMs: 1664473760805.593,
                      birthtimeMs: 0,
                      atime: new Date('2022-09-29T17:49:20.958Z'),
                      mtime: new Date('2022-09-29T17:49:20.806Z'),
                      ctime: new Date('2022-09-29T17:49:20.806Z'),
                      birthtime: new Date('1970-01-01T00:00:00.000Z')
                    },
                    _contents: {
                      '0': 123,
                      '1': 10,
                      '2': 32,
                      '3': 32,
                      '4': 34,
                      '5': 110,
                      '6': 97,
                      '7': 109,
                      '8': 101,
                      '9': 34,
                      '10': 58,
                      '11': 32,
                      '12': 34,
                      '13': 116,
                      '14': 101,
                      '15': 115,
                      '16': 116,
                      '17': 45,
                      '18': 97,
                      '19': 112,
                      '20': 112,
                      '21': 34,
                      '22': 44,
                      '23': 10,
                      '24': 32,
                      '25': 32,
                      '26': 34,
                      '27': 118,
                      '28': 101,
                      '29': 114,
                      '30': 115,
                      '31': 105,
                      '32': 111,
                      '33': 110,
                      '34': 34,
                      '35': 58,
                      '36': 32,
                      '37': 34,
                      '38': 48,
                      '39': 46,
                      '40': 48,
                      '41': 46,
                      '42': 49,
                      '43': 34,
                      '44': 44,
                      '45': 10,
                      '46': 32,
                      '47': 32,
                      '48': 34,
                      '49': 100,
                      '50': 101,
                      '51': 115,
                      '52': 99,
                      '53': 114,
                      '54': 105,
                      '55': 112,
                      '56': 116,
                      '57': 105,
                      '58': 111,
                      '59': 110,
                      '60': 34,
                      '61': 58,
                      '62': 32,
                      '63': 34,
                      '64': 112,
                      '65': 97,
                      '66': 116,
                      '67': 114,
                      '68': 105,
                      '69': 99,
                      '70': 107,
                      '71': 34,
                      '72': 44,
                      '73': 10,
                      '74': 32,
                      '75': 32,
                      '76': 34,
                      '77': 107,
                      '78': 101,
                      '79': 121,
                      '80': 119,
                      '81': 111,
                      '82': 114,
                      '83': 100,
                      '84': 115,
                      '85': 34,
                      '86': 58,
                      '87': 32,
                      '88': 91,
                      '89': 10,
                      '90': 32,
                      '91': 32,
                      '92': 32,
                      '93': 32,
                      '94': 34,
                      '95': 108,
                      '96': 111,
                      '97': 111,
                      '98': 112,
                      '99': 98,
                      '100': 97,
                      '101': 99,
                      '102': 107,
                      '103': 45,
                      '104': 97,
                      '105': 112,
                      '106': 112,
                      '107': 108,
                      '108': 105,
                      '109': 99,
                      '110': 97,
                      '111': 116,
                      '112': 105,
                      '113': 111,
                      '114': 110,
                      '115': 34,
                      '116': 44,
                      '117': 10,
                      '118': 32,
                      '119': 32,
                      '120': 32,
                      '121': 32,
                      '122': 34,
                      '123': 108,
                      '124': 111,
                      '125': 111,
                      '126': 112,
                      '127': 98,
                      '128': 97,
                      '129': 99,
                      '130': 107,
                      '131': 34,
                      '132': 10,
                      '133': 32,
                      '134': 32,
                      '135': 93,
                      '136': 44,
                      '137': 10,
                      '138': 32,
                      '139': 32,
                      '140': 34,
                      '141': 109,
                      '142': 97,
                      '143': 105,
                      '144': 110,
                      '145': 34,
                      '146': 58,
                      '147': 32,
                      '148': 34,
                      '149': 100,
                      '150': 105,
                      '151': 115,
                      '152': 116,
                      '153': 47,
                      '154': 105,
                      '155': 110,
                      '156': 100,
                      '157': 101,
                      '158': 120,
                      '159': 46,
                      '160': 106,
                      '161': 115,
                      '162': 34,
                      '163': 44,
                      '164': 10,
                      '165': 32,
                      '166': 32,
                      '167': 34,
                      '168': 116,
                      '169': 121,
                      '170': 112,
                      '171': 101,
                      '172': 115,
                      '173': 34,
                      '174': 58,
                      '175': 32,
                      '176': 34,
                      '177': 100,
                      '178': 105,
                      '179': 115,
                      '180': 116,
                      '181': 47,
                      '182': 105,
                      '183': 110,
                      '184': 100,
                      '185': 101,
                      '186': 120,
                      '187': 46,
                      '188': 100,
                      '189': 46,
                      '190': 116,
                      '191': 115,
                      '192': 34,
                      '193': 44,
                      '194': 10,
                      '195': 32,
                      '196': 32,
                      '197': 34,
                      '198': 101,
                      '199': 110,
                      '200': 103,
                      '201': 105,
                      '202': 110,
                      '203': 101,
                      '204': 115,
                      '205': 34,
                      '206': 58,
                      '207': 32,
                      '208': 123,
                      '209': 10,
                      '210': 32,
                      '211': 32,
                      '212': 32,
                      '213': 32,
                      '214': 34,
                      '215': 110,
                      '216': 111,
                      '217': 100,
                      '218': 101,
                      '219': 34,
                      '220': 58,
                      '221': 32,
                      '222': 34,
                      '223': 49,
                      '224': 52,
                      '225': 32,
                      '226': 124,
                      '227': 124,
                      '228': 32,
                      '229': 49,
                      '230': 54,
                      '231': 32,
                      '232': 124,
                      '233': 124,
                      '234': 32,
                      '235': 49,
                      '236': 55,
                      '237': 32,
                      '238': 124,
                      '239': 124,
                      '240': 32,
                      '241': 49,
                      '242': 56,
                      '243': 34,
                      '244': 10,
                      '245': 32,
                      '246': 32,
                      '247': 125,
                      '248': 44,
                      '249': 10,
                      '250': 32,
                      '251': 32,
                      '252': 34,
                      '253': 115,
                      '254': 99,
                      '255': 114,
                      '256': 105,
                      '257': 112,
                      '258': 116,
                      '259': 115,
                      '260': 34,
                      '261': 58,
                      '262': 32,
                      '263': 123,
                      '264': 10,
                      '265': 32,
                      '266': 32,
                      '267': 32,
                      '268': 32,
                      '269': 34,
                      '270': 98,
                      '271': 117,
                      '272': 105,
                      '273': 108,
                      '274': 100,
                      '275': 34,
                      '276': 58,
                      '277': 32,
                      '278': 34,
                      '279': 108,
                      '280': 98,
                      '281': 45,
                      '282': 116,
                      '283': 115,
                      '284': 99,
                      '285': 34,
                      '286': 44,
                      '287': 10,
                      '288': 32,
                      '289': 32,
                      '290': 32,
                      '291': 32,
                      '292': 34,
                      '293': 98,
                      '294': 117,
                      '295': 105,
                      '296': 108,
                      '297': 100,
                      '298': 58,
                      '299': 119,
                      '300': 97,
                      '301': 116,
                      '302': 99,
                      '303': 104,
                      '304': 34,
                      '305': 58,
                      '306': 32,
                      '307': 34,
                      '308': 108,
                      '309': 98,
                      '310': 45,
                      '311': 116,
                      '312': 115,
                      '313': 99,
                      '314': 32,
                      '315': 45,
                      '316': 45,
                      '317': 119,
                      '318': 97,
                      '319': 116,
                      '320': 99,
                      '321': 104,
                      '322': 34,
                      '323': 44,
                      '324': 10,
                      '325': 32,
                      '326': 32,
                      '327': 32,
                      '328': 32,
                      '329': 34,
                      '330': 108,
                      '331': 105,
                      '332': 110,
                      '333': 116,
                      '334': 34,
                      '335': 58,
                      '336': 32,
                      '337': 34,
                      '338': 121,
                      '339': 97,
                      '340': 114,
                      '341': 110,
                      '342': 32,
                      '343': 114,
                      '344': 117,
                      '345': 110,
                      '346': 32,
                      '347': 101,
                      '348': 115,
                      '349': 108,
                      '350': 105,
                      '351': 110,
                      '352': 116,
                      '353': 32,
                      '354': 38,
                      '355': 38,
                      '356': 32,
                      '357': 121,
                      '358': 97,
                      '359': 114,
                      '360': 110,
                      '361': 32,
                      '362': 114,
                      '363': 117,
                      '364': 110,
                      '365': 32,
                      '366': 112,
                      '367': 114,
                      '368': 101,
                      '369': 116,
                      '370': 116,
                      '371': 105,
                      '372': 101,
                      '373': 114,
                      '374': 58,
                      '375': 99,
                      '376': 104,
                      '377': 101,
                      '378': 99,
                      '379': 107,
                      '380': 34,
                      '381': 44,
                      '382': 10,
                      '383': 32,
                      '384': 32,
                      '385': 32,
                      '386': 32,
                      '387': 34,
                      '388': 108,
                      '389': 105,
                      '390': 110,
                      '391': 116,
                      '392': 58,
                      '393': 102,
                      '394': 105,
                      '395': 120,
                      '396': 34,
                      '397': 58,
                      '398': 32,
                      '399': 34,
                      '400': 121,
                      '401': 97,
                      '402': 114,
                      '403': 110,
                      '404': 32,
                      '405': 114,
                      '406': 117,
                      '407': 110,
                      '408': 32,
                      '409': 101,
                      '410': 115,
                      '411': 108,
                      '412': 105,
                      '413': 110,
                      '414': 116,
                      '415': 58,
                      '416': 102,
                      '417': 105,
                      '418': 120,
                      '419': 32,
                      '420': 38,
                      '421': 38,
                      '422': 32,
                      '423': 121,
                      '424': 97,
                      '425': 114,
                      '426': 110,
                      '427': 32,
                      '428': 114,
                      '429': 117,
                      '430': 110,
                      '431': 32,
                      '432': 112,
                      '433': 114,
                      '434': 101,
                      '435': 116,
                      '436': 116,
                      '437': 105,
                      '438': 101,
                      '439': 114,
                      '440': 58,
                      '441': 102,
                      '442': 105,
                      '443': 120,
                      '444': 34,
                      '445': 44,
                      '446': 10,
                      '447': 32,
                      '448': 32,
                      '449': 32,
                      '450': 32,
                      '451': 34,
                      '452': 112,
                      '453': 114,
                      '454': 101,
                      '455': 116,
                      '456': 116,
                      '457': 105,
                      '458': 101,
                      '459': 114,
                      '460': 58,
                      '461': 99,
                      '462': 108,
                      '463': 105,
                      '464': 34,
                      '465': 58,
                      '466': 32,
                      '467': 34,
                      '468': 108,
                      '469': 98,
                      '470': 45,
                      '471': 112,
                      '472': 114,
                      '473': 101,
                      '474': 116,
                      '475': 116,
                      '476': 105,
                      '477': 101,
                      '478': 114,
                      '479': 32,
                      '480': 92,
                      '481': 34,
                      '482': 42,
                      '483': 42,
                      '484': 47,
                      '485': 42,
                      '486': 46,
                      '487': 116,
                      '488': 115,
                      '489': 92,
                      '490': 34,
                      '491': 32,
                      '492': 92,
                      '493': 34,
                      '494': 42,
                      '495': 42,
                      '496': 47,
                      '497': 42,
                      '498': 46,
                      '499': 106,
                      '500': 115,
                      '501': 92,
                      '502': 34,
                      '503': 34,
                      '504': 44,
                      '505': 10,
                      '506': 32,
                      '507': 32,
                      '508': 32,
                      '509': 32,
                      '510': 34,
                      '511': 112,
                      '512': 114,
                      '513': 101,
                      '514': 116,
                      '515': 116,
                      '516': 105,
                      '517': 101,
                      '518': 114,
                      '519': 58,
                      '520': 99,
                      '521': 104,
                      '522': 101,
                      '523': 99,
                      '524': 107,
                      '525': 34,
                      '526': 58,
                      '527': 32,
                      '528': 34,
                      '529': 121,
                      '530': 97,
                      '531': 114,
                      '532': 110,
                      '533': 32,
                      '534': 114,
                      '535': 117,
                      '536': 110,
                      '537': 32,
                      '538': 112,
                      '539': 114,
                      '540': 101,
                      '541': 116,
                      '542': 116,
                      '543': 105,
                      '544': 101,
                      '545': 114,
                      '546': 58,
                      '547': 99,
                      '548': 108,
                      '549': 105,
                      '550': 32,
                      '551': 45,
                      '552': 108,
                      '553': 34,
                      '554': 44,
                      '555': 10,
                      '556': 32,
                      '557': 32,
                      '558': 32,
                      '559': 32,
                      '560': 34,
                      '561': 112,
                      '562': 114,
                      '563': 101,
                      '564': 116,
                      '565': 116,
                      '566': 105,
                      '567': 101,
                      '568': 114,
                      '569': 58,
                      '570': 102,
                      '571': 105,
                      '572': 120,
                      '573': 34,
                      '574': 58,
                      '575': 32,
                      '576': 34,
                      '577': 121,
                      '578': 97,
                      '579': 114,
                      '580': 110,
                      '581': 32,
                      '582': 114,
                      '583': 117,
                      '584': 110,
                      '585': 32,
                      '586': 112,
                      '587': 114,
                      '588': 101,
                      '589': 116,
                      '590': 116,
                      '591': 105,
                      '592': 101,
                      '593': 114,
                      '594': 58,
                      '595': 99,
                      '596': 108,
                      '597': 105,
                      '598': 32,
                      '599': 45,
                      '600': 45,
                      '601': 119,
                      '602': 114,
                      '603': 105,
                      '604': 116,
                      '605': 101,
                      '606': 34,
                      '607': 44,
                      '608': 10,
                      '609': 32,
                      '610': 32,
                      '611': 32,
                      '612': 32,
                      '613': 34,
                      '614': 101,
                      '615': 115,
                      '616': 108,
                      '617': 105,
                      '618': 110,
                      '619': 116,
                      '620': 34,
                      '621': 58,
                      '622': 32,
                      '623': 34,
                      '624': 108,
                      '625': 98,
                      '626': 45,
                      '627': 101,
                      '628': 115,
                      '629': 108,
                      '630': 105,
                      '631': 110,
                      '632': 116,
                      '633': 32,
                      '634': 45,
                      '635': 45,
                      '636': 114,
                      '637': 101,
                      '638': 112,
                      '639': 111,
                      '640': 114,
                      '641': 116,
                      '642': 45,
                      '643': 117,
                      '644': 110,
                      '645': 117,
                      '646': 115,
                      '647': 101,
                      '648': 100,
                      '649': 45,
                      '650': 100,
                      '651': 105,
                      '652': 115,
                      '653': 97,
                      '654': 98,
                      '655': 108,
                      '656': 101,
                      '657': 45,
                      '658': 100,
                      '659': 105,
                      '660': 114,
                      '661': 101,
                      '662': 99,
                      '663': 116,
                      '664': 105,
                      '665': 118,
                      '666': 101,
                      '667': 115,
                      '668': 32,
                      '669': 46,
                      '670': 34,
                      '671': 44,
                      '672': 10,
                      '673': 32,
                      '674': 32,
                      '675': 32,
                      '676': 32,
                      '677': 34,
                      '678': 101,
                      '679': 115,
                      '680': 108,
                      '681': 105,
                      '682': 110,
                      '683': 116,
                      '684': 58,
                      '685': 102,
                      '686': 105,
                      '687': 120,
                      '688': 34,
                      '689': 58,
                      '690': 32,
                      '691': 34,
                      '692': 121,
                      '693': 97,
                      '694': 114,
                      '695': 110,
                      '696': 32,
                      '697': 114,
                      '698': 117,
                      '699': 110,
                      '700': 32,
                      '701': 101,
                      '702': 115,
                      '703': 108,
                      '704': 105,
                      '705': 110,
                      '706': 116,
                      '707': 32,
                      '708': 45,
                      '709': 45,
                      '710': 102,
                      '711': 105,
                      '712': 120,
                      '713': 34,
                      '714': 44,
                      '715': 10,
                      '716': 32,
                      '717': 32,
                      '718': 32,
                      '719': 32,
                      '720': 34,
                      '721': 112,
                      '722': 114,
                      '723': 101,
                      '724': 116,
                      '725': 101,
                      '726': 115,
                      '727': 116,
                      '728': 34,
                      '729': 58,
                      '730': 32,
                      '731': 34,
                      '732': 121,
                      '733': 97,
                      '734': 114,
                      '735': 110,
                      '736': 32,
                      '737': 114,
                      '738': 117,
                      '739': 110,
                      '740': 32,
                      '741': 114,
                      '742': 101,
                      '743': 98,
                      '744': 117,
                      '745': 105,
                      '746': 108,
                      '747': 100,
                      '748': 34,
                      '749': 44,
                      '750': 10,
                      '751': 32,
                      '752': 32,
                      '753': 32,
                      '754': 32,
                      '755': 34,
                      '756': 116,
                      '757': 101,
                      '758': 115,
                      '759': 116,
                      '760': 34,
                      '761': 58,
                      '762': 32,
                      '763': 34,
                      '764': 108,
                      '765': 98,
                      '766': 45,
                      '767': 109,
                      '768': 111,
                      '769': 99,
                      '770': 104,
                      '771': 97,
                      '772': 32,
                      '773': 45,
                      '774': 45,
                      '775': 97,
                      '776': 108,
                      '777': 108,
                      '778': 111,
                      '779': 119,
                      '780': 45,
                      '781': 99,
                      '782': 111,
                      '783': 110,
                      '784': 115,
                      '785': 111,
                      '786': 108,
                      '787': 101,
                      '788': 45,
                      '789': 108,
                      '790': 111,
                      '791': 103,
                      '792': 115,
                      '793': 32,
                      '794': 92,
                      '795': 34,
                      '796': 100,
                      '797': 105,
                      '798': 115,
                      '799': 116,
                      '800': 47,
                      '801': 95,
                      '802': 95,
                      '803': 116,
                      '804': 101,
                      '805': 115,
                      '806': 116,
                      '807': 115,
                      '808': 95,
                      '809': 95,
                      '810': 92,
                      '811': 34,
                      '812': 34,
                      '813': 44,
                      '814': 10,
                      '815': 32,
                      '816': 32,
                      '817': 32,
                      '818': 32,
                      '819': 34,
                      '820': 112,
                      '821': 111,
                      '822': 115,
                      '823': 116,
                      '824': 116,
                      '825': 101,
                      '826': 115,
                      '827': 116,
                      '828': 34,
                      '829': 58,
                      '830': 32,
                      '831': 34,
                      '832': 121,
                      '833': 97,
                      '834': 114,
                      '835': 110,
                      '836': 32,
                      '837': 114,
                      '838': 117,
                      '839': 110,
                      '840': 32,
                      '841': 108,
                      '842': 105,
                      '843': 110,
                      '844': 116,
                      '845': 34,
                      '846': 44,
                      '847': 10,
                      '848': 32,
                      '849': 32,
                      '850': 32,
                      '851': 32,
                      '852': 34,
                      '853': 116,
                      '854': 101,
                      '855': 115,
                      '856': 116,
                      '857': 58,
                      '858': 100,
                      '859': 101,
                      '860': 118,
                      '861': 34,
                      '862': 58,
                      '863': 32,
                      '864': 34,
                      '865': 108,
                      '866': 98,
                      '867': 45,
                      '868': 109,
                      '869': 111,
                      '870': 99,
                      '871': 104,
                      '872': 97,
                      '873': 32,
                      '874': 45,
                      '875': 45,
                      '876': 97,
                      '877': 108,
                      '878': 108,
                      '879': 111,
                      '880': 119,
                      '881': 45,
                      '882': 99,
                      '883': 111,
                      '884': 110,
                      '885': 115,
                      '886': 111,
                      '887': 108,
                      '888': 101,
                      '889': 45,
                      '890': 108,
                      '891': 111,
                      '892': 103,
                      '893': 115,
                      '894': 32,
                      '895': 100,
                      '896': 105,
                      '897': 115,
                      '898': 116,
                      '899': 47,
                      '900': 95,
                      '901': 95,
                      '902': 116,
                      '903': 101,
                      '904': 115,
                      '905': 116,
                      '906': 115,
                      '907': 95,
                      '908': 95,
                      '909': 47,
                      '910': 42,
                      '911': 42,
                      '912': 47,
                      '913': 42,
                      '914': 46,
                      '915': 106,
                      '916': 115,
                      '917': 32,
                      '918': 38,
                      '919': 38,
                      '920': 32,
                      '921': 121,
                      '922': 97,
                      '923': 114,
                      '924': 110,
                      '925': 32,
                      '926': 114,
                      '927': 117,
                      '928': 110,
                      '929': 32,
                      '930': 112,
                      '931': 111,
                      '932': 115,
                      '933': 116,
                      '934': 116,
                      '935': 101,
                      '936': 115,
                      '937': 116,
                      '938': 34,
                      '939': 44,
                      '940': 10,
                      '941': 32,
                      '942': 32,
                      '943': 32,
                      '944': 32,
                      '945': 34,
                      '946': 100,
                      '947': 111,
                      '948': 99,
                      '949': 107,
                      '950': 101,
                      '951': 114,
                      '952': 58,
                      '953': 98,
                      '954': 117,
                      '955': 105,
                      '956': 108,
                      '957': 100,
                      '958': 34,
                      '959': 58,
                      '960': 32,
                      '961': 34,
                      '962': 100,
                      '963': 111,
                      '964': 99,
                      '965': 107,
                      '966': 101,
                      '967': 114,
                      '968': 32,
                      '969': 98,
                      '970': 117,
                      '971': 105,
                      '972': 108,
                      '973': 100,
                      '974': 32,
                      '975': 45,
                      '976': 116,
                      '977': 32,
                      '978': 116,
                      '979': 101,
                      '980': 115,
                      '981': 116,
                      '982': 45,
                      '983': 97,
                      '984': 112,
                      '985': 112,
                      '986': 32,
                      '987': 46,
                      '988': 34,
                      '989': 44,
                      '990': 10,
                      '991': 32,
                      '992': 32,
                      '993': 32,
                      '994': 32,
                      '995': 34,
                      '996': 100,
                      '997': 111,
                      '998': 99,
                      '999': 107,
                      '1000': 101,
                      '1001': 114,
                      '1002': 58,
                      '1003': 114,
                      '1004': 117,
                      '1005': 110,
                      '1006': 34,
                      '1007': 58,
                      '1008': 32,
                      '1009': 34,
                      '1010': 100,
                      '1011': 111,
                      '1012': 99,
                      '1013': 107,
                      '1014': 101,
                      '1015': 114,
                      '1016': 32,
                      '1017': 114,
                      '1018': 117,
                      '1019': 110,
                      '1020': 32,
                      '1021': 45,
                      '1022': 112,
                      '1023': 32,
                      '1024': 51,
                      '1025': 48,
                      '1026': 48,
                      '1027': 48,
                      '1028': 58,
                      '1029': 51,
                      '1030': 48,
                      '1031': 48,
                      '1032': 48,
                      '1033': 32,
                      '1034': 45,
                      '1035': 100,
                      '1036': 32,
                      '1037': 116,
                      '1038': 101,
                      '1039': 115,
                      '1040': 116,
                      '1041': 45,
                      '1042': 97,
                      '1043': 112,
                      '1044': 112,
                      '1045': 34,
                      '1046': 44,
                      '1047': 10,
                      '1048': 32,
                      '1049': 32,
                      '1050': 32,
                      '1051': 32,
                      '1052': 34,
                      '1053': 112,
                      '1054': 114,
                      '1055': 101,
                      '1056': 109,
                      '1057': 105,
                      '1058': 103,
                      '1059': 114,
                      '1060': 97,
                      '1061': 116,
                      '1062': 101,
                      '1063': 34,
                      '1064': 58,
                      '1065': 32,
                      '1066': 34,
                      '1067': 121,
                      '1068': 97,
                      '1069': 114,
                      '1070': 110,
                      '1071': 32,
                      '1072': 114,
                      '1073': 117,
                      '1074': 110,
                      '1075': 32,
                      '1076': 98,
                      '1077': 117,
                      '1078': 105,
                      '1079': 108,
                      '1080': 100,
                      '1081': 34,
                      '1082': 44,
                      '1083': 10,
                      '1084': 32,
                      '1085': 32,
                      '1086': 32,
                      '1087': 32,
                      '1088': 34,
                      '1089': 109,
                      '1090': 105,
                      '1091': 103,
                      '1092': 114,
                      '1093': 97,
                      '1094': 116,
                      '1095': 101,
                      '1096': 34,
                      '1097': 58,
                      '1098': 32,
                      '1099': 34,
                      '1100': 110,
                      '1101': 111,
                      '1102': 100,
                      '1103': 101,
                      '1104': 32,
                      '1105': 46,
                      '1106': 47,
                      '1107': 100,
                      '1108': 105,
                      '1109': 115,
                      '1110': 116,
                      '1111': 47,
                      '1112': 109,
                      '1113': 105,
                      '1114': 103,
                      '1115': 114,
                      '1116': 97,
                      '1117': 116,
                      '1118': 101,
                      '1119': 34,
                      '1120': 44,
                      '1121': 10,
                      '1122': 32,
                      '1123': 32,
                      '1124': 32,
                      '1125': 32,
                      '1126': 34,
                      '1127': 112,
                      '1128': 114,
                      '1129': 101,
                      '1130': 111,
                      '1131': 112,
                      '1132': 101,
                      '1133': 110,
                      '1134': 97,
                      '1135': 112,
                      '1136': 105,
                      '1137': 45,
                      '1138': 115,
                      '1139': 112,
                      '1140': 101,
                      '1141': 99,
                      '1142': 34,
                      '1143': 58,
                      '1144': 32,
                      '1145': 34,
                      '1146': 121,
                      '1147': 97,
                      '1148': 114,
                      '1149': 110,
                      '1150': 32,
                      '1151': 114,
                      '1152': 117,
                      '1153': 110,
                      '1154': 32,
                      '1155': 98,
                      '1156': 117,
                      '1157': 105,
                      '1158': 108,
                      '1159': 100,
                      '1160': 34,
                      '1161': 44,
                      '1162': 10,
                      '1163': 32,
                      '1164': 32,
                      '1165': 32,
                      '1166': 32,
                      '1167': 34,
                      '1168': 111,
                      '1169': 112,
                      '1170': 101,
                      '1171': 110,
                      '1172': 97,
                      '1173': 112,
                      '1174': 105,
                      '1175': 45,
                      '1176': 115,
                      '1177': 112,
                      '1178': 101,
                      '1179': 99,
                      '1180': 34,
                      '1181': 58,
                      '1182': 32,
                      '1183': 34,
                      '1184': 110,
                      '1185': 111,
                      '1186': 100,
                      '1187': 101,
                      '1188': 32,
                      '1189': 46,
                      '1190': 47,
                      '1191': 100,
                      '1192': 105,
                      '1193': 115,
                      '1194': 116,
                      '1195': 47,
                      '1196': 111,
                      '1197': 112,
                      '1198': 101,
                      '1199': 110,
                      '1200': 97,
                      '1201': 112,
                      '1202': 105,
                      '1203': 45,
                      '1204': 115,
                      '1205': 112,
                      '1206': 101,
                      '1207': 99,
                      '1208': 34,
                      '1209': 44,
                      '1210': 10,
                      '1211': 32,
                      '1212': 32,
                      '1213': 32,
                      '1214': 32,
                      '1215': 34,
                      '1216': 112,
                      '1217': 114,
                      '1218': 101,
                      '1219': 115,
                      '1220': 116,
                      '1221': 97,
                      '1222': 114,
                      '1223': 116,
                      '1224': 34,
                      '1225': 58,
                      '1226': 32,
                      '1227': 34,
                      '1228': 121,
                      '1229': 97,
                      '1230': 114,
                      '1231': 110,
                      '1232': 32,
                      '1233': 114,
                      '1234': 117,
                      '1235': 110,
                      '1236': 32,
                      '1237': 114,
                      '1238': 101,
                      '1239': 98,
                      '1240': 117,
                      '1241': 105,
                      '1242': 108,
                      '1243': 100,
                      '1244': 34,
                      '1245': 44,
                      '1246': 10,
                      '1247': 32,
                      '1248': 32,
                      '1249': 32,
                      '1250': 32,
                      '1251': 34,
                      '1252': 115,
                      '1253': 116,
                      '1254': 97,
                      '1255': 114,
                      '1256': 116,
                      '1257': 34,
                      '1258': 58,
                      '1259': 32,
                      '1260': 34,
                      '1261': 110,
                      '1262': 111,
                      '1263': 100,
                      '1264': 101,
                      '1265': 32,
                      '1266': 45,
                      '1267': 114,
                      '1268': 32,
                      '1269': 115,
                      '1270': 111,
                      '1271': 117,
                      '1272': 114,
                      '1273': 99,
                      '1274': 101,
                      '1275': 45,
                      '1276': 109,
                      '1277': 97,
                      '1278': 112,
                      '1279': 45,
                      '1280': 115,
                      '1281': 117,
                      '1282': 112,
                      '1283': 112,
                      '1284': 111,
                      '1285': 114,
                      '1286': 116,
                      '1287': 47,
                      '1288': 114,
                      '1289': 101,
                      '1290': 103,
                      '1291': 105,
                      '1292': 115,
                      '1293': 116,
                      '1294': 101,
                      '1295': 114,
                      '1296': 32,
                      '1297': 46,
                      '1298': 34,
                      '1299': 44,
                      '1300': 10,
                      '1301': 32,
                      '1302': 32,
                      '1303': 32,
                      '1304': 32,
                      '1305': 34,
                      '1306': 99,
                      '1307': 108,
                      '1308': 101,
                      '1309': 97,
                      '1310': 110,
                      '1311': 34,
                      '1312': 58,
                      '1313': 32,
                      '1314': 34,
                      '1315': 108,
                      '1316': 98,
                      '1317': 45,
                      '1318': 99,
                      '1319': 108,
                      '1320': 101,
                      '1321': 97,
                      '1322': 110,
                      '1323': 32,
                      '1324': 100,
                      '1325': 105,
                      '1326': 115,
                      '1327': 116,
                      '1328': 32,
                      '1329': 42,
                      '1330': 46,
                      '1331': 116,
                      '1332': 115,
                      '1333': 98,
                      '1334': 117,
                      '1335': 105,
                      '1336': 108,
                      '1337': 100,
                      '1338': 105,
                      '1339': 110,
                      '1340': 102,
                      '1341': 111,
                      '1342': 32,
                      '1343': 46,
                      '1344': 101,
                      '1345': 115,
                      '1346': 108,
                      '1347': 105,
                      '1348': 110,
                      '1349': 116,
                      '1350': 99,
                      '1351': 97,
                      '1352': 99,
                      '1353': 104,
                      '1354': 101,
                      '1355': 34,
                      '1356': 44,
                      '1357': 10,
                      '1358': 32,
                      '1359': 32,
                      '1360': 32,
                      '1361': 32,
                      '1362': 34,
                      '1363': 114,
                      '1364': 101,
                      '1365': 98,
                      '1366': 117,
                      '1367': 105,
                      '1368': 108,
                      '1369': 100,
                      '1370': 34,
                      '1371': 58,
                      '1372': 32,
                      '1373': 34,
                      '1374': 121,
                      '1375': 97,
                      '1376': 114,
                      '1377': 110,
                      '1378': 32,
                      '1379': 114,
                      '1380': 117,
                      '1381': 110,
                      '1382': 32,
                      '1383': 99,
                      '1384': 108,
                      '1385': 101,
                      '1386': 97,
                      '1387': 110,
                      '1388': 32,
                      '1389': 38,
                      '1390': 38,
                      '1391': 32,
                      '1392': 121,
                      '1393': 97,
                      '1394': 114,
                      '1395': 110,
                      '1396': 32,
                      '1397': 114,
                      '1398': 117,
                      '1399': 110,
                      '1400': 32,
                      '1401': 98,
                      '1402': 117,
                      '1403': 105,
                      '1404': 108,
                      '1405': 100,
                      '1406': 34,
                      '1407': 10,
                      '1408': 32,
                      '1409': 32,
                      '1410': 125,
                      '1411': 44,
                      '1412': 10,
                      '1413': 32,
                      '1414': 32,
                      '1415': 34,
                      '1416': 114,
                      '1417': 101,
                      '1418': 112,
                      '1419': 111,
                      '1420': 115,
                      '1421': 105,
                      '1422': 116,
                      '1423': 111,
                      '1424': 114,
                      '1425': 121,
                      '1426': 34,
                      '1427': 58,
                      '1428': 32,
                      '1429': 123,
                      '1430': 10,
                      '1431': 32,
                      '1432': 32,
                      '1433': 32,
                      '1434': 32,
                      '1435': 34,
                      '1436': 116,
                      '1437': 121,
                      '1438': 112,
                      '1439': 101,
                      '1440': 34,
                      '1441': 58,
                      '1442': 32,
                      '1443': 34,
                      '1444': 103,
                      '1445': 105,
                      '1446': 116,
                      '1447': 34,
                      '1448': 44,
                      '1449': 10,
                      '1450': 32,
                      '1451': 32,
                      '1452': 32,
                      '1453': 32,
                      '1454': 34,
                      '1455': 117,
                      '1456': 114,
                      '1457': 108,
                      '1458': 34,
                      '1459': 58,
                      '1460': 32,
                      '1461': 34,
                      '1462': 34,
                      '1463': 10,
                      '1464': 32,
                      '1465': 32,
                      '1466': 125,
                      '1467': 44,
                      '1468': 10,
                      '1469': 32,
                      '1470': 32,
                      '1471': 34,
                      '1472': 97,
                      '1473': 117,
                      '1474': 116,
                      '1475': 104,
                      '1476': 111,
                      '1477': 114,
                      '1478': 34,
                      '1479': 58,
                      '1480': 32,
                      '1481': 34,
                      '1482': 77,
                      '1483': 117,
                      '1484': 104,
                      '1485': 97,
                      '1486': 109,
                      '1487': 109,
                      '1488': 97,
                      '1489': 100,
                      '1490': 32,
                      '1491': 65,
                      '1492': 97,
                      '1493': 113,
                      '1494': 105,
                      '1495': 108,
                      '1496': 32,
                      '1497': 60,
                      '1498': 97,
                      '1499': 97,
                      '1500': 113,
                      '1501': 105,
                      '1502': 108,
                      '1503': 110,
                      '1504': 105,
                      '1505': 122,
                      '1506': 64,
                      '1507': 121,
                      '1508': 97,
                      '1509': 104,
                      '1510': 111,
                      '1511': 111,
                      '1512': 46,
                      '1513': 99,
                      '1514': 111,
                      '1515': 109,
                      '1516': 62,
                      '1517': 34,
                      '1518': 44,
                      '1519': 10,
                      '1520': 32,
                      '1521': 32,
                      '1522': 34,
                      '1523': 108,
                      '1524': 105,
                      '1525': 99,
                      '1526': 101,
                      '1527': 110,
                      '1528': 115,
                      '1529': 101,
                      '1530': 34,
                      '1531': 58,
                      '1532': 32,
                      '1533': 34,
                      '1534': 34,
                      '1535': 44,
                      '1536': 10,
                      '1537': 32,
                      '1538': 32,
                      '1539': 34,
                      '1540': 102,
                      '1541': 105,
                      '1542': 108,
                      '1543': 101,
                      '1544': 115,
                      '1545': 34,
                      '1546': 58,
                      '1547': 32,
                      '1548': 91,
                      '1549': 10,
                      '1550': 32,
                      '1551': 32,
                      '1552': 32,
                      '1553': 32,
                      '1554': 34,
                      '1555': 82,
                      '1556': 69,
                      '1557': 65,
                      '1558': 68,
                      '1559': 77,
                      '1560': 69,
                      '1561': 46,
                      '1562': 109,
                      '1563': 100,
                      '1564': 34,
                      '1565': 44,
                      '1566': 10,
                      '1567': 32,
                      '1568': 32,
                      '1569': 32,
                      '1570': 32,
                      '1571': 34,
                      '1572': 100,
                      '1573': 105,
                      '1574': 115,
                      '1575': 116,
                      '1576': 34,
                      '1577': 44,
                      '1578': 10,
                      '1579': 32,
                      '1580': 32,
                      '1581': 32,
                      '1582': 32,
                      '1583': 34,
                      '1584': 115,
                      '1585': 114,
                      '1586': 99,
                      '1587': 34,
                      '1588': 44,
                      '1589': 10,
                      '1590': 32,
                      '1591': 32,
                      '1592': 32,
                      '1593': 32,
                      '1594': 34,
                      '1595': 33,
                      '1596': 42,
                      '1597': 47,
                      '1598': 95,
                      '1599': 95,
                      '1600': 116,
                      '1601': 101,
                      '1602': 115,
                      '1603': 116,
                      '1604': 115,
                      '1605': 95,
                      '1606': 95,
                      '1607': 34,
                      '1608': 10,
                      '1609': 32,
                      '1610': 32,
                      '1611': 93,
                      '1612': 44,
                      '1613': 10,
                      '1614': 32,
                      '1615': 32,
                      '1616': 34,
                      '1617': 100,
                      '1618': 101,
                      '1619': 112,
                      '1620': 101,
                      '1621': 110,
                      '1622': 100,
                      '1623': 101,
                      '1624': 110,
                      '1625': 99,
                      '1626': 105,
                      '1627': 101,
                      '1628': 115,
                      '1629': 34,
                      '1630': 58,
                      '1631': 32,
                      '1632': 123,
                      '1633': 10,
                      '1634': 32,
                      '1635': 32,
                      '1636': 32,
                      '1637': 32,
                      '1638': 34,
                      '1639': 64,
                      '1640': 108,
                      '1641': 111,
                      '1642': 111,
                      '1643': 112,
                      '1644': 98,
                      '1645': 97,
                      '1646': 99,
                      '1647': 107,
                      '1648': 47,
                      '1649': 98,
                      '1650': 111,
                      '1651': 111,
                      '1652': 116,
                      '1653': 34,
                      '1654': 58,
                      '1655': 32,
                      '1656': 34,
                      '1657': 94,
                      '1658': 53,
                      '1659': 46,
                      '1660': 48,
                      '1661': 46,
                      '1662': 51,
                      '1663': 34,
                      '1664': 44,
                      '1665': 10,
                      '1666': 32,
                      '1667': 32,
                      '1668': 32,
                      '1669': 32,
                      '1670': 34,
                      '1671': 64,
                      '1672': 108,
                      '1673': 111,
                      '1674': 111,
                      '1675': 112,
                      '1676': 98,
                      '1677': 97,
                      '1678': 99,
                      '1679': 107,
                      '1680': 47,
                      '1681': 99,
                      '1682': 111,
                      '1683': 114,
                      '1684': 101,
                      '1685': 34,
                      '1686': 58,
                      '1687': 32,
                      '1688': 34,
                      '1689': 94,
                      '1690': 52,
                      '1691': 46,
                      '1692': 48,
                      '1693': 46,
                      '1694': 51,
                      '1695': 34,
                      '1696': 44,
                      '1697': 10,
                      '1698': 32,
                      '1699': 32,
                      '1700': 32,
                      '1701': 32,
                      '1702': 34,
                      '1703': 64,
                      '1704': 108,
                      '1705': 111,
                      '1706': 111,
                      '1707': 112,
                      '1708': 98,
                      '1709': 97,
                      '1710': 99,
                      '1711': 107,
                      '1712': 47,
                      '1713': 114,
                      '1714': 101,
                      '1715': 112,
                      '1716': 111,
                      '1717': 115,
                      '1718': 105,
                      '1719': 116,
                      '1720': 111,
                      '1721': 114,
                      '1722': 121,
                      '1723': 34,
                      '1724': 58,
                      '1725': 32,
                      '1726': 34,
                      '1727': 94,
                      '1728': 53,
                      '1729': 46,
                      '1730': 48,
                      '1731': 46,
                      '1732': 51,
                      '1733': 34,
                      '1734': 44,
                      '1735': 10,
                      '1736': 32,
                      '1737': 32,
                      '1738': 32,
                      '1739': 32,
                      '1740': 34,
                      '1741': 64,
                      '1742': 108,
                      '1743': 111,
                      '1744': 111,
                      '1745': 112,
                      '1746': 98,
                      '1747': 97,
                      '1748': 99,
                      '1749': 107,
                      '1750': 47,
                      '1751': 114,
                      '1752': 101,
                      '1753': 115,
                      '1754': 116,
                      '1755': 34,
                      '1756': 58,
                      '1757': 32,
                      '1758': 34,
                      '1759': 94,
                      '1760': 49,
                      '1761': 50,
                      '1762': 46,
                      '1763': 48,
                      '1764': 46,
                      '1765': 51,
                      '1766': 34,
                      '1767': 44,
                      '1768': 10,
                      '1769': 32,
                      '1770': 32,
                      '1771': 32,
                      '1772': 32,
                      '1773': 34,
                      '1774': 64,
                      '1775': 108,
                      '1776': 111,
                      '1777': 111,
                      '1778': 112,
                      '1779': 98,
                      '1780': 97,
                      '1781': 99,
                      '1782': 107,
                      '1783': 47,
                      '1784': 114,
                      '1785': 101,
                      '1786': 115,
                      '1787': 116,
                      '1788': 45,
                      '1789': 101,
                      '1790': 120,
                      '1791': 112,
                      '1792': 108,
                      '1793': 111,
                      '1794': 114,
                      '1795': 101,
                      '1796': 114,
                      '1797': 34,
                      '1798': 58,
                      '1799': 32,
                      '1800': 34,
                      '1801': 94,
                      '1802': 53,
                      '1803': 46,
                      '1804': 48,
                      '1805': 46,
                      '1806': 51,
                      '1807': 34,
                      '1808': 44,
                      '1809': 10,
                      '1810': 32,
                      '1811': 32,
                      '1812': 32,
                      '1813': 32,
                      '1814': 34,
                      '1815': 64,
                      '1816': 108,
                      '1817': 111,
                      '1818': 111,
                      '1819': 112,
                      '1820': 98,
                      '1821': 97,
                      '1822': 99,
                      '1823': 107,
                      '1824': 47,
                      '1825': 115,
                      '1826': 101,
                      '1827': 114,
                      '1828': 118,
                      '1829': 105,
                      '1830': 99,
                      '1831': 101,
                      '1832': 45,
                      '1833': 112,
                      '1834': 114,
                      '1835': 111,
                      '1836': 120,
                      '1837': 121,
                      '1838': 34,
                      '1839': 58,
                      '1840': 32,
                      '1841': 34,
                      '1842': 94,
                      '1843': 53,
                      '1844': 46,
                      '1845': 48,
                      '1846': 46,
                      '1847': 51,
                      '1848': 34,
                      '1849': 44,
                      '1850': 10,
                      '1851': 32,
                      '1852': 32,
                      '1853': 32,
                      '1854': 32,
                      '1855': 34,
                      '1856': 108,
                      '1857': 111,
                      '1858': 111,
                      '1859': 112,
                      '1860': 98,
                      '1861': 97,
                      '1862': 99,
                      '1863': 107,
                      '1864': 45,
                      '1865': 99,
                      '1866': 111,
                      '1867': 110,
                      '1868': 110,
                      '1869': 101,
                      '1870': 99,
                      '1871': 116,
                      '1872': 111,
                      '1873': 114,
                      '1874': 45,
                      '1875': 109,
                      '1876': 121,
                      '1877': 115,
                      '1878': 113,
                      '1879': 108,
                      '1880': 34,
                      '1881': 58,
                      '1882': 32,
                      '1883': 34,
                      '1884': 94,
                      '1885': 53,
                      '1886': 46,
                      '1887': 51,
                      '1888': 46,
                      '1889': 48,
                      '1890': 34,
                      '1891': 44,
                      '1892': 10,
                      '1893': 32,
                      '1894': 32,
                      '1895': 32,
                      '1896': 32,
                      '1897': 34,
                      '1898': 116,
                      '1899': 115,
                      '1900': 108,
                      '1901': 105,
                      '1902': 98,
                      '1903': 34,
                      '1904': 58,
                      '1905': 32,
                      '1906': 34,
                      '1907': 94,
                      '1908': 50,
                      '1909': 46,
                      '1910': 48,
                      '1911': 46,
                      '1912': 48,
                      '1913': 34,
                      '1914': 10,
                      '1915': 32,
                      '1916': 32,
                      '1917': 125,
                      '1918': 44,
                      '1919': 10,
                      '1920': 32,
                      '1921': 32,
                      '1922': 34,
                      '1923': 100,
                      '1924': 101,
                      '1925': 118,
                      '1926': 68,
                      '1927': 101,
                      '1928': 112,
                      '1929': 101,
                      '1930': 110,
                      '1931': 100,
                      '1932': 101,
                      '1933': 110,
                      '1934': 99,
                      '1935': 105,
                      '1936': 101,
                      '1937': 115,
                      '1938': 34,
                      '1939': 58,
                      '1940': 32,
                      '1941': 123,
                      '1942': 10,
                      '1943': 32,
                      '1944': 32,
                      '1945': 32,
                      '1946': 32,
                      '1947': 34,
                      '1948': 64,
                      '1949': 108,
                      '1950': 111,
                      '1951': 111,
                      '1952': 112,
                      '1953': 98,
                      '1954': 97,
                      '1955': 99,
                      '1956': 107,
                      '1957': 47,
                      '1958': 98,
                      '1959': 117,
                      '1960': 105,
                      '1961': 108,
                      '1962': 100,
                      '1963': 34,
                      '1964': 58,
                      '1965': 32,
                      '1966': 34,
                      '1967': 94,
                      '1968': 57,
                      '1969': 46,
                      '1970': 48,
                      '1971': 46,
                      '1972': 51,
                      '1973': 34,
                      '1974': 44,
                      '1975': 10,
                      '1976': 32,
                      '1977': 32,
                      '1978': 32,
                      '1979': 32,
                      '1980': 34,
                      '1981': 64,
                      '1982': 108,
                      '1983': 111,
                      '1984': 111,
                      '1985': 112,
                      '1986': 98,
                      '1987': 97,
                      '1988': 99,
                      '1989': 107,
                      '1990': 47,
                      '1991': 101,
                      '1992': 115,
                      '1993': 108,
                      '1994': 105,
                      '1995': 110,
                      '1996': 116,
                      '1997': 45,
                      '1998': 99,
                      '1999': 111,
                      '2000': 110,
                      '2001': 102,
                      '2002': 105,
                      '2003': 103,
                      '2004': 34,
                      '2005': 58,
                      '2006': 32,
                      '2007': 34,
                      '2008': 94,
                      '2009': 49,
                      '2010': 51,
                      '2011': 46,
                      '2012': 48,
                      '2013': 46,
                      '2014': 51,
                      '2015': 34,
                      '2016': 44,
                      '2017': 10,
                      '2018': 32,
                      '2019': 32,
                      '2020': 32,
                      '2021': 32,
                      '2022': 34,
                      '2023': 64,
                      '2024': 108,
                      '2025': 111,
                      '2026': 111,
                      '2027': 112,
                      '2028': 98,
                      '2029': 97,
                      '2030': 99,
                      '2031': 107,
                      '2032': 47,
                      '2033': 116,
                      '2034': 101,
                      '2035': 115,
                      '2036': 116,
                      '2037': 108,
                      '2038': 97,
                      '2039': 98,
                      '2040': 34,
                      '2041': 58,
                      '2042': 32,
                      '2043': 34,
                      '2044': 94,
                      '2045': 53,
                      '2046': 46,
                      '2047': 48,
                      '2048': 46,
                      '2049': 51,
                      '2050': 34,
                      '2051': 44,
                      '2052': 10,
                      '2053': 32,
                      '2054': 32,
                      '2055': 32,
                      '2056': 32,
                      '2057': 34,
                      '2058': 64,
                      '2059': 116,
                      '2060': 121,
                      '2061': 112,
                      '2062': 101,
                      '2063': 115,
                      '2064': 47,
                      '2065': 110,
                      '2066': 111,
                      '2067': 100,
                      '2068': 101,
                      '2069': 34,
                      '2070': 58,
                      '2071': 32,
                      '2072': 34,
                      '2073': 94,
                      '2074': 49,
                      '2075': 52,
                      '2076': 46,
                      '2077': 49,
                      '2078': 56,
                      '2079': 46,
                      '2080': 50,
                      '2081': 54,
                      '2082': 34,
                      '2083': 44,
                      '2084': 10,
                      '2085': 32,
                      '2086': 32,
                      '2087': 32,
                      '2088': 32,
                      '2089': 34,
                      '2090': 101,
                      '2091': 115,
                      '2092': 108,
                      '2093': 105,
                      '2094': 110,
                      '2095': 116,
                      '2096': 34,
                      '2097': 58,
                      '2098': 32,
                      '2099': 34,
                      '2100': 94,
                      '2101': 56,
                      '2102': 46,
                      '2103': 50,
                      '2104': 50,
                      '2105': 46,
                      '2106': 48,
                      '2107': 34,
                      '2108': 44,
                      '2109': 10,
                      '2110': 32,
                      '2111': 32,
                      '2112': 32,
                      '2113': 32,
                      '2114': 34,
                      '2115': 115,
                      '2116': 111,
                      '2117': 117,
                      '2118': 114,
                      '2119': 99,
                      '2120': 101,
                      '2121': 45,
                      '2122': 109,
                      '2123': 97,
                      '2124': 112,
                      '2125': 45,
                      '2126': 115,
                      '2127': 117,
                      '2128': 112,
                      '2129': 112,
                      '2130': 111,
                      '2131': 114,
                      '2132': 116,
                      '2133': 34,
                      '2134': 58,
                      '2135': 32,
                      '2136': 34,
                      '2137': 94,
                      '2138': 48,
                      '2139': 46,
                      '2140': 53,
                      '2141': 46,
                      '2142': 50,
                      '2143': 49,
                      '2144': 34,
                      '2145': 44,
                      '2146': 10,
                      '2147': 32,
                      '2148': 32,
                      '2149': 32,
                      '2150': 32,
                      '2151': 34,
                      '2152': 116,
                      '2153': 121,
                      '2154': 112,
                      '2155': 101,
                      '2156': 115,
                      '2157': 99,
                      '2158': 114,
                      '2159': 105,
                      '2160': 112,
                      '2161': 116,
                      '2162': 34,
                      '2163': 58,
                      '2164': 32,
                      '2165': 34,
                      '2166': 126,
                      '2167': 52,
                      '2168': 46,
                      '2169': 55,
                      '2170': 46,
                      '2171': 52,
                      '2172': 34,
                      '2173': 10,
                      '2174': 32,
                      '2175': 32,
                      '2176': 125,
                      '2177': 10,
                      '2178': 125,
                      '2179': 10
                    },
                    history: [
                      '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json'
                    ],
                    _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                    _isVinyl: true,
                    _symlink: null
                  },
                  '/home/aaqilniz/.yo-rc-global.json': {
                    stat: null,
                    _contents: null,
                    history: [
                      '/home/aaqilniz/.yo-rc-global.json'
                    ],
                    _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                    _isVinyl: true,
                    _symlink: null
                  },
                  '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json': {
                    stat: {
                      dev: 2055,
                      mode: 33279,
                      nlink: 1,
                      uid: 1000,
                      gid: 1000,
                      rdev: 0,
                      blksize: 4096,
                      ino: 2241690,
                      size: 82,
                      blocks: 1,
                      atimeMs: 1664468198390.669,
                      mtimeMs: 1664467890046.1177,
                      ctimeMs: 1664467890046.1177,
                      birthtimeMs: 0,
                      atime: new Date('2022-09-29T16:16:38.391Z'),
                      mtime: new Date('2022-09-29T16:11:30.046Z'),
                      ctime: new Date('2022-09-29T16:11:30.046Z'),
                      birthtime: new Date('1970-01-01T00:00:00.000Z')
                    },
                    _contents: {
                      '0': 123,
                      '1': 10,
                      '2': 32,
                      '3': 32,
                      '4': 34,
                      '5': 64,
                      '6': 108,
                      '7': 111,
                      '8': 111,
                      '9': 112,
                      '10': 98,
                      '11': 97,
                      '12': 99,
                      '13': 107,
                      '14': 47,
                      '15': 99,
                      '16': 108,
                      '17': 105,
                      '18': 34,
                      '19': 58,
                      '20': 32,
                      '21': 123,
                      '22': 10,
                      '23': 32,
                      '24': 32,
                      '25': 32,
                      '26': 32,
                      '27': 34,
                      '28': 112,
                      '29': 97,
                      '30': 99,
                      '31': 107,
                      '32': 97,
                      '33': 103,
                      '34': 101,
                      '35': 77,
                      '36': 97,
                      '37': 110,
                      '38': 97,
                      '39': 103,
                      '40': 101,
                      '41': 114,
                      '42': 34,
                      '43': 58,
                      '44': 32,
                      '45': 34,
                      '46': 121,
                      '47': 97,
                      '48': 114,
                      '49': 110,
                      '50': 34,
                      '51': 44,
                      '52': 10,
                      '53': 32,
                      '54': 32,
                      '55': 32,
                      '56': 32,
                      '57': 34,
                      '58': 118,
                      '59': 101,
                      '60': 114,
                      '61': 115,
                      '62': 105,
                      '63': 111,
                      '64': 110,
                      '65': 34,
                      '66': 58,
                      '67': 32,
                      '68': 34,
                      '69': 52,
                      '70': 46,
                      '71': 49,
                      '72': 46,
                      '73': 51,
                      '74': 34,
                      '75': 10,
                      '76': 32,
                      '77': 32,
                      '78': 125,
                      '79': 10,
                      '80': 125,
                      '81': 10
                    },
                    history: [
                      '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json'
                    ],
                    _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                    _isVinyl: true,
                    _symlink: null
                  }
                },
                Symbol(kCapture): false
              }
            },
            indent: 2,
            lodashPath: false,
            disableCache: false,
            disableCacheByFile: false,
            sorted: false,
            _cachedStore: {},
            existed: false
          },
          _queues: {
            initializing: {
              priorityName: 'initializing',
              queueName: 'initializing'
            },
            prompting: {
              priorityName: 'prompting',
              queueName: 'prompting'
            },
            configuring: {
              priorityName: 'configuring',
              queueName: 'configuring'
            },
            default: {
              priorityName: 'default',
              queueName: 'default'
            },
            writing: {
              priorityName: 'writing',
              queueName: 'writing'
            },
            transform: {
              priorityName: 'transform',
              queueName: 'transform'
            },
            conflicts: {
              priorityName: 'conflicts',
              queueName: 'conflicts'
            },
            install: {
              priorityName: 'install',
              queueName: 'install'
            },
            end: {
              priorityName: 'end',
              queueName: 'end'
            }
          },
          compose: undefined,
          conflicter: {
            adapter: {
              promptModule: function (questions, answers) {
    let ui;
    try {
      ui = new inquirer.ui.Prompt(promptModule.prompts, opt);
    } catch (error) {
      return Promise.reject(error);
    }
    const promise = ui.run(questions, answers);

    // Monkey patch the UI on the promise object so
    // that it remains publicly accessible.
    promise.ui = ui;

    return promise;
  },
              console: {
                log: function () { [native code] },
                warn: function () { [native code] },
                dir: function () { [native code] },
                time: function () { [native code] },
                timeEnd: function () { [native code] },
                timeLog: function () { [native code] },
                trace: function () { [native code] },
                assert: function () { [native code] },
                clear: function () { [native code] },
                count: function () { [native code] },
                countReset: function () { [native code] },
                group: function () { [native code] },
                groupEnd: function () { [native code] },
                table: function () { [native code] },
                debug: function () { [native code] },
                info: function () { [native code] },
                dirxml: function () { [native code] },
                error: function () { [native code] },
                groupCollapsed: function () { [native code] }
              },
              log: function log(message, ctx) {
    message = message || '';

    if (typeof ctx === 'object' && !Array.isArray(ctx)) {
      customConsole.error(formatter(message, ctx));
    } else {
      customConsole.error.apply(customConsole, arguments);
    }

    return log;
  },
              tracker: {
                _events: {
                  error: function () {}
                },
                _eventsCount: 1,
                _maxListeners: undefined,
                useColor: function () {
  return colorEnabled != null ? colorEnabled : stream.isTTY
},
                enableColor: function () {
  colorEnabled = true
  this.gauge.setTheme({hasColor: colorEnabled, hasUnicode: unicodeEnabled})
},
                disableColor: function () {
  colorEnabled = false
  this.gauge.setTheme({hasColor: colorEnabled, hasUnicode: unicodeEnabled})
},
                level: 'error',
                gauge: {
                  _status: {
                    spun: 0,
                    section: '',
                    subsection: ''
                  },
                  _paused: false,
                  _disabled: true,
                  _showing: false,
                  _onScreen: false,
                  _needsRedraw: false,
                  _hideCursor: true,
                  _fixedFramerate: true,
                  _lastUpdateAt: null,
                  _updateInterval: 50,
                  _themes: function (opts) {
    return themeset.getDefault(opts)
  },
                  _theme: {
                    hasColor: true
                  },
                  _writeTo: {
                    connecting: false,
                    _hadError: false,
                    _parent: null,
                    _host: null,
                    _readableState: {
                      objectMode: false,
                      highWaterMark: 16384,
                      buffer: {
                        head: null,
                        tail: null,
                        length: 0
                      },
                      length: 0,
                      pipes: [],
                      flowing: null,
                      ended: false,
                      endEmitted: false,
                      reading: false,
                      constructed: true,
                      sync: true,
                      needReadable: false,
                      emittedReadable: false,
                      readableListening: false,
                      resumeScheduled: false,
                      errorEmitted: false,
                      emitClose: false,
                      autoDestroy: true,
                      destroyed: false,
                      errored: null,
                      closed: false,
                      closeEmitted: false,
                      defaultEncoding: 'utf8',
                      awaitDrainWriters: null,
                      multiAwaitDrain: false,
                      readingMore: false,
                      decoder: null,
                      encoding: null,
                      readable: false,
                      Symbol(kPaused): null
                    },
                    _events: {
                      end: function onReadableStreamEnd() {
  if (!this.allowHalfOpen) {
    this.write = writeAfterFIN;
  }
}
                    },
                    _eventsCount: 1,
                    _maxListeners: undefined,
                    _writableState: {
                      objectMode: false,
                      highWaterMark: 16384,
                      finalCalled: false,
                      needDrain: false,
                      ending: false,
                      ended: false,
                      finished: false,
                      destroyed: false,
                      decodeStrings: false,
                      defaultEncoding: 'utf8',
                      length: 0,
                      writing: false,
                      corked: 0,
                      sync: true,
                      bufferProcessing: false,
                      onwrite: function () { [native code] },
                      writecb: null,
                      writelen: 0,
                      afterWriteTickInfo: null,
                      buffered: [],
                      bufferedIndex: 0,
                      allBuffers: true,
                      allNoop: true,
                      pendingcb: 0,
                      constructed: true,
                      prefinished: false,
                      errorEmitted: false,
                      emitClose: false,
                      autoDestroy: true,
                      errored: null,
                      closed: false,
                      closeEmitted: false,
                      Symbol(kOnFinished): []
                    },
                    allowHalfOpen: false,
                    _sockname: null,
                    _pendingData: null,
                    _pendingEncoding: '',
                    server: null,
                    _server: null,
                    columns: 150,
                    rows: 36,
                    _type: 'tty',
                    fd: 2,
                    _isStdio: true,
                    destroySoon: function destroy(err, cb) {
  const r = this._readableState;
  const w = this._writableState;
  // With duplex streams we use the writable side for state.
  const s = w || r;

  if ((w && w.destroyed) || (r && r.destroyed)) {
    if (typeof cb === 'function') {
      cb();
    }

    return this;
  }


  // We set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks
  checkError(err, w, r);

  if (w) {
    w.destroyed = true;
  }
  if (r) {
    r.destroyed = true;
  }

  // If still constructing then defer calling _destroy.
  if (!s.constructed) {
    this.once(kDestroy, function(er) {
      _destroy(this, aggregateTwoErrors(er, err), cb);
    });
  } else {
    _destroy(this, err, cb);
  }

  return this;
},
                    _destroy: function dummyDestroy(err, cb) {
  cb(err);

  // We need to emit 'close' anyway so that the closing
  // of the stream is observable. We just make sure we
  // are not going to do it twice.
  // The 'close' event is needed so that finished and
  // pipeline work correctly.
  if (!this._writableState.emitClose) {
    process.nextTick(() => {
      this.emit('close');
    });
  }
},
                    Symbol(async_id_symbol): 2,
                    Symbol(kHandle): {
                      Symbol(owner_symbol): "[Circular]"
                    },
                    Symbol(kSetNoDelay): false,
                    Symbol(lastWriteQueueSize): 0,
                    Symbol(timeout): null,
                    Symbol(kBuffer): null,
                    Symbol(kBufferCb): null,
                    Symbol(kBufferGen): null,
                    Symbol(kCapture): false,
                    Symbol(kBytesRead): 0,
                    Symbol(kBytesWritten): 0
                  },
                  _tty: {
                    connecting: false,
                    _hadError: false,
                    _parent: null,
                    _host: null,
                    _readableState: {
                      objectMode: false,
                      highWaterMark: 16384,
                      buffer: {
                        head: null,
                        tail: null,
                        length: 0
                      },
                      length: 0,
                      pipes: [],
                      flowing: null,
                      ended: false,
                      endEmitted: false,
                      reading: false,
                      constructed: true,
                      sync: true,
                      needReadable: false,
                      emittedReadable: false,
                      readableListening: false,
                      resumeScheduled: false,
                      errorEmitted: false,
                      emitClose: false,
                      autoDestroy: true,
                      destroyed: false,
                      errored: null,
                      closed: false,
                      closeEmitted: false,
                      defaultEncoding: 'utf8',
                      awaitDrainWriters: null,
                      multiAwaitDrain: false,
                      readingMore: false,
                      decoder: null,
                      encoding: null,
                      readable: false,
                      Symbol(kPaused): null
                    },
                    _events: {
                      end: function onReadableStreamEnd() {
  if (!this.allowHalfOpen) {
    this.write = writeAfterFIN;
  }
}
                    },
                    _eventsCount: 1,
                    _maxListeners: undefined,
                    _writableState: {
                      objectMode: false,
                      highWaterMark: 16384,
                      finalCalled: false,
                      needDrain: false,
                      ending: false,
                      ended: false,
                      finished: false,
                      destroyed: false,
                      decodeStrings: false,
                      defaultEncoding: 'utf8',
                      length: 0,
                      writing: false,
                      corked: 0,
                      sync: true,
                      bufferProcessing: false,
                      onwrite: function () { [native code] },
                      writecb: null,
                      writelen: 0,
                      afterWriteTickInfo: null,
                      buffered: [],
                      bufferedIndex: 0,
                      allBuffers: true,
                      allNoop: true,
                      pendingcb: 0,
                      constructed: true,
                      prefinished: false,
                      errorEmitted: false,
                      emitClose: false,
                      autoDestroy: true,
                      errored: null,
                      closed: false,
                      closeEmitted: false,
                      Symbol(kOnFinished): []
                    },
                    allowHalfOpen: false,
                    _sockname: null,
                    _pendingData: null,
                    _pendingEncoding: '',
                    server: null,
                    _server: null,
                    columns: 150,
                    rows: 36,
                    _type: 'tty',
                    fd: 1,
                    _isStdio: true,
                    destroySoon: function destroy(err, cb) {
  const r = this._readableState;
  const w = this._writableState;
  // With duplex streams we use the writable side for state.
  const s = w || r;

  if ((w && w.destroyed) || (r && r.destroyed)) {
    if (typeof cb === 'function') {
      cb();
    }

    return this;
  }


  // We set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks
  checkError(err, w, r);

  if (w) {
    w.destroyed = true;
  }
  if (r) {
    r.destroyed = true;
  }

  // If still constructing then defer calling _destroy.
  if (!s.constructed) {
    this.once(kDestroy, function(er) {
      _destroy(this, aggregateTwoErrors(er, err), cb);
    });
  } else {
    _destroy(this, err, cb);
  }

  return this;
},
                    _destroy: function dummyDestroy(err, cb) {
  cb(err);

  // We need to emit 'close' anyway so that the closing
  // of the stream is observable. We just make sure we
  // are not going to do it twice.
  // The 'close' event is needed so that finished and
  // pipeline work correctly.
  if (!this._writableState.emitClose) {
    process.nextTick(() => {
      this.emit('close');
    });
  }
},
                    Symbol(async_id_symbol): 4,
                    Symbol(kHandle): {
                      Symbol(owner_symbol): "[Circular]"
                    },
                    Symbol(kSetNoDelay): false,
                    Symbol(lastWriteQueueSize): 0,
                    Symbol(timeout): null,
                    Symbol(kBuffer): null,
                    Symbol(kBufferCb): null,
                    Symbol(kBufferGen): null,
                    Symbol(kCapture): false,
                    Symbol(kBytesRead): 0,
                    Symbol(kBytesWritten): 0
                  },
                  _gauge: {
                    showing: false,
                    theme: {
                      activityIndicator: function (values, theme, width) {
    if (values.spun == null) return
    return spin(theme, values.spun)
  },
                      progressbar: function (values, theme, width) {
    if (values.completed == null) return
    return progressBar(theme, width, values.completed)
  },
                      preProgressbar: '⸨',
                      postProgressbar: '⸩',
                      progressbarTheme: {
                        preComplete: '[107;97m',
                        complete: '#',
                        postComplete: '[0m',
                        preRemaining: '[100;90m',
                        remaining: '⠂',
                        postRemaining: '[0m'
                      },
                      activityIndicatorTheme: '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏',
                      preSubsection: '>'
                    },
                    width: 149,
                    template: [
                      {
                        type: 'progressbar',
                        length: 20
                      },
                      {
                        type: 'activityIndicator',
                        kerning: 1,
                        length: 1
                      },
                      {
                        type: 'section',
                        default: ''
                      },
                      ':',
                      {
                        type: 'logline',
                        kerning: 1,
                        default: ''
                      }
                    ]
                  },
                  _$$doRedraw: function () {
    return method.call(obj)
  },
                  _$$handleSizeChange: function () {
    return method.call(obj)
  },
                  _cleanupOnExit: true,
                  _removeOnExit: null
                },
                tracker: {
                  _events: {},
                  _eventsCount: 0,
                  _maxListeners: undefined,
                  id: 1,
                  name: undefined,
                  parentGroup: null,
                  trackers: [],
                  completion: {},
                  weight: {},
                  totalWeight: 0,
                  finished: false,
                  bubbleChange: function (name, completed, tracker) {
    trackerGroup.completion[tracker.id] = completed
    if (trackerGroup.finished) {
      return
    }
    trackerGroup.emit('change', name || trackerGroup.name, trackerGroup.completed(), trackerGroup)
  },
                  Symbol(kCapture): false
                },
                progressEnabled: false,
                enableUnicode: function () {
  unicodeEnabled = true
  this.gauge.setTheme({hasColor: this.useColor(), hasUnicode: unicodeEnabled})
},
                disableUnicode: function () {
  unicodeEnabled = false
  this.gauge.setTheme({hasColor: this.useColor(), hasUnicode: unicodeEnabled})
},
                setGaugeThemeset: function (themes) {
  this.gauge.setThemeset(themes)
},
                setGaugeTemplate: function (template) {
  this.gauge.setTemplate(template)
},
                enableProgress: function () {
  if (this.progressEnabled) {
    return
  }

  this.progressEnabled = true
  this.tracker.on('change', this.showProgress)
  if (this._paused) {
    return
  }

  this.gauge.enable()
},
                disableProgress: function () {
  if (!this.progressEnabled) {
    return
  }
  this.progressEnabled = false
  this.tracker.removeListener('change', this.showProgress)
  this.gauge.disable()
},
                newGroup: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
                newItem: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
                newStream: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
                clearProgress: function (cb) {
  if (!this.progressEnabled) {
    return cb && process.nextTick(cb)
  }

  this.gauge.hide(cb)
},
                showProgress: function () { [native code] },
                pause: function () {
  this._paused = true
  if (this.progressEnabled) {
    this.gauge.disable()
  }
},
                resume: function () {
  if (!this._paused) {
    return
  }

  this._paused = false

  var b = this._buffer
  this._buffer = []
  b.forEach(function (m) {
    this.emitLog(m)
  }, this)
  if (this.progressEnabled) {
    this.gauge.enable()
  }
},
                _buffer: [],
                record: [],
                maxRecordSize: 10000,
                log: function () { [native code] },
                emitLog: function (m) {
  if (this._paused) {
    this._buffer.push(m)
    return
  }
  if (this.progressEnabled) {
    this.gauge.pulse(m.prefix)
  }

  var l = this.levels[m.level]
  if (l === undefined) {
    return
  }

  if (l < this.levels[this.level]) {
    return
  }

  if (l > 0 && !isFinite(l)) {
    return
  }

  // If 'disp' is null or undefined, use the lvl as a default
  // Allows: '', 0 as valid disp
  var disp = log.disp[m.level] != null ? log.disp[m.level] : m.level
  this.clearProgress()
  m.message.split(/\r?\n/).forEach(function (line) {
    if (this.heading) {
      this.write(this.heading, this.headingStyle)
      this.write(' ')
    }
    this.write(disp, log.style[m.level])
    var p = m.prefix || ''
    if (p) {
      this.write(' ')
    }

    this.write(p, this.prefixStyle)
    this.write(' ' + line + '\n')
  }, this)
  this.showProgress()
},
                _format: function (msg, style) {
  if (!stream) {
    return
  }

  var output = ''
  if (this.useColor()) {
    style = style || {}
    var settings = []
    if (style.fg) {
      settings.push(style.fg)
    }

    if (style.bg) {
      settings.push('bg' + style.bg[0].toUpperCase() + style.bg.slice(1))
    }

    if (style.bold) {
      settings.push('bold')
    }

    if (style.underline) {
      settings.push('underline')
    }

    if (style.inverse) {
      settings.push('inverse')
    }

    if (settings.length) {
      output += consoleControl.color(settings)
    }

    if (style.beep) {
      output += consoleControl.beep()
    }
  }
  output += msg
  if (this.useColor()) {
    output += consoleControl.color('reset')
  }

  return output
},
                write: function (msg, style) {
  if (!stream) {
    return
  }

  stream.write(this._format(msg, style))
},
                addLevel: function (lvl, n, style, disp) {
  // If 'disp' is null or undefined, use the lvl as a default
  if (disp == null) {
    disp = lvl
  }

  this.levels[lvl] = n
  this.style[lvl] = style
  if (!this[lvl]) {
    this[lvl] = function () {
      var a = new Array(arguments.length + 1)
      a[0] = lvl
      for (var i = 0; i < arguments.length; i++) {
        a[i + 1] = arguments[i]
      }

      return this.log.apply(this, a)
    }.bind(this)
  }
  this.disp[lvl] = disp
},
                prefixStyle: {
                  fg: 'magenta'
                },
                headingStyle: {
                  fg: 'white',
                  bg: 'black'
                },
                style: {
                  silly: {
                    inverse: true
                  },
                  verbose: {
                    fg: 'blue',
                    bg: 'black'
                  },
                  info: {
                    fg: 'green'
                  },
                  timing: {
                    fg: 'green',
                    bg: 'black'
                  },
                  http: {
                    fg: 'green',
                    bg: 'black'
                  },
                  notice: {
                    fg: 'blue',
                    bg: 'black'
                  },
                  warn: {
                    fg: 'black',
                    bg: 'yellow'
                  },
                  error: {
                    fg: 'red',
                    bg: 'black'
                  },
                  silent: undefined
                },
                levels: {
                  silly: -Infinity,
                  verbose: 1000,
                  info: 2000,
                  timing: 2500,
                  http: 3000,
                  notice: 3500,
                  warn: 4000,
                  error: 5000,
                  silent: Infinity
                },
                disp: {
                  silly: 'sill',
                  verbose: 'verb',
                  info: 'info',
                  timing: 'timing',
                  http: 'http',
                  notice: 'notice',
                  warn: 'WARN',
                  error: 'ERR!',
                  silent: 'silent'
                },
                silly: function () { [native code] },
                verbose: function () { [native code] },
                info: function () { [native code] },
                timing: function () { [native code] },
                http: function () { [native code] },
                notice: function () { [native code] },
                warn: function () { [native code] },
                error: function () { [native code] },
                silent: function () { [native code] },
                Symbol(kCapture): false
              }
            },
            force: undefined,
            bail: undefined,
            ignoreWhitespace: undefined,
            regenerate: undefined,
            dryRun: undefined,
            cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
            diffOptions: undefined,
            queue: {
              queueNames: [
                'log',
                'conflicts',
                'default'
              ],
              __queues__: {
                log: {
                  __queue__: []
                },
                conflicts: {
                  __queue__: []
                },
                default: {
                  __queue__: []
                }
              },
              runOnAdd: false
            },
            generationStatus: {}
          },
          artifactInfo: {
            type: 'datasource',
            rootDir: 'src',
            outDir: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/src/datasources',
            name: 'localmodels',
            relPath: 'src/datasources',
            sharedData: {},
            forwardErrorToEnvironment: false,
            skipLocalCache: true,
            _: [],
            c: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
            y: true,
            initialGenerator: true,
            env: "[Circular]",
            resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/index.js',
            namespace: 'loopback4:datasource',
            'skip-cache': false,
            'skip-install': false,
            'force-install': false,
            'ask-answered': false,
            config: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
            yes: true,
            connector: 'mysql',
            url: '',
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'asdf',
            database: 'quiz',
            settings: {
              sharedData: {},
              forwardErrorToEnvironment: false,
              skipLocalCache: true,
              _: [],
              c: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
              y: true,
              initialGenerator: true,
              env: "[Circular]",
              resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/index.js',
              namespace: 'loopback4:datasource',
              'skip-cache': false,
              'skip-install': false,
              'force-install': false,
              'ask-answered': false,
              config: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
              yes: true,
              name: 'localmodels',
              connector: 'mysql',
              url: '',
              host: 'localhost',
              port: 3306,
              user: 'root',
              password: 'asdf',
              database: 'quiz'
            },
            className: 'Localmodels',
            fileName: 'localmodels',
            outFile: 'localmodels.datasource.ts'
          },
          connectorChoices: [
            {
              name: 'In-memory db [90m(supported by StrongLoop)[39m',
              value: 'memory'
            },
            {
              name: 'In-memory key-value connector [90m(supported by StrongLoop)[39m',
              value: 'kv-memory'
            },
            {
              name: 'IBM Object Storage [90m(supported by StrongLoop)[39m',
              value: 'ibm-object-storage'
            },
            {
              name: 'IBM Db2 (for Linux, Unix, Windows) [90m(supported by StrongLoop)[39m',
              value: 'db2'
            },
            {
              name: 'IBM i (Db2 for i) [90m(supported by StrongLoop)[39m',
              value: 'ibmi'
            },
            {
              name: 'IBM Db2 for z/OS [90m(supported by StrongLoop)[39m',
              value: 'db2z'
            },
            {
              name: 'IBM DashDB [90m(supported by StrongLoop)[39m',
              value: 'dashdb'
            },
            {
              name: 'IBM MQ Light [90m(supported by StrongLoop)[39m',
              value: 'mqlight'
            },
            {
              name: 'IBM Cloudant DB [90m(supported by StrongLoop)[39m',
              value: 'cloudant'
            },
            {
              name: 'Couchdb 2.x [90m(supported by StrongLoop)[39m',
              value: 'couchdb2'
            },
            {
              name: 'IBM WebSphere eXtreme Scale key-value connector [90m(supported by StrongLoop)[39m',
              value: 'kv-extreme-scale'
            },
            {
              name: 'Cassandra [90m(supported by StrongLoop)[39m',
              value: 'cassandra'
            },
            {
              name: 'gRPC [90m(supported by StrongLoop)[39m',
              value: 'grpc'
            },
            {
              name: 'Redis key-value connector [90m(supported by StrongLoop)[39m',
              value: 'kv-redis'
            },
            {
              name: 'MongoDB [90m(supported by StrongLoop)[39m',
              value: 'mongodb'
            },
            {
              name: 'MySQL [90m(supported by StrongLoop)[39m',
              value: 'mysql'
            },
            {
              name: 'PostgreSQL [90m(supported by StrongLoop)[39m',
              value: 'postgresql'
            },
            {
              name: 'Oracle [90m(supported by StrongLoop)[39m',
              value: 'oracle'
            },
            {
              name: 'Microsoft SQL [90m(supported by StrongLoop)[39m',
              value: 'mssql'
            },
            {
              name: 'OpenAPI [90m(supported by StrongLoop)[39m',
              value: 'openapi'
            },
            {
              name: 'REST services [90m(supported by StrongLoop)[39m',
              value: 'rest'
            },
            {
              name: 'SOAP webservices [90m(supported by StrongLoop)[39m',
              value: 'soap'
            },
            {
              name: 'Couchbase [90m(provided by community)[39m',
              value: 'couchbase'
            },
            {
              name: 'Neo4j [90m(provided by community)[39m',
              value: 'neo4j'
            },
            {
              name: 'Twilio Connector [90m(provided by community)[39m',
              value: 'twilio'
            },
            {
              name: 'Kafka [90m(provided by community)[39m',
              value: 'kafka'
            },
            {
              name: 'SAP HANA [90m(provided by community)[39m',
              value: 'saphana'
            },
            {
              name: 'ElasticSearch [90m(provided by community)[39m',
              value: 'es'
            },
            {
              name: 'z/OS Connect Enterprise Edition [90m(supported by StrongLoop)[39m',
              value: 'zosconnectee'
            },
            'other'
          ],
          classNameSeparator: ', ',
          _environmentOptions: {
            sharedData: {},
            forwardErrorToEnvironment: false,
            skipLocalCache: true,
            env: "[Circular]",
            resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/index.js',
            namespace: 'loopback4:datasource'
          },
          _running: true,
          _taskStatus: {
            cancelled: false,
            timestamp: new Date('2022-09-29T17:59:09.605Z')
          },
          runningState: {
            namespace: 'loopback4:datasource',
            queueName: 'default',
            methodName: 'scaffold'
          },
          Symbol(kCapture): false
        }
      }
    },
    _generators: {},
    _composeStore: {},
    enableConflicterIgnore: true,
    compatibilityMode: false,
    _rootGenerator: {
      _events: {},
      _eventsCount: 0,
      _maxListeners: undefined,
      options: {
        sharedData: {},
        forwardErrorToEnvironment: false,
        skipLocalCache: true,
        _: [],
        c: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
        y: true,
        initialGenerator: true,
        env: "[Circular]",
        resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/index.js',
        namespace: 'loopback4:datasource',
        'skip-cache': false,
        'skip-install': false,
        'force-install': false,
        'ask-answered': false,
        config: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
        yes: true,
        name: 'localmodels',
        connector: 'mysql',
        url: '',
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'asdf',
        database: 'quiz'
      },
      _initOptions: {
        sharedData: {},
        forwardErrorToEnvironment: false,
        skipLocalCache: true,
        _: [],
        c: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
        y: true,
        initialGenerator: true,
        env: "[Circular]",
        resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/index.js',
        namespace: 'loopback4:datasource'
      },
      _args: [],
      _options: {
        help: {
          name: 'help',
          type: function Boolean() { [native code] },
          alias: 'h',
          description: 'Print the generator\'s options and usage'
        },
        'skip-cache': {
          name: 'skip-cache',
          type: function Boolean() { [native code] },
          description: 'Do not remember prompt answers',
          default: false
        },
        'skip-install': {
          name: 'skip-install',
          type: function Boolean() { [native code] },
          description: 'Do not automatically install dependencies',
          default: false
        },
        'force-install': {
          name: 'force-install',
          type: function Boolean() { [native code] },
          description: 'Fail on install dependencies error',
          default: false
        },
        'ask-answered': {
          type: function Boolean() { [native code] },
          description: 'Show prompts for already configured options',
          default: false,
          name: 'ask-answered',
          hide: false
        },
        config: {
          type: function String() { [native code] },
          alias: 'c',
          description: 'JSON file name or value to configure options',
          name: 'config',
          hide: false
        },
        yes: {
          type: function Boolean() { [native code] },
          alias: 'y',
          description: 'Skip all confirmation prompts with default or provided value',
          name: 'yes',
          hide: false
        },
        format: {
          type: function Boolean() { [native code] },
          description: 'Format generated code using npm run lint:fix',
          name: 'format',
          hide: false
        },
        packageManager: {
          type: function String() { [native code] },
          description: 'Change the default package manager',
          alias: 'pm',
          name: 'packageManager',
          hide: false
        }
      },
      _arguments: [
        {
          type: function String() { [native code] },
          required: false,
          description: 'Name for the datasource',
          name: 'name'
        }
      ],
      _prompts: [],
      _composedWith: [],
      _namespace: 'loopback4:datasource',
      _namespaceId: undefined,
      yoGeneratorVersion: '5.7.0',
      features: {
        unique: undefined
      },
      args: [],
      arguments: [],
      env: "[Circular]",
      resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/index.js',
      description: '',
      contextRoot: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
      _destinationRoot: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
      _config: {
        path: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json',
        name: '@loopback/cli',
        fs: {
          store: {
            _events: {
              change: [
                (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    },
                (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    }
              ]
            },
            _eventsCount: 1,
            _maxListeners: 0,
            store: {
              '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json': {
                stat: null,
                _contents: null,
                history: [
                  '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json'
                ],
                _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                _isVinyl: true,
                _symlink: null
              },
              '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json': {
                stat: {
                  dev: 2055,
                  mode: 33279,
                  nlink: 1,
                  uid: 1000,
                  gid: 1000,
                  rdev: 0,
                  blksize: 4096,
                  ino: 2241697,
                  size: 2180,
                  blocks: 8,
                  atimeMs: 1664473760957.5466,
                  mtimeMs: 1664473760805.593,
                  ctimeMs: 1664473760805.593,
                  birthtimeMs: 0,
                  atime: new Date('2022-09-29T17:49:20.958Z'),
                  mtime: new Date('2022-09-29T17:49:20.806Z'),
                  ctime: new Date('2022-09-29T17:49:20.806Z'),
                  birthtime: new Date('1970-01-01T00:00:00.000Z')
                },
                _contents: {
                  '0': 123,
                  '1': 10,
                  '2': 32,
                  '3': 32,
                  '4': 34,
                  '5': 110,
                  '6': 97,
                  '7': 109,
                  '8': 101,
                  '9': 34,
                  '10': 58,
                  '11': 32,
                  '12': 34,
                  '13': 116,
                  '14': 101,
                  '15': 115,
                  '16': 116,
                  '17': 45,
                  '18': 97,
                  '19': 112,
                  '20': 112,
                  '21': 34,
                  '22': 44,
                  '23': 10,
                  '24': 32,
                  '25': 32,
                  '26': 34,
                  '27': 118,
                  '28': 101,
                  '29': 114,
                  '30': 115,
                  '31': 105,
                  '32': 111,
                  '33': 110,
                  '34': 34,
                  '35': 58,
                  '36': 32,
                  '37': 34,
                  '38': 48,
                  '39': 46,
                  '40': 48,
                  '41': 46,
                  '42': 49,
                  '43': 34,
                  '44': 44,
                  '45': 10,
                  '46': 32,
                  '47': 32,
                  '48': 34,
                  '49': 100,
                  '50': 101,
                  '51': 115,
                  '52': 99,
                  '53': 114,
                  '54': 105,
                  '55': 112,
                  '56': 116,
                  '57': 105,
                  '58': 111,
                  '59': 110,
                  '60': 34,
                  '61': 58,
                  '62': 32,
                  '63': 34,
                  '64': 112,
                  '65': 97,
                  '66': 116,
                  '67': 114,
                  '68': 105,
                  '69': 99,
                  '70': 107,
                  '71': 34,
                  '72': 44,
                  '73': 10,
                  '74': 32,
                  '75': 32,
                  '76': 34,
                  '77': 107,
                  '78': 101,
                  '79': 121,
                  '80': 119,
                  '81': 111,
                  '82': 114,
                  '83': 100,
                  '84': 115,
                  '85': 34,
                  '86': 58,
                  '87': 32,
                  '88': 91,
                  '89': 10,
                  '90': 32,
                  '91': 32,
                  '92': 32,
                  '93': 32,
                  '94': 34,
                  '95': 108,
                  '96': 111,
                  '97': 111,
                  '98': 112,
                  '99': 98,
                  '100': 97,
                  '101': 99,
                  '102': 107,
                  '103': 45,
                  '104': 97,
                  '105': 112,
                  '106': 112,
                  '107': 108,
                  '108': 105,
                  '109': 99,
                  '110': 97,
                  '111': 116,
                  '112': 105,
                  '113': 111,
                  '114': 110,
                  '115': 34,
                  '116': 44,
                  '117': 10,
                  '118': 32,
                  '119': 32,
                  '120': 32,
                  '121': 32,
                  '122': 34,
                  '123': 108,
                  '124': 111,
                  '125': 111,
                  '126': 112,
                  '127': 98,
                  '128': 97,
                  '129': 99,
                  '130': 107,
                  '131': 34,
                  '132': 10,
                  '133': 32,
                  '134': 32,
                  '135': 93,
                  '136': 44,
                  '137': 10,
                  '138': 32,
                  '139': 32,
                  '140': 34,
                  '141': 109,
                  '142': 97,
                  '143': 105,
                  '144': 110,
                  '145': 34,
                  '146': 58,
                  '147': 32,
                  '148': 34,
                  '149': 100,
                  '150': 105,
                  '151': 115,
                  '152': 116,
                  '153': 47,
                  '154': 105,
                  '155': 110,
                  '156': 100,
                  '157': 101,
                  '158': 120,
                  '159': 46,
                  '160': 106,
                  '161': 115,
                  '162': 34,
                  '163': 44,
                  '164': 10,
                  '165': 32,
                  '166': 32,
                  '167': 34,
                  '168': 116,
                  '169': 121,
                  '170': 112,
                  '171': 101,
                  '172': 115,
                  '173': 34,
                  '174': 58,
                  '175': 32,
                  '176': 34,
                  '177': 100,
                  '178': 105,
                  '179': 115,
                  '180': 116,
                  '181': 47,
                  '182': 105,
                  '183': 110,
                  '184': 100,
                  '185': 101,
                  '186': 120,
                  '187': 46,
                  '188': 100,
                  '189': 46,
                  '190': 116,
                  '191': 115,
                  '192': 34,
                  '193': 44,
                  '194': 10,
                  '195': 32,
                  '196': 32,
                  '197': 34,
                  '198': 101,
                  '199': 110,
                  '200': 103,
                  '201': 105,
                  '202': 110,
                  '203': 101,
                  '204': 115,
                  '205': 34,
                  '206': 58,
                  '207': 32,
                  '208': 123,
                  '209': 10,
                  '210': 32,
                  '211': 32,
                  '212': 32,
                  '213': 32,
                  '214': 34,
                  '215': 110,
                  '216': 111,
                  '217': 100,
                  '218': 101,
                  '219': 34,
                  '220': 58,
                  '221': 32,
                  '222': 34,
                  '223': 49,
                  '224': 52,
                  '225': 32,
                  '226': 124,
                  '227': 124,
                  '228': 32,
                  '229': 49,
                  '230': 54,
                  '231': 32,
                  '232': 124,
                  '233': 124,
                  '234': 32,
                  '235': 49,
                  '236': 55,
                  '237': 32,
                  '238': 124,
                  '239': 124,
                  '240': 32,
                  '241': 49,
                  '242': 56,
                  '243': 34,
                  '244': 10,
                  '245': 32,
                  '246': 32,
                  '247': 125,
                  '248': 44,
                  '249': 10,
                  '250': 32,
                  '251': 32,
                  '252': 34,
                  '253': 115,
                  '254': 99,
                  '255': 114,
                  '256': 105,
                  '257': 112,
                  '258': 116,
                  '259': 115,
                  '260': 34,
                  '261': 58,
                  '262': 32,
                  '263': 123,
                  '264': 10,
                  '265': 32,
                  '266': 32,
                  '267': 32,
                  '268': 32,
                  '269': 34,
                  '270': 98,
                  '271': 117,
                  '272': 105,
                  '273': 108,
                  '274': 100,
                  '275': 34,
                  '276': 58,
                  '277': 32,
                  '278': 34,
                  '279': 108,
                  '280': 98,
                  '281': 45,
                  '282': 116,
                  '283': 115,
                  '284': 99,
                  '285': 34,
                  '286': 44,
                  '287': 10,
                  '288': 32,
                  '289': 32,
                  '290': 32,
                  '291': 32,
                  '292': 34,
                  '293': 98,
                  '294': 117,
                  '295': 105,
                  '296': 108,
                  '297': 100,
                  '298': 58,
                  '299': 119,
                  '300': 97,
                  '301': 116,
                  '302': 99,
                  '303': 104,
                  '304': 34,
                  '305': 58,
                  '306': 32,
                  '307': 34,
                  '308': 108,
                  '309': 98,
                  '310': 45,
                  '311': 116,
                  '312': 115,
                  '313': 99,
                  '314': 32,
                  '315': 45,
                  '316': 45,
                  '317': 119,
                  '318': 97,
                  '319': 116,
                  '320': 99,
                  '321': 104,
                  '322': 34,
                  '323': 44,
                  '324': 10,
                  '325': 32,
                  '326': 32,
                  '327': 32,
                  '328': 32,
                  '329': 34,
                  '330': 108,
                  '331': 105,
                  '332': 110,
                  '333': 116,
                  '334': 34,
                  '335': 58,
                  '336': 32,
                  '337': 34,
                  '338': 121,
                  '339': 97,
                  '340': 114,
                  '341': 110,
                  '342': 32,
                  '343': 114,
                  '344': 117,
                  '345': 110,
                  '346': 32,
                  '347': 101,
                  '348': 115,
                  '349': 108,
                  '350': 105,
                  '351': 110,
                  '352': 116,
                  '353': 32,
                  '354': 38,
                  '355': 38,
                  '356': 32,
                  '357': 121,
                  '358': 97,
                  '359': 114,
                  '360': 110,
                  '361': 32,
                  '362': 114,
                  '363': 117,
                  '364': 110,
                  '365': 32,
                  '366': 112,
                  '367': 114,
                  '368': 101,
                  '369': 116,
                  '370': 116,
                  '371': 105,
                  '372': 101,
                  '373': 114,
                  '374': 58,
                  '375': 99,
                  '376': 104,
                  '377': 101,
                  '378': 99,
                  '379': 107,
                  '380': 34,
                  '381': 44,
                  '382': 10,
                  '383': 32,
                  '384': 32,
                  '385': 32,
                  '386': 32,
                  '387': 34,
                  '388': 108,
                  '389': 105,
                  '390': 110,
                  '391': 116,
                  '392': 58,
                  '393': 102,
                  '394': 105,
                  '395': 120,
                  '396': 34,
                  '397': 58,
                  '398': 32,
                  '399': 34,
                  '400': 121,
                  '401': 97,
                  '402': 114,
                  '403': 110,
                  '404': 32,
                  '405': 114,
                  '406': 117,
                  '407': 110,
                  '408': 32,
                  '409': 101,
                  '410': 115,
                  '411': 108,
                  '412': 105,
                  '413': 110,
                  '414': 116,
                  '415': 58,
                  '416': 102,
                  '417': 105,
                  '418': 120,
                  '419': 32,
                  '420': 38,
                  '421': 38,
                  '422': 32,
                  '423': 121,
                  '424': 97,
                  '425': 114,
                  '426': 110,
                  '427': 32,
                  '428': 114,
                  '429': 117,
                  '430': 110,
                  '431': 32,
                  '432': 112,
                  '433': 114,
                  '434': 101,
                  '435': 116,
                  '436': 116,
                  '437': 105,
                  '438': 101,
                  '439': 114,
                  '440': 58,
                  '441': 102,
                  '442': 105,
                  '443': 120,
                  '444': 34,
                  '445': 44,
                  '446': 10,
                  '447': 32,
                  '448': 32,
                  '449': 32,
                  '450': 32,
                  '451': 34,
                  '452': 112,
                  '453': 114,
                  '454': 101,
                  '455': 116,
                  '456': 116,
                  '457': 105,
                  '458': 101,
                  '459': 114,
                  '460': 58,
                  '461': 99,
                  '462': 108,
                  '463': 105,
                  '464': 34,
                  '465': 58,
                  '466': 32,
                  '467': 34,
                  '468': 108,
                  '469': 98,
                  '470': 45,
                  '471': 112,
                  '472': 114,
                  '473': 101,
                  '474': 116,
                  '475': 116,
                  '476': 105,
                  '477': 101,
                  '478': 114,
                  '479': 32,
                  '480': 92,
                  '481': 34,
                  '482': 42,
                  '483': 42,
                  '484': 47,
                  '485': 42,
                  '486': 46,
                  '487': 116,
                  '488': 115,
                  '489': 92,
                  '490': 34,
                  '491': 32,
                  '492': 92,
                  '493': 34,
                  '494': 42,
                  '495': 42,
                  '496': 47,
                  '497': 42,
                  '498': 46,
                  '499': 106,
                  '500': 115,
                  '501': 92,
                  '502': 34,
                  '503': 34,
                  '504': 44,
                  '505': 10,
                  '506': 32,
                  '507': 32,
                  '508': 32,
                  '509': 32,
                  '510': 34,
                  '511': 112,
                  '512': 114,
                  '513': 101,
                  '514': 116,
                  '515': 116,
                  '516': 105,
                  '517': 101,
                  '518': 114,
                  '519': 58,
                  '520': 99,
                  '521': 104,
                  '522': 101,
                  '523': 99,
                  '524': 107,
                  '525': 34,
                  '526': 58,
                  '527': 32,
                  '528': 34,
                  '529': 121,
                  '530': 97,
                  '531': 114,
                  '532': 110,
                  '533': 32,
                  '534': 114,
                  '535': 117,
                  '536': 110,
                  '537': 32,
                  '538': 112,
                  '539': 114,
                  '540': 101,
                  '541': 116,
                  '542': 116,
                  '543': 105,
                  '544': 101,
                  '545': 114,
                  '546': 58,
                  '547': 99,
                  '548': 108,
                  '549': 105,
                  '550': 32,
                  '551': 45,
                  '552': 108,
                  '553': 34,
                  '554': 44,
                  '555': 10,
                  '556': 32,
                  '557': 32,
                  '558': 32,
                  '559': 32,
                  '560': 34,
                  '561': 112,
                  '562': 114,
                  '563': 101,
                  '564': 116,
                  '565': 116,
                  '566': 105,
                  '567': 101,
                  '568': 114,
                  '569': 58,
                  '570': 102,
                  '571': 105,
                  '572': 120,
                  '573': 34,
                  '574': 58,
                  '575': 32,
                  '576': 34,
                  '577': 121,
                  '578': 97,
                  '579': 114,
                  '580': 110,
                  '581': 32,
                  '582': 114,
                  '583': 117,
                  '584': 110,
                  '585': 32,
                  '586': 112,
                  '587': 114,
                  '588': 101,
                  '589': 116,
                  '590': 116,
                  '591': 105,
                  '592': 101,
                  '593': 114,
                  '594': 58,
                  '595': 99,
                  '596': 108,
                  '597': 105,
                  '598': 32,
                  '599': 45,
                  '600': 45,
                  '601': 119,
                  '602': 114,
                  '603': 105,
                  '604': 116,
                  '605': 101,
                  '606': 34,
                  '607': 44,
                  '608': 10,
                  '609': 32,
                  '610': 32,
                  '611': 32,
                  '612': 32,
                  '613': 34,
                  '614': 101,
                  '615': 115,
                  '616': 108,
                  '617': 105,
                  '618': 110,
                  '619': 116,
                  '620': 34,
                  '621': 58,
                  '622': 32,
                  '623': 34,
                  '624': 108,
                  '625': 98,
                  '626': 45,
                  '627': 101,
                  '628': 115,
                  '629': 108,
                  '630': 105,
                  '631': 110,
                  '632': 116,
                  '633': 32,
                  '634': 45,
                  '635': 45,
                  '636': 114,
                  '637': 101,
                  '638': 112,
                  '639': 111,
                  '640': 114,
                  '641': 116,
                  '642': 45,
                  '643': 117,
                  '644': 110,
                  '645': 117,
                  '646': 115,
                  '647': 101,
                  '648': 100,
                  '649': 45,
                  '650': 100,
                  '651': 105,
                  '652': 115,
                  '653': 97,
                  '654': 98,
                  '655': 108,
                  '656': 101,
                  '657': 45,
                  '658': 100,
                  '659': 105,
                  '660': 114,
                  '661': 101,
                  '662': 99,
                  '663': 116,
                  '664': 105,
                  '665': 118,
                  '666': 101,
                  '667': 115,
                  '668': 32,
                  '669': 46,
                  '670': 34,
                  '671': 44,
                  '672': 10,
                  '673': 32,
                  '674': 32,
                  '675': 32,
                  '676': 32,
                  '677': 34,
                  '678': 101,
                  '679': 115,
                  '680': 108,
                  '681': 105,
                  '682': 110,
                  '683': 116,
                  '684': 58,
                  '685': 102,
                  '686': 105,
                  '687': 120,
                  '688': 34,
                  '689': 58,
                  '690': 32,
                  '691': 34,
                  '692': 121,
                  '693': 97,
                  '694': 114,
                  '695': 110,
                  '696': 32,
                  '697': 114,
                  '698': 117,
                  '699': 110,
                  '700': 32,
                  '701': 101,
                  '702': 115,
                  '703': 108,
                  '704': 105,
                  '705': 110,
                  '706': 116,
                  '707': 32,
                  '708': 45,
                  '709': 45,
                  '710': 102,
                  '711': 105,
                  '712': 120,
                  '713': 34,
                  '714': 44,
                  '715': 10,
                  '716': 32,
                  '717': 32,
                  '718': 32,
                  '719': 32,
                  '720': 34,
                  '721': 112,
                  '722': 114,
                  '723': 101,
                  '724': 116,
                  '725': 101,
                  '726': 115,
                  '727': 116,
                  '728': 34,
                  '729': 58,
                  '730': 32,
                  '731': 34,
                  '732': 121,
                  '733': 97,
                  '734': 114,
                  '735': 110,
                  '736': 32,
                  '737': 114,
                  '738': 117,
                  '739': 110,
                  '740': 32,
                  '741': 114,
                  '742': 101,
                  '743': 98,
                  '744': 117,
                  '745': 105,
                  '746': 108,
                  '747': 100,
                  '748': 34,
                  '749': 44,
                  '750': 10,
                  '751': 32,
                  '752': 32,
                  '753': 32,
                  '754': 32,
                  '755': 34,
                  '756': 116,
                  '757': 101,
                  '758': 115,
                  '759': 116,
                  '760': 34,
                  '761': 58,
                  '762': 32,
                  '763': 34,
                  '764': 108,
                  '765': 98,
                  '766': 45,
                  '767': 109,
                  '768': 111,
                  '769': 99,
                  '770': 104,
                  '771': 97,
                  '772': 32,
                  '773': 45,
                  '774': 45,
                  '775': 97,
                  '776': 108,
                  '777': 108,
                  '778': 111,
                  '779': 119,
                  '780': 45,
                  '781': 99,
                  '782': 111,
                  '783': 110,
                  '784': 115,
                  '785': 111,
                  '786': 108,
                  '787': 101,
                  '788': 45,
                  '789': 108,
                  '790': 111,
                  '791': 103,
                  '792': 115,
                  '793': 32,
                  '794': 92,
                  '795': 34,
                  '796': 100,
                  '797': 105,
                  '798': 115,
                  '799': 116,
                  '800': 47,
                  '801': 95,
                  '802': 95,
                  '803': 116,
                  '804': 101,
                  '805': 115,
                  '806': 116,
                  '807': 115,
                  '808': 95,
                  '809': 95,
                  '810': 92,
                  '811': 34,
                  '812': 34,
                  '813': 44,
                  '814': 10,
                  '815': 32,
                  '816': 32,
                  '817': 32,
                  '818': 32,
                  '819': 34,
                  '820': 112,
                  '821': 111,
                  '822': 115,
                  '823': 116,
                  '824': 116,
                  '825': 101,
                  '826': 115,
                  '827': 116,
                  '828': 34,
                  '829': 58,
                  '830': 32,
                  '831': 34,
                  '832': 121,
                  '833': 97,
                  '834': 114,
                  '835': 110,
                  '836': 32,
                  '837': 114,
                  '838': 117,
                  '839': 110,
                  '840': 32,
                  '841': 108,
                  '842': 105,
                  '843': 110,
                  '844': 116,
                  '845': 34,
                  '846': 44,
                  '847': 10,
                  '848': 32,
                  '849': 32,
                  '850': 32,
                  '851': 32,
                  '852': 34,
                  '853': 116,
                  '854': 101,
                  '855': 115,
                  '856': 116,
                  '857': 58,
                  '858': 100,
                  '859': 101,
                  '860': 118,
                  '861': 34,
                  '862': 58,
                  '863': 32,
                  '864': 34,
                  '865': 108,
                  '866': 98,
                  '867': 45,
                  '868': 109,
                  '869': 111,
                  '870': 99,
                  '871': 104,
                  '872': 97,
                  '873': 32,
                  '874': 45,
                  '875': 45,
                  '876': 97,
                  '877': 108,
                  '878': 108,
                  '879': 111,
                  '880': 119,
                  '881': 45,
                  '882': 99,
                  '883': 111,
                  '884': 110,
                  '885': 115,
                  '886': 111,
                  '887': 108,
                  '888': 101,
                  '889': 45,
                  '890': 108,
                  '891': 111,
                  '892': 103,
                  '893': 115,
                  '894': 32,
                  '895': 100,
                  '896': 105,
                  '897': 115,
                  '898': 116,
                  '899': 47,
                  '900': 95,
                  '901': 95,
                  '902': 116,
                  '903': 101,
                  '904': 115,
                  '905': 116,
                  '906': 115,
                  '907': 95,
                  '908': 95,
                  '909': 47,
                  '910': 42,
                  '911': 42,
                  '912': 47,
                  '913': 42,
                  '914': 46,
                  '915': 106,
                  '916': 115,
                  '917': 32,
                  '918': 38,
                  '919': 38,
                  '920': 32,
                  '921': 121,
                  '922': 97,
                  '923': 114,
                  '924': 110,
                  '925': 32,
                  '926': 114,
                  '927': 117,
                  '928': 110,
                  '929': 32,
                  '930': 112,
                  '931': 111,
                  '932': 115,
                  '933': 116,
                  '934': 116,
                  '935': 101,
                  '936': 115,
                  '937': 116,
                  '938': 34,
                  '939': 44,
                  '940': 10,
                  '941': 32,
                  '942': 32,
                  '943': 32,
                  '944': 32,
                  '945': 34,
                  '946': 100,
                  '947': 111,
                  '948': 99,
                  '949': 107,
                  '950': 101,
                  '951': 114,
                  '952': 58,
                  '953': 98,
                  '954': 117,
                  '955': 105,
                  '956': 108,
                  '957': 100,
                  '958': 34,
                  '959': 58,
                  '960': 32,
                  '961': 34,
                  '962': 100,
                  '963': 111,
                  '964': 99,
                  '965': 107,
                  '966': 101,
                  '967': 114,
                  '968': 32,
                  '969': 98,
                  '970': 117,
                  '971': 105,
                  '972': 108,
                  '973': 100,
                  '974': 32,
                  '975': 45,
                  '976': 116,
                  '977': 32,
                  '978': 116,
                  '979': 101,
                  '980': 115,
                  '981': 116,
                  '982': 45,
                  '983': 97,
                  '984': 112,
                  '985': 112,
                  '986': 32,
                  '987': 46,
                  '988': 34,
                  '989': 44,
                  '990': 10,
                  '991': 32,
                  '992': 32,
                  '993': 32,
                  '994': 32,
                  '995': 34,
                  '996': 100,
                  '997': 111,
                  '998': 99,
                  '999': 107,
                  '1000': 101,
                  '1001': 114,
                  '1002': 58,
                  '1003': 114,
                  '1004': 117,
                  '1005': 110,
                  '1006': 34,
                  '1007': 58,
                  '1008': 32,
                  '1009': 34,
                  '1010': 100,
                  '1011': 111,
                  '1012': 99,
                  '1013': 107,
                  '1014': 101,
                  '1015': 114,
                  '1016': 32,
                  '1017': 114,
                  '1018': 117,
                  '1019': 110,
                  '1020': 32,
                  '1021': 45,
                  '1022': 112,
                  '1023': 32,
                  '1024': 51,
                  '1025': 48,
                  '1026': 48,
                  '1027': 48,
                  '1028': 58,
                  '1029': 51,
                  '1030': 48,
                  '1031': 48,
                  '1032': 48,
                  '1033': 32,
                  '1034': 45,
                  '1035': 100,
                  '1036': 32,
                  '1037': 116,
                  '1038': 101,
                  '1039': 115,
                  '1040': 116,
                  '1041': 45,
                  '1042': 97,
                  '1043': 112,
                  '1044': 112,
                  '1045': 34,
                  '1046': 44,
                  '1047': 10,
                  '1048': 32,
                  '1049': 32,
                  '1050': 32,
                  '1051': 32,
                  '1052': 34,
                  '1053': 112,
                  '1054': 114,
                  '1055': 101,
                  '1056': 109,
                  '1057': 105,
                  '1058': 103,
                  '1059': 114,
                  '1060': 97,
                  '1061': 116,
                  '1062': 101,
                  '1063': 34,
                  '1064': 58,
                  '1065': 32,
                  '1066': 34,
                  '1067': 121,
                  '1068': 97,
                  '1069': 114,
                  '1070': 110,
                  '1071': 32,
                  '1072': 114,
                  '1073': 117,
                  '1074': 110,
                  '1075': 32,
                  '1076': 98,
                  '1077': 117,
                  '1078': 105,
                  '1079': 108,
                  '1080': 100,
                  '1081': 34,
                  '1082': 44,
                  '1083': 10,
                  '1084': 32,
                  '1085': 32,
                  '1086': 32,
                  '1087': 32,
                  '1088': 34,
                  '1089': 109,
                  '1090': 105,
                  '1091': 103,
                  '1092': 114,
                  '1093': 97,
                  '1094': 116,
                  '1095': 101,
                  '1096': 34,
                  '1097': 58,
                  '1098': 32,
                  '1099': 34,
                  '1100': 110,
                  '1101': 111,
                  '1102': 100,
                  '1103': 101,
                  '1104': 32,
                  '1105': 46,
                  '1106': 47,
                  '1107': 100,
                  '1108': 105,
                  '1109': 115,
                  '1110': 116,
                  '1111': 47,
                  '1112': 109,
                  '1113': 105,
                  '1114': 103,
                  '1115': 114,
                  '1116': 97,
                  '1117': 116,
                  '1118': 101,
                  '1119': 34,
                  '1120': 44,
                  '1121': 10,
                  '1122': 32,
                  '1123': 32,
                  '1124': 32,
                  '1125': 32,
                  '1126': 34,
                  '1127': 112,
                  '1128': 114,
                  '1129': 101,
                  '1130': 111,
                  '1131': 112,
                  '1132': 101,
                  '1133': 110,
                  '1134': 97,
                  '1135': 112,
                  '1136': 105,
                  '1137': 45,
                  '1138': 115,
                  '1139': 112,
                  '1140': 101,
                  '1141': 99,
                  '1142': 34,
                  '1143': 58,
                  '1144': 32,
                  '1145': 34,
                  '1146': 121,
                  '1147': 97,
                  '1148': 114,
                  '1149': 110,
                  '1150': 32,
                  '1151': 114,
                  '1152': 117,
                  '1153': 110,
                  '1154': 32,
                  '1155': 98,
                  '1156': 117,
                  '1157': 105,
                  '1158': 108,
                  '1159': 100,
                  '1160': 34,
                  '1161': 44,
                  '1162': 10,
                  '1163': 32,
                  '1164': 32,
                  '1165': 32,
                  '1166': 32,
                  '1167': 34,
                  '1168': 111,
                  '1169': 112,
                  '1170': 101,
                  '1171': 110,
                  '1172': 97,
                  '1173': 112,
                  '1174': 105,
                  '1175': 45,
                  '1176': 115,
                  '1177': 112,
                  '1178': 101,
                  '1179': 99,
                  '1180': 34,
                  '1181': 58,
                  '1182': 32,
                  '1183': 34,
                  '1184': 110,
                  '1185': 111,
                  '1186': 100,
                  '1187': 101,
                  '1188': 32,
                  '1189': 46,
                  '1190': 47,
                  '1191': 100,
                  '1192': 105,
                  '1193': 115,
                  '1194': 116,
                  '1195': 47,
                  '1196': 111,
                  '1197': 112,
                  '1198': 101,
                  '1199': 110,
                  '1200': 97,
                  '1201': 112,
                  '1202': 105,
                  '1203': 45,
                  '1204': 115,
                  '1205': 112,
                  '1206': 101,
                  '1207': 99,
                  '1208': 34,
                  '1209': 44,
                  '1210': 10,
                  '1211': 32,
                  '1212': 32,
                  '1213': 32,
                  '1214': 32,
                  '1215': 34,
                  '1216': 112,
                  '1217': 114,
                  '1218': 101,
                  '1219': 115,
                  '1220': 116,
                  '1221': 97,
                  '1222': 114,
                  '1223': 116,
                  '1224': 34,
                  '1225': 58,
                  '1226': 32,
                  '1227': 34,
                  '1228': 121,
                  '1229': 97,
                  '1230': 114,
                  '1231': 110,
                  '1232': 32,
                  '1233': 114,
                  '1234': 117,
                  '1235': 110,
                  '1236': 32,
                  '1237': 114,
                  '1238': 101,
                  '1239': 98,
                  '1240': 117,
                  '1241': 105,
                  '1242': 108,
                  '1243': 100,
                  '1244': 34,
                  '1245': 44,
                  '1246': 10,
                  '1247': 32,
                  '1248': 32,
                  '1249': 32,
                  '1250': 32,
                  '1251': 34,
                  '1252': 115,
                  '1253': 116,
                  '1254': 97,
                  '1255': 114,
                  '1256': 116,
                  '1257': 34,
                  '1258': 58,
                  '1259': 32,
                  '1260': 34,
                  '1261': 110,
                  '1262': 111,
                  '1263': 100,
                  '1264': 101,
                  '1265': 32,
                  '1266': 45,
                  '1267': 114,
                  '1268': 32,
                  '1269': 115,
                  '1270': 111,
                  '1271': 117,
                  '1272': 114,
                  '1273': 99,
                  '1274': 101,
                  '1275': 45,
                  '1276': 109,
                  '1277': 97,
                  '1278': 112,
                  '1279': 45,
                  '1280': 115,
                  '1281': 117,
                  '1282': 112,
                  '1283': 112,
                  '1284': 111,
                  '1285': 114,
                  '1286': 116,
                  '1287': 47,
                  '1288': 114,
                  '1289': 101,
                  '1290': 103,
                  '1291': 105,
                  '1292': 115,
                  '1293': 116,
                  '1294': 101,
                  '1295': 114,
                  '1296': 32,
                  '1297': 46,
                  '1298': 34,
                  '1299': 44,
                  '1300': 10,
                  '1301': 32,
                  '1302': 32,
                  '1303': 32,
                  '1304': 32,
                  '1305': 34,
                  '1306': 99,
                  '1307': 108,
                  '1308': 101,
                  '1309': 97,
                  '1310': 110,
                  '1311': 34,
                  '1312': 58,
                  '1313': 32,
                  '1314': 34,
                  '1315': 108,
                  '1316': 98,
                  '1317': 45,
                  '1318': 99,
                  '1319': 108,
                  '1320': 101,
                  '1321': 97,
                  '1322': 110,
                  '1323': 32,
                  '1324': 100,
                  '1325': 105,
                  '1326': 115,
                  '1327': 116,
                  '1328': 32,
                  '1329': 42,
                  '1330': 46,
                  '1331': 116,
                  '1332': 115,
                  '1333': 98,
                  '1334': 117,
                  '1335': 105,
                  '1336': 108,
                  '1337': 100,
                  '1338': 105,
                  '1339': 110,
                  '1340': 102,
                  '1341': 111,
                  '1342': 32,
                  '1343': 46,
                  '1344': 101,
                  '1345': 115,
                  '1346': 108,
                  '1347': 105,
                  '1348': 110,
                  '1349': 116,
                  '1350': 99,
                  '1351': 97,
                  '1352': 99,
                  '1353': 104,
                  '1354': 101,
                  '1355': 34,
                  '1356': 44,
                  '1357': 10,
                  '1358': 32,
                  '1359': 32,
                  '1360': 32,
                  '1361': 32,
                  '1362': 34,
                  '1363': 114,
                  '1364': 101,
                  '1365': 98,
                  '1366': 117,
                  '1367': 105,
                  '1368': 108,
                  '1369': 100,
                  '1370': 34,
                  '1371': 58,
                  '1372': 32,
                  '1373': 34,
                  '1374': 121,
                  '1375': 97,
                  '1376': 114,
                  '1377': 110,
                  '1378': 32,
                  '1379': 114,
                  '1380': 117,
                  '1381': 110,
                  '1382': 32,
                  '1383': 99,
                  '1384': 108,
                  '1385': 101,
                  '1386': 97,
                  '1387': 110,
                  '1388': 32,
                  '1389': 38,
                  '1390': 38,
                  '1391': 32,
                  '1392': 121,
                  '1393': 97,
                  '1394': 114,
                  '1395': 110,
                  '1396': 32,
                  '1397': 114,
                  '1398': 117,
                  '1399': 110,
                  '1400': 32,
                  '1401': 98,
                  '1402': 117,
                  '1403': 105,
                  '1404': 108,
                  '1405': 100,
                  '1406': 34,
                  '1407': 10,
                  '1408': 32,
                  '1409': 32,
                  '1410': 125,
                  '1411': 44,
                  '1412': 10,
                  '1413': 32,
                  '1414': 32,
                  '1415': 34,
                  '1416': 114,
                  '1417': 101,
                  '1418': 112,
                  '1419': 111,
                  '1420': 115,
                  '1421': 105,
                  '1422': 116,
                  '1423': 111,
                  '1424': 114,
                  '1425': 121,
                  '1426': 34,
                  '1427': 58,
                  '1428': 32,
                  '1429': 123,
                  '1430': 10,
                  '1431': 32,
                  '1432': 32,
                  '1433': 32,
                  '1434': 32,
                  '1435': 34,
                  '1436': 116,
                  '1437': 121,
                  '1438': 112,
                  '1439': 101,
                  '1440': 34,
                  '1441': 58,
                  '1442': 32,
                  '1443': 34,
                  '1444': 103,
                  '1445': 105,
                  '1446': 116,
                  '1447': 34,
                  '1448': 44,
                  '1449': 10,
                  '1450': 32,
                  '1451': 32,
                  '1452': 32,
                  '1453': 32,
                  '1454': 34,
                  '1455': 117,
                  '1456': 114,
                  '1457': 108,
                  '1458': 34,
                  '1459': 58,
                  '1460': 32,
                  '1461': 34,
                  '1462': 34,
                  '1463': 10,
                  '1464': 32,
                  '1465': 32,
                  '1466': 125,
                  '1467': 44,
                  '1468': 10,
                  '1469': 32,
                  '1470': 32,
                  '1471': 34,
                  '1472': 97,
                  '1473': 117,
                  '1474': 116,
                  '1475': 104,
                  '1476': 111,
                  '1477': 114,
                  '1478': 34,
                  '1479': 58,
                  '1480': 32,
                  '1481': 34,
                  '1482': 77,
                  '1483': 117,
                  '1484': 104,
                  '1485': 97,
                  '1486': 109,
                  '1487': 109,
                  '1488': 97,
                  '1489': 100,
                  '1490': 32,
                  '1491': 65,
                  '1492': 97,
                  '1493': 113,
                  '1494': 105,
                  '1495': 108,
                  '1496': 32,
                  '1497': 60,
                  '1498': 97,
                  '1499': 97,
                  '1500': 113,
                  '1501': 105,
                  '1502': 108,
                  '1503': 110,
                  '1504': 105,
                  '1505': 122,
                  '1506': 64,
                  '1507': 121,
                  '1508': 97,
                  '1509': 104,
                  '1510': 111,
                  '1511': 111,
                  '1512': 46,
                  '1513': 99,
                  '1514': 111,
                  '1515': 109,
                  '1516': 62,
                  '1517': 34,
                  '1518': 44,
                  '1519': 10,
                  '1520': 32,
                  '1521': 32,
                  '1522': 34,
                  '1523': 108,
                  '1524': 105,
                  '1525': 99,
                  '1526': 101,
                  '1527': 110,
                  '1528': 115,
                  '1529': 101,
                  '1530': 34,
                  '1531': 58,
                  '1532': 32,
                  '1533': 34,
                  '1534': 34,
                  '1535': 44,
                  '1536': 10,
                  '1537': 32,
                  '1538': 32,
                  '1539': 34,
                  '1540': 102,
                  '1541': 105,
                  '1542': 108,
                  '1543': 101,
                  '1544': 115,
                  '1545': 34,
                  '1546': 58,
                  '1547': 32,
                  '1548': 91,
                  '1549': 10,
                  '1550': 32,
                  '1551': 32,
                  '1552': 32,
                  '1553': 32,
                  '1554': 34,
                  '1555': 82,
                  '1556': 69,
                  '1557': 65,
                  '1558': 68,
                  '1559': 77,
                  '1560': 69,
                  '1561': 46,
                  '1562': 109,
                  '1563': 100,
                  '1564': 34,
                  '1565': 44,
                  '1566': 10,
                  '1567': 32,
                  '1568': 32,
                  '1569': 32,
                  '1570': 32,
                  '1571': 34,
                  '1572': 100,
                  '1573': 105,
                  '1574': 115,
                  '1575': 116,
                  '1576': 34,
                  '1577': 44,
                  '1578': 10,
                  '1579': 32,
                  '1580': 32,
                  '1581': 32,
                  '1582': 32,
                  '1583': 34,
                  '1584': 115,
                  '1585': 114,
                  '1586': 99,
                  '1587': 34,
                  '1588': 44,
                  '1589': 10,
                  '1590': 32,
                  '1591': 32,
                  '1592': 32,
                  '1593': 32,
                  '1594': 34,
                  '1595': 33,
                  '1596': 42,
                  '1597': 47,
                  '1598': 95,
                  '1599': 95,
                  '1600': 116,
                  '1601': 101,
                  '1602': 115,
                  '1603': 116,
                  '1604': 115,
                  '1605': 95,
                  '1606': 95,
                  '1607': 34,
                  '1608': 10,
                  '1609': 32,
                  '1610': 32,
                  '1611': 93,
                  '1612': 44,
                  '1613': 10,
                  '1614': 32,
                  '1615': 32,
                  '1616': 34,
                  '1617': 100,
                  '1618': 101,
                  '1619': 112,
                  '1620': 101,
                  '1621': 110,
                  '1622': 100,
                  '1623': 101,
                  '1624': 110,
                  '1625': 99,
                  '1626': 105,
                  '1627': 101,
                  '1628': 115,
                  '1629': 34,
                  '1630': 58,
                  '1631': 32,
                  '1632': 123,
                  '1633': 10,
                  '1634': 32,
                  '1635': 32,
                  '1636': 32,
                  '1637': 32,
                  '1638': 34,
                  '1639': 64,
                  '1640': 108,
                  '1641': 111,
                  '1642': 111,
                  '1643': 112,
                  '1644': 98,
                  '1645': 97,
                  '1646': 99,
                  '1647': 107,
                  '1648': 47,
                  '1649': 98,
                  '1650': 111,
                  '1651': 111,
                  '1652': 116,
                  '1653': 34,
                  '1654': 58,
                  '1655': 32,
                  '1656': 34,
                  '1657': 94,
                  '1658': 53,
                  '1659': 46,
                  '1660': 48,
                  '1661': 46,
                  '1662': 51,
                  '1663': 34,
                  '1664': 44,
                  '1665': 10,
                  '1666': 32,
                  '1667': 32,
                  '1668': 32,
                  '1669': 32,
                  '1670': 34,
                  '1671': 64,
                  '1672': 108,
                  '1673': 111,
                  '1674': 111,
                  '1675': 112,
                  '1676': 98,
                  '1677': 97,
                  '1678': 99,
                  '1679': 107,
                  '1680': 47,
                  '1681': 99,
                  '1682': 111,
                  '1683': 114,
                  '1684': 101,
                  '1685': 34,
                  '1686': 58,
                  '1687': 32,
                  '1688': 34,
                  '1689': 94,
                  '1690': 52,
                  '1691': 46,
                  '1692': 48,
                  '1693': 46,
                  '1694': 51,
                  '1695': 34,
                  '1696': 44,
                  '1697': 10,
                  '1698': 32,
                  '1699': 32,
                  '1700': 32,
                  '1701': 32,
                  '1702': 34,
                  '1703': 64,
                  '1704': 108,
                  '1705': 111,
                  '1706': 111,
                  '1707': 112,
                  '1708': 98,
                  '1709': 97,
                  '1710': 99,
                  '1711': 107,
                  '1712': 47,
                  '1713': 114,
                  '1714': 101,
                  '1715': 112,
                  '1716': 111,
                  '1717': 115,
                  '1718': 105,
                  '1719': 116,
                  '1720': 111,
                  '1721': 114,
                  '1722': 121,
                  '1723': 34,
                  '1724': 58,
                  '1725': 32,
                  '1726': 34,
                  '1727': 94,
                  '1728': 53,
                  '1729': 46,
                  '1730': 48,
                  '1731': 46,
                  '1732': 51,
                  '1733': 34,
                  '1734': 44,
                  '1735': 10,
                  '1736': 32,
                  '1737': 32,
                  '1738': 32,
                  '1739': 32,
                  '1740': 34,
                  '1741': 64,
                  '1742': 108,
                  '1743': 111,
                  '1744': 111,
                  '1745': 112,
                  '1746': 98,
                  '1747': 97,
                  '1748': 99,
                  '1749': 107,
                  '1750': 47,
                  '1751': 114,
                  '1752': 101,
                  '1753': 115,
                  '1754': 116,
                  '1755': 34,
                  '1756': 58,
                  '1757': 32,
                  '1758': 34,
                  '1759': 94,
                  '1760': 49,
                  '1761': 50,
                  '1762': 46,
                  '1763': 48,
                  '1764': 46,
                  '1765': 51,
                  '1766': 34,
                  '1767': 44,
                  '1768': 10,
                  '1769': 32,
                  '1770': 32,
                  '1771': 32,
                  '1772': 32,
                  '1773': 34,
                  '1774': 64,
                  '1775': 108,
                  '1776': 111,
                  '1777': 111,
                  '1778': 112,
                  '1779': 98,
                  '1780': 97,
                  '1781': 99,
                  '1782': 107,
                  '1783': 47,
                  '1784': 114,
                  '1785': 101,
                  '1786': 115,
                  '1787': 116,
                  '1788': 45,
                  '1789': 101,
                  '1790': 120,
                  '1791': 112,
                  '1792': 108,
                  '1793': 111,
                  '1794': 114,
                  '1795': 101,
                  '1796': 114,
                  '1797': 34,
                  '1798': 58,
                  '1799': 32,
                  '1800': 34,
                  '1801': 94,
                  '1802': 53,
                  '1803': 46,
                  '1804': 48,
                  '1805': 46,
                  '1806': 51,
                  '1807': 34,
                  '1808': 44,
                  '1809': 10,
                  '1810': 32,
                  '1811': 32,
                  '1812': 32,
                  '1813': 32,
                  '1814': 34,
                  '1815': 64,
                  '1816': 108,
                  '1817': 111,
                  '1818': 111,
                  '1819': 112,
                  '1820': 98,
                  '1821': 97,
                  '1822': 99,
                  '1823': 107,
                  '1824': 47,
                  '1825': 115,
                  '1826': 101,
                  '1827': 114,
                  '1828': 118,
                  '1829': 105,
                  '1830': 99,
                  '1831': 101,
                  '1832': 45,
                  '1833': 112,
                  '1834': 114,
                  '1835': 111,
                  '1836': 120,
                  '1837': 121,
                  '1838': 34,
                  '1839': 58,
                  '1840': 32,
                  '1841': 34,
                  '1842': 94,
                  '1843': 53,
                  '1844': 46,
                  '1845': 48,
                  '1846': 46,
                  '1847': 51,
                  '1848': 34,
                  '1849': 44,
                  '1850': 10,
                  '1851': 32,
                  '1852': 32,
                  '1853': 32,
                  '1854': 32,
                  '1855': 34,
                  '1856': 108,
                  '1857': 111,
                  '1858': 111,
                  '1859': 112,
                  '1860': 98,
                  '1861': 97,
                  '1862': 99,
                  '1863': 107,
                  '1864': 45,
                  '1865': 99,
                  '1866': 111,
                  '1867': 110,
                  '1868': 110,
                  '1869': 101,
                  '1870': 99,
                  '1871': 116,
                  '1872': 111,
                  '1873': 114,
                  '1874': 45,
                  '1875': 109,
                  '1876': 121,
                  '1877': 115,
                  '1878': 113,
                  '1879': 108,
                  '1880': 34,
                  '1881': 58,
                  '1882': 32,
                  '1883': 34,
                  '1884': 94,
                  '1885': 53,
                  '1886': 46,
                  '1887': 51,
                  '1888': 46,
                  '1889': 48,
                  '1890': 34,
                  '1891': 44,
                  '1892': 10,
                  '1893': 32,
                  '1894': 32,
                  '1895': 32,
                  '1896': 32,
                  '1897': 34,
                  '1898': 116,
                  '1899': 115,
                  '1900': 108,
                  '1901': 105,
                  '1902': 98,
                  '1903': 34,
                  '1904': 58,
                  '1905': 32,
                  '1906': 34,
                  '1907': 94,
                  '1908': 50,
                  '1909': 46,
                  '1910': 48,
                  '1911': 46,
                  '1912': 48,
                  '1913': 34,
                  '1914': 10,
                  '1915': 32,
                  '1916': 32,
                  '1917': 125,
                  '1918': 44,
                  '1919': 10,
                  '1920': 32,
                  '1921': 32,
                  '1922': 34,
                  '1923': 100,
                  '1924': 101,
                  '1925': 118,
                  '1926': 68,
                  '1927': 101,
                  '1928': 112,
                  '1929': 101,
                  '1930': 110,
                  '1931': 100,
                  '1932': 101,
                  '1933': 110,
                  '1934': 99,
                  '1935': 105,
                  '1936': 101,
                  '1937': 115,
                  '1938': 34,
                  '1939': 58,
                  '1940': 32,
                  '1941': 123,
                  '1942': 10,
                  '1943': 32,
                  '1944': 32,
                  '1945': 32,
                  '1946': 32,
                  '1947': 34,
                  '1948': 64,
                  '1949': 108,
                  '1950': 111,
                  '1951': 111,
                  '1952': 112,
                  '1953': 98,
                  '1954': 97,
                  '1955': 99,
                  '1956': 107,
                  '1957': 47,
                  '1958': 98,
                  '1959': 117,
                  '1960': 105,
                  '1961': 108,
                  '1962': 100,
                  '1963': 34,
                  '1964': 58,
                  '1965': 32,
                  '1966': 34,
                  '1967': 94,
                  '1968': 57,
                  '1969': 46,
                  '1970': 48,
                  '1971': 46,
                  '1972': 51,
                  '1973': 34,
                  '1974': 44,
                  '1975': 10,
                  '1976': 32,
                  '1977': 32,
                  '1978': 32,
                  '1979': 32,
                  '1980': 34,
                  '1981': 64,
                  '1982': 108,
                  '1983': 111,
                  '1984': 111,
                  '1985': 112,
                  '1986': 98,
                  '1987': 97,
                  '1988': 99,
                  '1989': 107,
                  '1990': 47,
                  '1991': 101,
                  '1992': 115,
                  '1993': 108,
                  '1994': 105,
                  '1995': 110,
                  '1996': 116,
                  '1997': 45,
                  '1998': 99,
                  '1999': 111,
                  '2000': 110,
                  '2001': 102,
                  '2002': 105,
                  '2003': 103,
                  '2004': 34,
                  '2005': 58,
                  '2006': 32,
                  '2007': 34,
                  '2008': 94,
                  '2009': 49,
                  '2010': 51,
                  '2011': 46,
                  '2012': 48,
                  '2013': 46,
                  '2014': 51,
                  '2015': 34,
                  '2016': 44,
                  '2017': 10,
                  '2018': 32,
                  '2019': 32,
                  '2020': 32,
                  '2021': 32,
                  '2022': 34,
                  '2023': 64,
                  '2024': 108,
                  '2025': 111,
                  '2026': 111,
                  '2027': 112,
                  '2028': 98,
                  '2029': 97,
                  '2030': 99,
                  '2031': 107,
                  '2032': 47,
                  '2033': 116,
                  '2034': 101,
                  '2035': 115,
                  '2036': 116,
                  '2037': 108,
                  '2038': 97,
                  '2039': 98,
                  '2040': 34,
                  '2041': 58,
                  '2042': 32,
                  '2043': 34,
                  '2044': 94,
                  '2045': 53,
                  '2046': 46,
                  '2047': 48,
                  '2048': 46,
                  '2049': 51,
                  '2050': 34,
                  '2051': 44,
                  '2052': 10,
                  '2053': 32,
                  '2054': 32,
                  '2055': 32,
                  '2056': 32,
                  '2057': 34,
                  '2058': 64,
                  '2059': 116,
                  '2060': 121,
                  '2061': 112,
                  '2062': 101,
                  '2063': 115,
                  '2064': 47,
                  '2065': 110,
                  '2066': 111,
                  '2067': 100,
                  '2068': 101,
                  '2069': 34,
                  '2070': 58,
                  '2071': 32,
                  '2072': 34,
                  '2073': 94,
                  '2074': 49,
                  '2075': 52,
                  '2076': 46,
                  '2077': 49,
                  '2078': 56,
                  '2079': 46,
                  '2080': 50,
                  '2081': 54,
                  '2082': 34,
                  '2083': 44,
                  '2084': 10,
                  '2085': 32,
                  '2086': 32,
                  '2087': 32,
                  '2088': 32,
                  '2089': 34,
                  '2090': 101,
                  '2091': 115,
                  '2092': 108,
                  '2093': 105,
                  '2094': 110,
                  '2095': 116,
                  '2096': 34,
                  '2097': 58,
                  '2098': 32,
                  '2099': 34,
                  '2100': 94,
                  '2101': 56,
                  '2102': 46,
                  '2103': 50,
                  '2104': 50,
                  '2105': 46,
                  '2106': 48,
                  '2107': 34,
                  '2108': 44,
                  '2109': 10,
                  '2110': 32,
                  '2111': 32,
                  '2112': 32,
                  '2113': 32,
                  '2114': 34,
                  '2115': 115,
                  '2116': 111,
                  '2117': 117,
                  '2118': 114,
                  '2119': 99,
                  '2120': 101,
                  '2121': 45,
                  '2122': 109,
                  '2123': 97,
                  '2124': 112,
                  '2125': 45,
                  '2126': 115,
                  '2127': 117,
                  '2128': 112,
                  '2129': 112,
                  '2130': 111,
                  '2131': 114,
                  '2132': 116,
                  '2133': 34,
                  '2134': 58,
                  '2135': 32,
                  '2136': 34,
                  '2137': 94,
                  '2138': 48,
                  '2139': 46,
                  '2140': 53,
                  '2141': 46,
                  '2142': 50,
                  '2143': 49,
                  '2144': 34,
                  '2145': 44,
                  '2146': 10,
                  '2147': 32,
                  '2148': 32,
                  '2149': 32,
                  '2150': 32,
                  '2151': 34,
                  '2152': 116,
                  '2153': 121,
                  '2154': 112,
                  '2155': 101,
                  '2156': 115,
                  '2157': 99,
                  '2158': 114,
                  '2159': 105,
                  '2160': 112,
                  '2161': 116,
                  '2162': 34,
                  '2163': 58,
                  '2164': 32,
                  '2165': 34,
                  '2166': 126,
                  '2167': 52,
                  '2168': 46,
                  '2169': 55,
                  '2170': 46,
                  '2171': 52,
                  '2172': 34,
                  '2173': 10,
                  '2174': 32,
                  '2175': 32,
                  '2176': 125,
                  '2177': 10,
                  '2178': 125,
                  '2179': 10
                },
                history: [
                  '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json'
                ],
                _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                _isVinyl: true,
                _symlink: null
              },
              '/home/aaqilniz/.yo-rc-global.json': {
                stat: null,
                _contents: null,
                history: [
                  '/home/aaqilniz/.yo-rc-global.json'
                ],
                _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                _isVinyl: true,
                _symlink: null
              },
              '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json': {
                stat: {
                  dev: 2055,
                  mode: 33279,
                  nlink: 1,
                  uid: 1000,
                  gid: 1000,
                  rdev: 0,
                  blksize: 4096,
                  ino: 2241690,
                  size: 82,
                  blocks: 1,
                  atimeMs: 1664468198390.669,
                  mtimeMs: 1664467890046.1177,
                  ctimeMs: 1664467890046.1177,
                  birthtimeMs: 0,
                  atime: new Date('2022-09-29T16:16:38.391Z'),
                  mtime: new Date('2022-09-29T16:11:30.046Z'),
                  ctime: new Date('2022-09-29T16:11:30.046Z'),
                  birthtime: new Date('1970-01-01T00:00:00.000Z')
                },
                _contents: {
                  '0': 123,
                  '1': 10,
                  '2': 32,
                  '3': 32,
                  '4': 34,
                  '5': 64,
                  '6': 108,
                  '7': 111,
                  '8': 111,
                  '9': 112,
                  '10': 98,
                  '11': 97,
                  '12': 99,
                  '13': 107,
                  '14': 47,
                  '15': 99,
                  '16': 108,
                  '17': 105,
                  '18': 34,
                  '19': 58,
                  '20': 32,
                  '21': 123,
                  '22': 10,
                  '23': 32,
                  '24': 32,
                  '25': 32,
                  '26': 32,
                  '27': 34,
                  '28': 112,
                  '29': 97,
                  '30': 99,
                  '31': 107,
                  '32': 97,
                  '33': 103,
                  '34': 101,
                  '35': 77,
                  '36': 97,
                  '37': 110,
                  '38': 97,
                  '39': 103,
                  '40': 101,
                  '41': 114,
                  '42': 34,
                  '43': 58,
                  '44': 32,
                  '45': 34,
                  '46': 121,
                  '47': 97,
                  '48': 114,
                  '49': 110,
                  '50': 34,
                  '51': 44,
                  '52': 10,
                  '53': 32,
                  '54': 32,
                  '55': 32,
                  '56': 32,
                  '57': 34,
                  '58': 118,
                  '59': 101,
                  '60': 114,
                  '61': 115,
                  '62': 105,
                  '63': 111,
                  '64': 110,
                  '65': 34,
                  '66': 58,
                  '67': 32,
                  '68': 34,
                  '69': 52,
                  '70': 46,
                  '71': 49,
                  '72': 46,
                  '73': 51,
                  '74': 34,
                  '75': 10,
                  '76': 32,
                  '77': 32,
                  '78': 125,
                  '79': 10,
                  '80': 125,
                  '81': 10
                },
                history: [
                  '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json'
                ],
                _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                _isVinyl: true,
                _symlink: null
              }
            },
            Symbol(kCapture): false
          }
        },
        indent: 2,
        lodashPath: false,
        disableCache: false,
        disableCacheByFile: false,
        sorted: false,
        _cachedStore: {
          '@loopback/cli': {
            packageManager: 'yarn',
            version: '4.1.3'
          }
        },
        existed: true
      },
      _packageJson: undefined,
      _sourceRoot: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/templates',
      fs: {
        store: {
          _events: {
            change: [
              (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    },
              (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    }
            ]
          },
          _eventsCount: 1,
          _maxListeners: 0,
          store: {
            '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json': {
              stat: null,
              _contents: null,
              history: [
                '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json'
              ],
              _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
              _isVinyl: true,
              _symlink: null
            },
            '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json': {
              stat: {
                dev: 2055,
                mode: 33279,
                nlink: 1,
                uid: 1000,
                gid: 1000,
                rdev: 0,
                blksize: 4096,
                ino: 2241697,
                size: 2180,
                blocks: 8,
                atimeMs: 1664473760957.5466,
                mtimeMs: 1664473760805.593,
                ctimeMs: 1664473760805.593,
                birthtimeMs: 0,
                atime: new Date('2022-09-29T17:49:20.958Z'),
                mtime: new Date('2022-09-29T17:49:20.806Z'),
                ctime: new Date('2022-09-29T17:49:20.806Z'),
                birthtime: new Date('1970-01-01T00:00:00.000Z')
              },
              _contents: {
                '0': 123,
                '1': 10,
                '2': 32,
                '3': 32,
                '4': 34,
                '5': 110,
                '6': 97,
                '7': 109,
                '8': 101,
                '9': 34,
                '10': 58,
                '11': 32,
                '12': 34,
                '13': 116,
                '14': 101,
                '15': 115,
                '16': 116,
                '17': 45,
                '18': 97,
                '19': 112,
                '20': 112,
                '21': 34,
                '22': 44,
                '23': 10,
                '24': 32,
                '25': 32,
                '26': 34,
                '27': 118,
                '28': 101,
                '29': 114,
                '30': 115,
                '31': 105,
                '32': 111,
                '33': 110,
                '34': 34,
                '35': 58,
                '36': 32,
                '37': 34,
                '38': 48,
                '39': 46,
                '40': 48,
                '41': 46,
                '42': 49,
                '43': 34,
                '44': 44,
                '45': 10,
                '46': 32,
                '47': 32,
                '48': 34,
                '49': 100,
                '50': 101,
                '51': 115,
                '52': 99,
                '53': 114,
                '54': 105,
                '55': 112,
                '56': 116,
                '57': 105,
                '58': 111,
                '59': 110,
                '60': 34,
                '61': 58,
                '62': 32,
                '63': 34,
                '64': 112,
                '65': 97,
                '66': 116,
                '67': 114,
                '68': 105,
                '69': 99,
                '70': 107,
                '71': 34,
                '72': 44,
                '73': 10,
                '74': 32,
                '75': 32,
                '76': 34,
                '77': 107,
                '78': 101,
                '79': 121,
                '80': 119,
                '81': 111,
                '82': 114,
                '83': 100,
                '84': 115,
                '85': 34,
                '86': 58,
                '87': 32,
                '88': 91,
                '89': 10,
                '90': 32,
                '91': 32,
                '92': 32,
                '93': 32,
                '94': 34,
                '95': 108,
                '96': 111,
                '97': 111,
                '98': 112,
                '99': 98,
                '100': 97,
                '101': 99,
                '102': 107,
                '103': 45,
                '104': 97,
                '105': 112,
                '106': 112,
                '107': 108,
                '108': 105,
                '109': 99,
                '110': 97,
                '111': 116,
                '112': 105,
                '113': 111,
                '114': 110,
                '115': 34,
                '116': 44,
                '117': 10,
                '118': 32,
                '119': 32,
                '120': 32,
                '121': 32,
                '122': 34,
                '123': 108,
                '124': 111,
                '125': 111,
                '126': 112,
                '127': 98,
                '128': 97,
                '129': 99,
                '130': 107,
                '131': 34,
                '132': 10,
                '133': 32,
                '134': 32,
                '135': 93,
                '136': 44,
                '137': 10,
                '138': 32,
                '139': 32,
                '140': 34,
                '141': 109,
                '142': 97,
                '143': 105,
                '144': 110,
                '145': 34,
                '146': 58,
                '147': 32,
                '148': 34,
                '149': 100,
                '150': 105,
                '151': 115,
                '152': 116,
                '153': 47,
                '154': 105,
                '155': 110,
                '156': 100,
                '157': 101,
                '158': 120,
                '159': 46,
                '160': 106,
                '161': 115,
                '162': 34,
                '163': 44,
                '164': 10,
                '165': 32,
                '166': 32,
                '167': 34,
                '168': 116,
                '169': 121,
                '170': 112,
                '171': 101,
                '172': 115,
                '173': 34,
                '174': 58,
                '175': 32,
                '176': 34,
                '177': 100,
                '178': 105,
                '179': 115,
                '180': 116,
                '181': 47,
                '182': 105,
                '183': 110,
                '184': 100,
                '185': 101,
                '186': 120,
                '187': 46,
                '188': 100,
                '189': 46,
                '190': 116,
                '191': 115,
                '192': 34,
                '193': 44,
                '194': 10,
                '195': 32,
                '196': 32,
                '197': 34,
                '198': 101,
                '199': 110,
                '200': 103,
                '201': 105,
                '202': 110,
                '203': 101,
                '204': 115,
                '205': 34,
                '206': 58,
                '207': 32,
                '208': 123,
                '209': 10,
                '210': 32,
                '211': 32,
                '212': 32,
                '213': 32,
                '214': 34,
                '215': 110,
                '216': 111,
                '217': 100,
                '218': 101,
                '219': 34,
                '220': 58,
                '221': 32,
                '222': 34,
                '223': 49,
                '224': 52,
                '225': 32,
                '226': 124,
                '227': 124,
                '228': 32,
                '229': 49,
                '230': 54,
                '231': 32,
                '232': 124,
                '233': 124,
                '234': 32,
                '235': 49,
                '236': 55,
                '237': 32,
                '238': 124,
                '239': 124,
                '240': 32,
                '241': 49,
                '242': 56,
                '243': 34,
                '244': 10,
                '245': 32,
                '246': 32,
                '247': 125,
                '248': 44,
                '249': 10,
                '250': 32,
                '251': 32,
                '252': 34,
                '253': 115,
                '254': 99,
                '255': 114,
                '256': 105,
                '257': 112,
                '258': 116,
                '259': 115,
                '260': 34,
                '261': 58,
                '262': 32,
                '263': 123,
                '264': 10,
                '265': 32,
                '266': 32,
                '267': 32,
                '268': 32,
                '269': 34,
                '270': 98,
                '271': 117,
                '272': 105,
                '273': 108,
                '274': 100,
                '275': 34,
                '276': 58,
                '277': 32,
                '278': 34,
                '279': 108,
                '280': 98,
                '281': 45,
                '282': 116,
                '283': 115,
                '284': 99,
                '285': 34,
                '286': 44,
                '287': 10,
                '288': 32,
                '289': 32,
                '290': 32,
                '291': 32,
                '292': 34,
                '293': 98,
                '294': 117,
                '295': 105,
                '296': 108,
                '297': 100,
                '298': 58,
                '299': 119,
                '300': 97,
                '301': 116,
                '302': 99,
                '303': 104,
                '304': 34,
                '305': 58,
                '306': 32,
                '307': 34,
                '308': 108,
                '309': 98,
                '310': 45,
                '311': 116,
                '312': 115,
                '313': 99,
                '314': 32,
                '315': 45,
                '316': 45,
                '317': 119,
                '318': 97,
                '319': 116,
                '320': 99,
                '321': 104,
                '322': 34,
                '323': 44,
                '324': 10,
                '325': 32,
                '326': 32,
                '327': 32,
                '328': 32,
                '329': 34,
                '330': 108,
                '331': 105,
                '332': 110,
                '333': 116,
                '334': 34,
                '335': 58,
                '336': 32,
                '337': 34,
                '338': 121,
                '339': 97,
                '340': 114,
                '341': 110,
                '342': 32,
                '343': 114,
                '344': 117,
                '345': 110,
                '346': 32,
                '347': 101,
                '348': 115,
                '349': 108,
                '350': 105,
                '351': 110,
                '352': 116,
                '353': 32,
                '354': 38,
                '355': 38,
                '356': 32,
                '357': 121,
                '358': 97,
                '359': 114,
                '360': 110,
                '361': 32,
                '362': 114,
                '363': 117,
                '364': 110,
                '365': 32,
                '366': 112,
                '367': 114,
                '368': 101,
                '369': 116,
                '370': 116,
                '371': 105,
                '372': 101,
                '373': 114,
                '374': 58,
                '375': 99,
                '376': 104,
                '377': 101,
                '378': 99,
                '379': 107,
                '380': 34,
                '381': 44,
                '382': 10,
                '383': 32,
                '384': 32,
                '385': 32,
                '386': 32,
                '387': 34,
                '388': 108,
                '389': 105,
                '390': 110,
                '391': 116,
                '392': 58,
                '393': 102,
                '394': 105,
                '395': 120,
                '396': 34,
                '397': 58,
                '398': 32,
                '399': 34,
                '400': 121,
                '401': 97,
                '402': 114,
                '403': 110,
                '404': 32,
                '405': 114,
                '406': 117,
                '407': 110,
                '408': 32,
                '409': 101,
                '410': 115,
                '411': 108,
                '412': 105,
                '413': 110,
                '414': 116,
                '415': 58,
                '416': 102,
                '417': 105,
                '418': 120,
                '419': 32,
                '420': 38,
                '421': 38,
                '422': 32,
                '423': 121,
                '424': 97,
                '425': 114,
                '426': 110,
                '427': 32,
                '428': 114,
                '429': 117,
                '430': 110,
                '431': 32,
                '432': 112,
                '433': 114,
                '434': 101,
                '435': 116,
                '436': 116,
                '437': 105,
                '438': 101,
                '439': 114,
                '440': 58,
                '441': 102,
                '442': 105,
                '443': 120,
                '444': 34,
                '445': 44,
                '446': 10,
                '447': 32,
                '448': 32,
                '449': 32,
                '450': 32,
                '451': 34,
                '452': 112,
                '453': 114,
                '454': 101,
                '455': 116,
                '456': 116,
                '457': 105,
                '458': 101,
                '459': 114,
                '460': 58,
                '461': 99,
                '462': 108,
                '463': 105,
                '464': 34,
                '465': 58,
                '466': 32,
                '467': 34,
                '468': 108,
                '469': 98,
                '470': 45,
                '471': 112,
                '472': 114,
                '473': 101,
                '474': 116,
                '475': 116,
                '476': 105,
                '477': 101,
                '478': 114,
                '479': 32,
                '480': 92,
                '481': 34,
                '482': 42,
                '483': 42,
                '484': 47,
                '485': 42,
                '486': 46,
                '487': 116,
                '488': 115,
                '489': 92,
                '490': 34,
                '491': 32,
                '492': 92,
                '493': 34,
                '494': 42,
                '495': 42,
                '496': 47,
                '497': 42,
                '498': 46,
                '499': 106,
                '500': 115,
                '501': 92,
                '502': 34,
                '503': 34,
                '504': 44,
                '505': 10,
                '506': 32,
                '507': 32,
                '508': 32,
                '509': 32,
                '510': 34,
                '511': 112,
                '512': 114,
                '513': 101,
                '514': 116,
                '515': 116,
                '516': 105,
                '517': 101,
                '518': 114,
                '519': 58,
                '520': 99,
                '521': 104,
                '522': 101,
                '523': 99,
                '524': 107,
                '525': 34,
                '526': 58,
                '527': 32,
                '528': 34,
                '529': 121,
                '530': 97,
                '531': 114,
                '532': 110,
                '533': 32,
                '534': 114,
                '535': 117,
                '536': 110,
                '537': 32,
                '538': 112,
                '539': 114,
                '540': 101,
                '541': 116,
                '542': 116,
                '543': 105,
                '544': 101,
                '545': 114,
                '546': 58,
                '547': 99,
                '548': 108,
                '549': 105,
                '550': 32,
                '551': 45,
                '552': 108,
                '553': 34,
                '554': 44,
                '555': 10,
                '556': 32,
                '557': 32,
                '558': 32,
                '559': 32,
                '560': 34,
                '561': 112,
                '562': 114,
                '563': 101,
                '564': 116,
                '565': 116,
                '566': 105,
                '567': 101,
                '568': 114,
                '569': 58,
                '570': 102,
                '571': 105,
                '572': 120,
                '573': 34,
                '574': 58,
                '575': 32,
                '576': 34,
                '577': 121,
                '578': 97,
                '579': 114,
                '580': 110,
                '581': 32,
                '582': 114,
                '583': 117,
                '584': 110,
                '585': 32,
                '586': 112,
                '587': 114,
                '588': 101,
                '589': 116,
                '590': 116,
                '591': 105,
                '592': 101,
                '593': 114,
                '594': 58,
                '595': 99,
                '596': 108,
                '597': 105,
                '598': 32,
                '599': 45,
                '600': 45,
                '601': 119,
                '602': 114,
                '603': 105,
                '604': 116,
                '605': 101,
                '606': 34,
                '607': 44,
                '608': 10,
                '609': 32,
                '610': 32,
                '611': 32,
                '612': 32,
                '613': 34,
                '614': 101,
                '615': 115,
                '616': 108,
                '617': 105,
                '618': 110,
                '619': 116,
                '620': 34,
                '621': 58,
                '622': 32,
                '623': 34,
                '624': 108,
                '625': 98,
                '626': 45,
                '627': 101,
                '628': 115,
                '629': 108,
                '630': 105,
                '631': 110,
                '632': 116,
                '633': 32,
                '634': 45,
                '635': 45,
                '636': 114,
                '637': 101,
                '638': 112,
                '639': 111,
                '640': 114,
                '641': 116,
                '642': 45,
                '643': 117,
                '644': 110,
                '645': 117,
                '646': 115,
                '647': 101,
                '648': 100,
                '649': 45,
                '650': 100,
                '651': 105,
                '652': 115,
                '653': 97,
                '654': 98,
                '655': 108,
                '656': 101,
                '657': 45,
                '658': 100,
                '659': 105,
                '660': 114,
                '661': 101,
                '662': 99,
                '663': 116,
                '664': 105,
                '665': 118,
                '666': 101,
                '667': 115,
                '668': 32,
                '669': 46,
                '670': 34,
                '671': 44,
                '672': 10,
                '673': 32,
                '674': 32,
                '675': 32,
                '676': 32,
                '677': 34,
                '678': 101,
                '679': 115,
                '680': 108,
                '681': 105,
                '682': 110,
                '683': 116,
                '684': 58,
                '685': 102,
                '686': 105,
                '687': 120,
                '688': 34,
                '689': 58,
                '690': 32,
                '691': 34,
                '692': 121,
                '693': 97,
                '694': 114,
                '695': 110,
                '696': 32,
                '697': 114,
                '698': 117,
                '699': 110,
                '700': 32,
                '701': 101,
                '702': 115,
                '703': 108,
                '704': 105,
                '705': 110,
                '706': 116,
                '707': 32,
                '708': 45,
                '709': 45,
                '710': 102,
                '711': 105,
                '712': 120,
                '713': 34,
                '714': 44,
                '715': 10,
                '716': 32,
                '717': 32,
                '718': 32,
                '719': 32,
                '720': 34,
                '721': 112,
                '722': 114,
                '723': 101,
                '724': 116,
                '725': 101,
                '726': 115,
                '727': 116,
                '728': 34,
                '729': 58,
                '730': 32,
                '731': 34,
                '732': 121,
                '733': 97,
                '734': 114,
                '735': 110,
                '736': 32,
                '737': 114,
                '738': 117,
                '739': 110,
                '740': 32,
                '741': 114,
                '742': 101,
                '743': 98,
                '744': 117,
                '745': 105,
                '746': 108,
                '747': 100,
                '748': 34,
                '749': 44,
                '750': 10,
                '751': 32,
                '752': 32,
                '753': 32,
                '754': 32,
                '755': 34,
                '756': 116,
                '757': 101,
                '758': 115,
                '759': 116,
                '760': 34,
                '761': 58,
                '762': 32,
                '763': 34,
                '764': 108,
                '765': 98,
                '766': 45,
                '767': 109,
                '768': 111,
                '769': 99,
                '770': 104,
                '771': 97,
                '772': 32,
                '773': 45,
                '774': 45,
                '775': 97,
                '776': 108,
                '777': 108,
                '778': 111,
                '779': 119,
                '780': 45,
                '781': 99,
                '782': 111,
                '783': 110,
                '784': 115,
                '785': 111,
                '786': 108,
                '787': 101,
                '788': 45,
                '789': 108,
                '790': 111,
                '791': 103,
                '792': 115,
                '793': 32,
                '794': 92,
                '795': 34,
                '796': 100,
                '797': 105,
                '798': 115,
                '799': 116,
                '800': 47,
                '801': 95,
                '802': 95,
                '803': 116,
                '804': 101,
                '805': 115,
                '806': 116,
                '807': 115,
                '808': 95,
                '809': 95,
                '810': 92,
                '811': 34,
                '812': 34,
                '813': 44,
                '814': 10,
                '815': 32,
                '816': 32,
                '817': 32,
                '818': 32,
                '819': 34,
                '820': 112,
                '821': 111,
                '822': 115,
                '823': 116,
                '824': 116,
                '825': 101,
                '826': 115,
                '827': 116,
                '828': 34,
                '829': 58,
                '830': 32,
                '831': 34,
                '832': 121,
                '833': 97,
                '834': 114,
                '835': 110,
                '836': 32,
                '837': 114,
                '838': 117,
                '839': 110,
                '840': 32,
                '841': 108,
                '842': 105,
                '843': 110,
                '844': 116,
                '845': 34,
                '846': 44,
                '847': 10,
                '848': 32,
                '849': 32,
                '850': 32,
                '851': 32,
                '852': 34,
                '853': 116,
                '854': 101,
                '855': 115,
                '856': 116,
                '857': 58,
                '858': 100,
                '859': 101,
                '860': 118,
                '861': 34,
                '862': 58,
                '863': 32,
                '864': 34,
                '865': 108,
                '866': 98,
                '867': 45,
                '868': 109,
                '869': 111,
                '870': 99,
                '871': 104,
                '872': 97,
                '873': 32,
                '874': 45,
                '875': 45,
                '876': 97,
                '877': 108,
                '878': 108,
                '879': 111,
                '880': 119,
                '881': 45,
                '882': 99,
                '883': 111,
                '884': 110,
                '885': 115,
                '886': 111,
                '887': 108,
                '888': 101,
                '889': 45,
                '890': 108,
                '891': 111,
                '892': 103,
                '893': 115,
                '894': 32,
                '895': 100,
                '896': 105,
                '897': 115,
                '898': 116,
                '899': 47,
                '900': 95,
                '901': 95,
                '902': 116,
                '903': 101,
                '904': 115,
                '905': 116,
                '906': 115,
                '907': 95,
                '908': 95,
                '909': 47,
                '910': 42,
                '911': 42,
                '912': 47,
                '913': 42,
                '914': 46,
                '915': 106,
                '916': 115,
                '917': 32,
                '918': 38,
                '919': 38,
                '920': 32,
                '921': 121,
                '922': 97,
                '923': 114,
                '924': 110,
                '925': 32,
                '926': 114,
                '927': 117,
                '928': 110,
                '929': 32,
                '930': 112,
                '931': 111,
                '932': 115,
                '933': 116,
                '934': 116,
                '935': 101,
                '936': 115,
                '937': 116,
                '938': 34,
                '939': 44,
                '940': 10,
                '941': 32,
                '942': 32,
                '943': 32,
                '944': 32,
                '945': 34,
                '946': 100,
                '947': 111,
                '948': 99,
                '949': 107,
                '950': 101,
                '951': 114,
                '952': 58,
                '953': 98,
                '954': 117,
                '955': 105,
                '956': 108,
                '957': 100,
                '958': 34,
                '959': 58,
                '960': 32,
                '961': 34,
                '962': 100,
                '963': 111,
                '964': 99,
                '965': 107,
                '966': 101,
                '967': 114,
                '968': 32,
                '969': 98,
                '970': 117,
                '971': 105,
                '972': 108,
                '973': 100,
                '974': 32,
                '975': 45,
                '976': 116,
                '977': 32,
                '978': 116,
                '979': 101,
                '980': 115,
                '981': 116,
                '982': 45,
                '983': 97,
                '984': 112,
                '985': 112,
                '986': 32,
                '987': 46,
                '988': 34,
                '989': 44,
                '990': 10,
                '991': 32,
                '992': 32,
                '993': 32,
                '994': 32,
                '995': 34,
                '996': 100,
                '997': 111,
                '998': 99,
                '999': 107,
                '1000': 101,
                '1001': 114,
                '1002': 58,
                '1003': 114,
                '1004': 117,
                '1005': 110,
                '1006': 34,
                '1007': 58,
                '1008': 32,
                '1009': 34,
                '1010': 100,
                '1011': 111,
                '1012': 99,
                '1013': 107,
                '1014': 101,
                '1015': 114,
                '1016': 32,
                '1017': 114,
                '1018': 117,
                '1019': 110,
                '1020': 32,
                '1021': 45,
                '1022': 112,
                '1023': 32,
                '1024': 51,
                '1025': 48,
                '1026': 48,
                '1027': 48,
                '1028': 58,
                '1029': 51,
                '1030': 48,
                '1031': 48,
                '1032': 48,
                '1033': 32,
                '1034': 45,
                '1035': 100,
                '1036': 32,
                '1037': 116,
                '1038': 101,
                '1039': 115,
                '1040': 116,
                '1041': 45,
                '1042': 97,
                '1043': 112,
                '1044': 112,
                '1045': 34,
                '1046': 44,
                '1047': 10,
                '1048': 32,
                '1049': 32,
                '1050': 32,
                '1051': 32,
                '1052': 34,
                '1053': 112,
                '1054': 114,
                '1055': 101,
                '1056': 109,
                '1057': 105,
                '1058': 103,
                '1059': 114,
                '1060': 97,
                '1061': 116,
                '1062': 101,
                '1063': 34,
                '1064': 58,
                '1065': 32,
                '1066': 34,
                '1067': 121,
                '1068': 97,
                '1069': 114,
                '1070': 110,
                '1071': 32,
                '1072': 114,
                '1073': 117,
                '1074': 110,
                '1075': 32,
                '1076': 98,
                '1077': 117,
                '1078': 105,
                '1079': 108,
                '1080': 100,
                '1081': 34,
                '1082': 44,
                '1083': 10,
                '1084': 32,
                '1085': 32,
                '1086': 32,
                '1087': 32,
                '1088': 34,
                '1089': 109,
                '1090': 105,
                '1091': 103,
                '1092': 114,
                '1093': 97,
                '1094': 116,
                '1095': 101,
                '1096': 34,
                '1097': 58,
                '1098': 32,
                '1099': 34,
                '1100': 110,
                '1101': 111,
                '1102': 100,
                '1103': 101,
                '1104': 32,
                '1105': 46,
                '1106': 47,
                '1107': 100,
                '1108': 105,
                '1109': 115,
                '1110': 116,
                '1111': 47,
                '1112': 109,
                '1113': 105,
                '1114': 103,
                '1115': 114,
                '1116': 97,
                '1117': 116,
                '1118': 101,
                '1119': 34,
                '1120': 44,
                '1121': 10,
                '1122': 32,
                '1123': 32,
                '1124': 32,
                '1125': 32,
                '1126': 34,
                '1127': 112,
                '1128': 114,
                '1129': 101,
                '1130': 111,
                '1131': 112,
                '1132': 101,
                '1133': 110,
                '1134': 97,
                '1135': 112,
                '1136': 105,
                '1137': 45,
                '1138': 115,
                '1139': 112,
                '1140': 101,
                '1141': 99,
                '1142': 34,
                '1143': 58,
                '1144': 32,
                '1145': 34,
                '1146': 121,
                '1147': 97,
                '1148': 114,
                '1149': 110,
                '1150': 32,
                '1151': 114,
                '1152': 117,
                '1153': 110,
                '1154': 32,
                '1155': 98,
                '1156': 117,
                '1157': 105,
                '1158': 108,
                '1159': 100,
                '1160': 34,
                '1161': 44,
                '1162': 10,
                '1163': 32,
                '1164': 32,
                '1165': 32,
                '1166': 32,
                '1167': 34,
                '1168': 111,
                '1169': 112,
                '1170': 101,
                '1171': 110,
                '1172': 97,
                '1173': 112,
                '1174': 105,
                '1175': 45,
                '1176': 115,
                '1177': 112,
                '1178': 101,
                '1179': 99,
                '1180': 34,
                '1181': 58,
                '1182': 32,
                '1183': 34,
                '1184': 110,
                '1185': 111,
                '1186': 100,
                '1187': 101,
                '1188': 32,
                '1189': 46,
                '1190': 47,
                '1191': 100,
                '1192': 105,
                '1193': 115,
                '1194': 116,
                '1195': 47,
                '1196': 111,
                '1197': 112,
                '1198': 101,
                '1199': 110,
                '1200': 97,
                '1201': 112,
                '1202': 105,
                '1203': 45,
                '1204': 115,
                '1205': 112,
                '1206': 101,
                '1207': 99,
                '1208': 34,
                '1209': 44,
                '1210': 10,
                '1211': 32,
                '1212': 32,
                '1213': 32,
                '1214': 32,
                '1215': 34,
                '1216': 112,
                '1217': 114,
                '1218': 101,
                '1219': 115,
                '1220': 116,
                '1221': 97,
                '1222': 114,
                '1223': 116,
                '1224': 34,
                '1225': 58,
                '1226': 32,
                '1227': 34,
                '1228': 121,
                '1229': 97,
                '1230': 114,
                '1231': 110,
                '1232': 32,
                '1233': 114,
                '1234': 117,
                '1235': 110,
                '1236': 32,
                '1237': 114,
                '1238': 101,
                '1239': 98,
                '1240': 117,
                '1241': 105,
                '1242': 108,
                '1243': 100,
                '1244': 34,
                '1245': 44,
                '1246': 10,
                '1247': 32,
                '1248': 32,
                '1249': 32,
                '1250': 32,
                '1251': 34,
                '1252': 115,
                '1253': 116,
                '1254': 97,
                '1255': 114,
                '1256': 116,
                '1257': 34,
                '1258': 58,
                '1259': 32,
                '1260': 34,
                '1261': 110,
                '1262': 111,
                '1263': 100,
                '1264': 101,
                '1265': 32,
                '1266': 45,
                '1267': 114,
                '1268': 32,
                '1269': 115,
                '1270': 111,
                '1271': 117,
                '1272': 114,
                '1273': 99,
                '1274': 101,
                '1275': 45,
                '1276': 109,
                '1277': 97,
                '1278': 112,
                '1279': 45,
                '1280': 115,
                '1281': 117,
                '1282': 112,
                '1283': 112,
                '1284': 111,
                '1285': 114,
                '1286': 116,
                '1287': 47,
                '1288': 114,
                '1289': 101,
                '1290': 103,
                '1291': 105,
                '1292': 115,
                '1293': 116,
                '1294': 101,
                '1295': 114,
                '1296': 32,
                '1297': 46,
                '1298': 34,
                '1299': 44,
                '1300': 10,
                '1301': 32,
                '1302': 32,
                '1303': 32,
                '1304': 32,
                '1305': 34,
                '1306': 99,
                '1307': 108,
                '1308': 101,
                '1309': 97,
                '1310': 110,
                '1311': 34,
                '1312': 58,
                '1313': 32,
                '1314': 34,
                '1315': 108,
                '1316': 98,
                '1317': 45,
                '1318': 99,
                '1319': 108,
                '1320': 101,
                '1321': 97,
                '1322': 110,
                '1323': 32,
                '1324': 100,
                '1325': 105,
                '1326': 115,
                '1327': 116,
                '1328': 32,
                '1329': 42,
                '1330': 46,
                '1331': 116,
                '1332': 115,
                '1333': 98,
                '1334': 117,
                '1335': 105,
                '1336': 108,
                '1337': 100,
                '1338': 105,
                '1339': 110,
                '1340': 102,
                '1341': 111,
                '1342': 32,
                '1343': 46,
                '1344': 101,
                '1345': 115,
                '1346': 108,
                '1347': 105,
                '1348': 110,
                '1349': 116,
                '1350': 99,
                '1351': 97,
                '1352': 99,
                '1353': 104,
                '1354': 101,
                '1355': 34,
                '1356': 44,
                '1357': 10,
                '1358': 32,
                '1359': 32,
                '1360': 32,
                '1361': 32,
                '1362': 34,
                '1363': 114,
                '1364': 101,
                '1365': 98,
                '1366': 117,
                '1367': 105,
                '1368': 108,
                '1369': 100,
                '1370': 34,
                '1371': 58,
                '1372': 32,
                '1373': 34,
                '1374': 121,
                '1375': 97,
                '1376': 114,
                '1377': 110,
                '1378': 32,
                '1379': 114,
                '1380': 117,
                '1381': 110,
                '1382': 32,
                '1383': 99,
                '1384': 108,
                '1385': 101,
                '1386': 97,
                '1387': 110,
                '1388': 32,
                '1389': 38,
                '1390': 38,
                '1391': 32,
                '1392': 121,
                '1393': 97,
                '1394': 114,
                '1395': 110,
                '1396': 32,
                '1397': 114,
                '1398': 117,
                '1399': 110,
                '1400': 32,
                '1401': 98,
                '1402': 117,
                '1403': 105,
                '1404': 108,
                '1405': 100,
                '1406': 34,
                '1407': 10,
                '1408': 32,
                '1409': 32,
                '1410': 125,
                '1411': 44,
                '1412': 10,
                '1413': 32,
                '1414': 32,
                '1415': 34,
                '1416': 114,
                '1417': 101,
                '1418': 112,
                '1419': 111,
                '1420': 115,
                '1421': 105,
                '1422': 116,
                '1423': 111,
                '1424': 114,
                '1425': 121,
                '1426': 34,
                '1427': 58,
                '1428': 32,
                '1429': 123,
                '1430': 10,
                '1431': 32,
                '1432': 32,
                '1433': 32,
                '1434': 32,
                '1435': 34,
                '1436': 116,
                '1437': 121,
                '1438': 112,
                '1439': 101,
                '1440': 34,
                '1441': 58,
                '1442': 32,
                '1443': 34,
                '1444': 103,
                '1445': 105,
                '1446': 116,
                '1447': 34,
                '1448': 44,
                '1449': 10,
                '1450': 32,
                '1451': 32,
                '1452': 32,
                '1453': 32,
                '1454': 34,
                '1455': 117,
                '1456': 114,
                '1457': 108,
                '1458': 34,
                '1459': 58,
                '1460': 32,
                '1461': 34,
                '1462': 34,
                '1463': 10,
                '1464': 32,
                '1465': 32,
                '1466': 125,
                '1467': 44,
                '1468': 10,
                '1469': 32,
                '1470': 32,
                '1471': 34,
                '1472': 97,
                '1473': 117,
                '1474': 116,
                '1475': 104,
                '1476': 111,
                '1477': 114,
                '1478': 34,
                '1479': 58,
                '1480': 32,
                '1481': 34,
                '1482': 77,
                '1483': 117,
                '1484': 104,
                '1485': 97,
                '1486': 109,
                '1487': 109,
                '1488': 97,
                '1489': 100,
                '1490': 32,
                '1491': 65,
                '1492': 97,
                '1493': 113,
                '1494': 105,
                '1495': 108,
                '1496': 32,
                '1497': 60,
                '1498': 97,
                '1499': 97,
                '1500': 113,
                '1501': 105,
                '1502': 108,
                '1503': 110,
                '1504': 105,
                '1505': 122,
                '1506': 64,
                '1507': 121,
                '1508': 97,
                '1509': 104,
                '1510': 111,
                '1511': 111,
                '1512': 46,
                '1513': 99,
                '1514': 111,
                '1515': 109,
                '1516': 62,
                '1517': 34,
                '1518': 44,
                '1519': 10,
                '1520': 32,
                '1521': 32,
                '1522': 34,
                '1523': 108,
                '1524': 105,
                '1525': 99,
                '1526': 101,
                '1527': 110,
                '1528': 115,
                '1529': 101,
                '1530': 34,
                '1531': 58,
                '1532': 32,
                '1533': 34,
                '1534': 34,
                '1535': 44,
                '1536': 10,
                '1537': 32,
                '1538': 32,
                '1539': 34,
                '1540': 102,
                '1541': 105,
                '1542': 108,
                '1543': 101,
                '1544': 115,
                '1545': 34,
                '1546': 58,
                '1547': 32,
                '1548': 91,
                '1549': 10,
                '1550': 32,
                '1551': 32,
                '1552': 32,
                '1553': 32,
                '1554': 34,
                '1555': 82,
                '1556': 69,
                '1557': 65,
                '1558': 68,
                '1559': 77,
                '1560': 69,
                '1561': 46,
                '1562': 109,
                '1563': 100,
                '1564': 34,
                '1565': 44,
                '1566': 10,
                '1567': 32,
                '1568': 32,
                '1569': 32,
                '1570': 32,
                '1571': 34,
                '1572': 100,
                '1573': 105,
                '1574': 115,
                '1575': 116,
                '1576': 34,
                '1577': 44,
                '1578': 10,
                '1579': 32,
                '1580': 32,
                '1581': 32,
                '1582': 32,
                '1583': 34,
                '1584': 115,
                '1585': 114,
                '1586': 99,
                '1587': 34,
                '1588': 44,
                '1589': 10,
                '1590': 32,
                '1591': 32,
                '1592': 32,
                '1593': 32,
                '1594': 34,
                '1595': 33,
                '1596': 42,
                '1597': 47,
                '1598': 95,
                '1599': 95,
                '1600': 116,
                '1601': 101,
                '1602': 115,
                '1603': 116,
                '1604': 115,
                '1605': 95,
                '1606': 95,
                '1607': 34,
                '1608': 10,
                '1609': 32,
                '1610': 32,
                '1611': 93,
                '1612': 44,
                '1613': 10,
                '1614': 32,
                '1615': 32,
                '1616': 34,
                '1617': 100,
                '1618': 101,
                '1619': 112,
                '1620': 101,
                '1621': 110,
                '1622': 100,
                '1623': 101,
                '1624': 110,
                '1625': 99,
                '1626': 105,
                '1627': 101,
                '1628': 115,
                '1629': 34,
                '1630': 58,
                '1631': 32,
                '1632': 123,
                '1633': 10,
                '1634': 32,
                '1635': 32,
                '1636': 32,
                '1637': 32,
                '1638': 34,
                '1639': 64,
                '1640': 108,
                '1641': 111,
                '1642': 111,
                '1643': 112,
                '1644': 98,
                '1645': 97,
                '1646': 99,
                '1647': 107,
                '1648': 47,
                '1649': 98,
                '1650': 111,
                '1651': 111,
                '1652': 116,
                '1653': 34,
                '1654': 58,
                '1655': 32,
                '1656': 34,
                '1657': 94,
                '1658': 53,
                '1659': 46,
                '1660': 48,
                '1661': 46,
                '1662': 51,
                '1663': 34,
                '1664': 44,
                '1665': 10,
                '1666': 32,
                '1667': 32,
                '1668': 32,
                '1669': 32,
                '1670': 34,
                '1671': 64,
                '1672': 108,
                '1673': 111,
                '1674': 111,
                '1675': 112,
                '1676': 98,
                '1677': 97,
                '1678': 99,
                '1679': 107,
                '1680': 47,
                '1681': 99,
                '1682': 111,
                '1683': 114,
                '1684': 101,
                '1685': 34,
                '1686': 58,
                '1687': 32,
                '1688': 34,
                '1689': 94,
                '1690': 52,
                '1691': 46,
                '1692': 48,
                '1693': 46,
                '1694': 51,
                '1695': 34,
                '1696': 44,
                '1697': 10,
                '1698': 32,
                '1699': 32,
                '1700': 32,
                '1701': 32,
                '1702': 34,
                '1703': 64,
                '1704': 108,
                '1705': 111,
                '1706': 111,
                '1707': 112,
                '1708': 98,
                '1709': 97,
                '1710': 99,
                '1711': 107,
                '1712': 47,
                '1713': 114,
                '1714': 101,
                '1715': 112,
                '1716': 111,
                '1717': 115,
                '1718': 105,
                '1719': 116,
                '1720': 111,
                '1721': 114,
                '1722': 121,
                '1723': 34,
                '1724': 58,
                '1725': 32,
                '1726': 34,
                '1727': 94,
                '1728': 53,
                '1729': 46,
                '1730': 48,
                '1731': 46,
                '1732': 51,
                '1733': 34,
                '1734': 44,
                '1735': 10,
                '1736': 32,
                '1737': 32,
                '1738': 32,
                '1739': 32,
                '1740': 34,
                '1741': 64,
                '1742': 108,
                '1743': 111,
                '1744': 111,
                '1745': 112,
                '1746': 98,
                '1747': 97,
                '1748': 99,
                '1749': 107,
                '1750': 47,
                '1751': 114,
                '1752': 101,
                '1753': 115,
                '1754': 116,
                '1755': 34,
                '1756': 58,
                '1757': 32,
                '1758': 34,
                '1759': 94,
                '1760': 49,
                '1761': 50,
                '1762': 46,
                '1763': 48,
                '1764': 46,
                '1765': 51,
                '1766': 34,
                '1767': 44,
                '1768': 10,
                '1769': 32,
                '1770': 32,
                '1771': 32,
                '1772': 32,
                '1773': 34,
                '1774': 64,
                '1775': 108,
                '1776': 111,
                '1777': 111,
                '1778': 112,
                '1779': 98,
                '1780': 97,
                '1781': 99,
                '1782': 107,
                '1783': 47,
                '1784': 114,
                '1785': 101,
                '1786': 115,
                '1787': 116,
                '1788': 45,
                '1789': 101,
                '1790': 120,
                '1791': 112,
                '1792': 108,
                '1793': 111,
                '1794': 114,
                '1795': 101,
                '1796': 114,
                '1797': 34,
                '1798': 58,
                '1799': 32,
                '1800': 34,
                '1801': 94,
                '1802': 53,
                '1803': 46,
                '1804': 48,
                '1805': 46,
                '1806': 51,
                '1807': 34,
                '1808': 44,
                '1809': 10,
                '1810': 32,
                '1811': 32,
                '1812': 32,
                '1813': 32,
                '1814': 34,
                '1815': 64,
                '1816': 108,
                '1817': 111,
                '1818': 111,
                '1819': 112,
                '1820': 98,
                '1821': 97,
                '1822': 99,
                '1823': 107,
                '1824': 47,
                '1825': 115,
                '1826': 101,
                '1827': 114,
                '1828': 118,
                '1829': 105,
                '1830': 99,
                '1831': 101,
                '1832': 45,
                '1833': 112,
                '1834': 114,
                '1835': 111,
                '1836': 120,
                '1837': 121,
                '1838': 34,
                '1839': 58,
                '1840': 32,
                '1841': 34,
                '1842': 94,
                '1843': 53,
                '1844': 46,
                '1845': 48,
                '1846': 46,
                '1847': 51,
                '1848': 34,
                '1849': 44,
                '1850': 10,
                '1851': 32,
                '1852': 32,
                '1853': 32,
                '1854': 32,
                '1855': 34,
                '1856': 108,
                '1857': 111,
                '1858': 111,
                '1859': 112,
                '1860': 98,
                '1861': 97,
                '1862': 99,
                '1863': 107,
                '1864': 45,
                '1865': 99,
                '1866': 111,
                '1867': 110,
                '1868': 110,
                '1869': 101,
                '1870': 99,
                '1871': 116,
                '1872': 111,
                '1873': 114,
                '1874': 45,
                '1875': 109,
                '1876': 121,
                '1877': 115,
                '1878': 113,
                '1879': 108,
                '1880': 34,
                '1881': 58,
                '1882': 32,
                '1883': 34,
                '1884': 94,
                '1885': 53,
                '1886': 46,
                '1887': 51,
                '1888': 46,
                '1889': 48,
                '1890': 34,
                '1891': 44,
                '1892': 10,
                '1893': 32,
                '1894': 32,
                '1895': 32,
                '1896': 32,
                '1897': 34,
                '1898': 116,
                '1899': 115,
                '1900': 108,
                '1901': 105,
                '1902': 98,
                '1903': 34,
                '1904': 58,
                '1905': 32,
                '1906': 34,
                '1907': 94,
                '1908': 50,
                '1909': 46,
                '1910': 48,
                '1911': 46,
                '1912': 48,
                '1913': 34,
                '1914': 10,
                '1915': 32,
                '1916': 32,
                '1917': 125,
                '1918': 44,
                '1919': 10,
                '1920': 32,
                '1921': 32,
                '1922': 34,
                '1923': 100,
                '1924': 101,
                '1925': 118,
                '1926': 68,
                '1927': 101,
                '1928': 112,
                '1929': 101,
                '1930': 110,
                '1931': 100,
                '1932': 101,
                '1933': 110,
                '1934': 99,
                '1935': 105,
                '1936': 101,
                '1937': 115,
                '1938': 34,
                '1939': 58,
                '1940': 32,
                '1941': 123,
                '1942': 10,
                '1943': 32,
                '1944': 32,
                '1945': 32,
                '1946': 32,
                '1947': 34,
                '1948': 64,
                '1949': 108,
                '1950': 111,
                '1951': 111,
                '1952': 112,
                '1953': 98,
                '1954': 97,
                '1955': 99,
                '1956': 107,
                '1957': 47,
                '1958': 98,
                '1959': 117,
                '1960': 105,
                '1961': 108,
                '1962': 100,
                '1963': 34,
                '1964': 58,
                '1965': 32,
                '1966': 34,
                '1967': 94,
                '1968': 57,
                '1969': 46,
                '1970': 48,
                '1971': 46,
                '1972': 51,
                '1973': 34,
                '1974': 44,
                '1975': 10,
                '1976': 32,
                '1977': 32,
                '1978': 32,
                '1979': 32,
                '1980': 34,
                '1981': 64,
                '1982': 108,
                '1983': 111,
                '1984': 111,
                '1985': 112,
                '1986': 98,
                '1987': 97,
                '1988': 99,
                '1989': 107,
                '1990': 47,
                '1991': 101,
                '1992': 115,
                '1993': 108,
                '1994': 105,
                '1995': 110,
                '1996': 116,
                '1997': 45,
                '1998': 99,
                '1999': 111,
                '2000': 110,
                '2001': 102,
                '2002': 105,
                '2003': 103,
                '2004': 34,
                '2005': 58,
                '2006': 32,
                '2007': 34,
                '2008': 94,
                '2009': 49,
                '2010': 51,
                '2011': 46,
                '2012': 48,
                '2013': 46,
                '2014': 51,
                '2015': 34,
                '2016': 44,
                '2017': 10,
                '2018': 32,
                '2019': 32,
                '2020': 32,
                '2021': 32,
                '2022': 34,
                '2023': 64,
                '2024': 108,
                '2025': 111,
                '2026': 111,
                '2027': 112,
                '2028': 98,
                '2029': 97,
                '2030': 99,
                '2031': 107,
                '2032': 47,
                '2033': 116,
                '2034': 101,
                '2035': 115,
                '2036': 116,
                '2037': 108,
                '2038': 97,
                '2039': 98,
                '2040': 34,
                '2041': 58,
                '2042': 32,
                '2043': 34,
                '2044': 94,
                '2045': 53,
                '2046': 46,
                '2047': 48,
                '2048': 46,
                '2049': 51,
                '2050': 34,
                '2051': 44,
                '2052': 10,
                '2053': 32,
                '2054': 32,
                '2055': 32,
                '2056': 32,
                '2057': 34,
                '2058': 64,
                '2059': 116,
                '2060': 121,
                '2061': 112,
                '2062': 101,
                '2063': 115,
                '2064': 47,
                '2065': 110,
                '2066': 111,
                '2067': 100,
                '2068': 101,
                '2069': 34,
                '2070': 58,
                '2071': 32,
                '2072': 34,
                '2073': 94,
                '2074': 49,
                '2075': 52,
                '2076': 46,
                '2077': 49,
                '2078': 56,
                '2079': 46,
                '2080': 50,
                '2081': 54,
                '2082': 34,
                '2083': 44,
                '2084': 10,
                '2085': 32,
                '2086': 32,
                '2087': 32,
                '2088': 32,
                '2089': 34,
                '2090': 101,
                '2091': 115,
                '2092': 108,
                '2093': 105,
                '2094': 110,
                '2095': 116,
                '2096': 34,
                '2097': 58,
                '2098': 32,
                '2099': 34,
                '2100': 94,
                '2101': 56,
                '2102': 46,
                '2103': 50,
                '2104': 50,
                '2105': 46,
                '2106': 48,
                '2107': 34,
                '2108': 44,
                '2109': 10,
                '2110': 32,
                '2111': 32,
                '2112': 32,
                '2113': 32,
                '2114': 34,
                '2115': 115,
                '2116': 111,
                '2117': 117,
                '2118': 114,
                '2119': 99,
                '2120': 101,
                '2121': 45,
                '2122': 109,
                '2123': 97,
                '2124': 112,
                '2125': 45,
                '2126': 115,
                '2127': 117,
                '2128': 112,
                '2129': 112,
                '2130': 111,
                '2131': 114,
                '2132': 116,
                '2133': 34,
                '2134': 58,
                '2135': 32,
                '2136': 34,
                '2137': 94,
                '2138': 48,
                '2139': 46,
                '2140': 53,
                '2141': 46,
                '2142': 50,
                '2143': 49,
                '2144': 34,
                '2145': 44,
                '2146': 10,
                '2147': 32,
                '2148': 32,
                '2149': 32,
                '2150': 32,
                '2151': 34,
                '2152': 116,
                '2153': 121,
                '2154': 112,
                '2155': 101,
                '2156': 115,
                '2157': 99,
                '2158': 114,
                '2159': 105,
                '2160': 112,
                '2161': 116,
                '2162': 34,
                '2163': 58,
                '2164': 32,
                '2165': 34,
                '2166': 126,
                '2167': 52,
                '2168': 46,
                '2169': 55,
                '2170': 46,
                '2171': 52,
                '2172': 34,
                '2173': 10,
                '2174': 32,
                '2175': 32,
                '2176': 125,
                '2177': 10,
                '2178': 125,
                '2179': 10
              },
              history: [
                '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json'
              ],
              _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
              _isVinyl: true,
              _symlink: null
            },
            '/home/aaqilniz/.yo-rc-global.json': {
              stat: null,
              _contents: null,
              history: [
                '/home/aaqilniz/.yo-rc-global.json'
              ],
              _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
              _isVinyl: true,
              _symlink: null
            },
            '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json': {
              stat: {
                dev: 2055,
                mode: 33279,
                nlink: 1,
                uid: 1000,
                gid: 1000,
                rdev: 0,
                blksize: 4096,
                ino: 2241690,
                size: 82,
                blocks: 1,
                atimeMs: 1664468198390.669,
                mtimeMs: 1664467890046.1177,
                ctimeMs: 1664467890046.1177,
                birthtimeMs: 0,
                atime: new Date('2022-09-29T16:16:38.391Z'),
                mtime: new Date('2022-09-29T16:11:30.046Z'),
                ctime: new Date('2022-09-29T16:11:30.046Z'),
                birthtime: new Date('1970-01-01T00:00:00.000Z')
              },
              _contents: {
                '0': 123,
                '1': 10,
                '2': 32,
                '3': 32,
                '4': 34,
                '5': 64,
                '6': 108,
                '7': 111,
                '8': 111,
                '9': 112,
                '10': 98,
                '11': 97,
                '12': 99,
                '13': 107,
                '14': 47,
                '15': 99,
                '16': 108,
                '17': 105,
                '18': 34,
                '19': 58,
                '20': 32,
                '21': 123,
                '22': 10,
                '23': 32,
                '24': 32,
                '25': 32,
                '26': 32,
                '27': 34,
                '28': 112,
                '29': 97,
                '30': 99,
                '31': 107,
                '32': 97,
                '33': 103,
                '34': 101,
                '35': 77,
                '36': 97,
                '37': 110,
                '38': 97,
                '39': 103,
                '40': 101,
                '41': 114,
                '42': 34,
                '43': 58,
                '44': 32,
                '45': 34,
                '46': 121,
                '47': 97,
                '48': 114,
                '49': 110,
                '50': 34,
                '51': 44,
                '52': 10,
                '53': 32,
                '54': 32,
                '55': 32,
                '56': 32,
                '57': 34,
                '58': 118,
                '59': 101,
                '60': 114,
                '61': 115,
                '62': 105,
                '63': 111,
                '64': 110,
                '65': 34,
                '66': 58,
                '67': 32,
                '68': 34,
                '69': 52,
                '70': 46,
                '71': 49,
                '72': 46,
                '73': 51,
                '74': 34,
                '75': 10,
                '76': 32,
                '77': 32,
                '78': 125,
                '79': 10,
                '80': 125,
                '81': 10
              },
              history: [
                '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json'
              ],
              _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
              _isVinyl: true,
              _symlink: null
            }
          },
          Symbol(kCapture): false
        }
      },
      _debug: function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		},
      _: ,
      log: function log(message, ctx) {
    message = message || '';

    if (typeof ctx === 'object' && !Array.isArray(ctx)) {
      customConsole.error(formatter(message, ctx));
    } else {
      customConsole.error.apply(customConsole, arguments);
    }

    return log;
  },
      async: () => this.async(),
      appname: 'test app',
      _globalConfig: {
        path: '/home/aaqilniz/.yo-rc-global.json',
        name: '@loopback/cli:4.1.3',
        fs: {
          store: {
            _events: {
              change: [
                (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    },
                (filename) => {
      // At mem-fs 1.1.3 filename is not passed to the event.
      if (this.disableCacheByFile || (filename && filename !== this.path)) {
        return;
      }

      delete this._cachedStore;
    }
              ]
            },
            _eventsCount: 1,
            _maxListeners: 0,
            store: {
              '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json': {
                stat: null,
                _contents: null,
                history: [
                  '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/bower.json'
                ],
                _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                _isVinyl: true,
                _symlink: null
              },
              '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json': {
                stat: {
                  dev: 2055,
                  mode: 33279,
                  nlink: 1,
                  uid: 1000,
                  gid: 1000,
                  rdev: 0,
                  blksize: 4096,
                  ino: 2241697,
                  size: 2180,
                  blocks: 8,
                  atimeMs: 1664473760957.5466,
                  mtimeMs: 1664473760805.593,
                  ctimeMs: 1664473760805.593,
                  birthtimeMs: 0,
                  atime: new Date('2022-09-29T17:49:20.958Z'),
                  mtime: new Date('2022-09-29T17:49:20.806Z'),
                  ctime: new Date('2022-09-29T17:49:20.806Z'),
                  birthtime: new Date('1970-01-01T00:00:00.000Z')
                },
                _contents: {
                  '0': 123,
                  '1': 10,
                  '2': 32,
                  '3': 32,
                  '4': 34,
                  '5': 110,
                  '6': 97,
                  '7': 109,
                  '8': 101,
                  '9': 34,
                  '10': 58,
                  '11': 32,
                  '12': 34,
                  '13': 116,
                  '14': 101,
                  '15': 115,
                  '16': 116,
                  '17': 45,
                  '18': 97,
                  '19': 112,
                  '20': 112,
                  '21': 34,
                  '22': 44,
                  '23': 10,
                  '24': 32,
                  '25': 32,
                  '26': 34,
                  '27': 118,
                  '28': 101,
                  '29': 114,
                  '30': 115,
                  '31': 105,
                  '32': 111,
                  '33': 110,
                  '34': 34,
                  '35': 58,
                  '36': 32,
                  '37': 34,
                  '38': 48,
                  '39': 46,
                  '40': 48,
                  '41': 46,
                  '42': 49,
                  '43': 34,
                  '44': 44,
                  '45': 10,
                  '46': 32,
                  '47': 32,
                  '48': 34,
                  '49': 100,
                  '50': 101,
                  '51': 115,
                  '52': 99,
                  '53': 114,
                  '54': 105,
                  '55': 112,
                  '56': 116,
                  '57': 105,
                  '58': 111,
                  '59': 110,
                  '60': 34,
                  '61': 58,
                  '62': 32,
                  '63': 34,
                  '64': 112,
                  '65': 97,
                  '66': 116,
                  '67': 114,
                  '68': 105,
                  '69': 99,
                  '70': 107,
                  '71': 34,
                  '72': 44,
                  '73': 10,
                  '74': 32,
                  '75': 32,
                  '76': 34,
                  '77': 107,
                  '78': 101,
                  '79': 121,
                  '80': 119,
                  '81': 111,
                  '82': 114,
                  '83': 100,
                  '84': 115,
                  '85': 34,
                  '86': 58,
                  '87': 32,
                  '88': 91,
                  '89': 10,
                  '90': 32,
                  '91': 32,
                  '92': 32,
                  '93': 32,
                  '94': 34,
                  '95': 108,
                  '96': 111,
                  '97': 111,
                  '98': 112,
                  '99': 98,
                  '100': 97,
                  '101': 99,
                  '102': 107,
                  '103': 45,
                  '104': 97,
                  '105': 112,
                  '106': 112,
                  '107': 108,
                  '108': 105,
                  '109': 99,
                  '110': 97,
                  '111': 116,
                  '112': 105,
                  '113': 111,
                  '114': 110,
                  '115': 34,
                  '116': 44,
                  '117': 10,
                  '118': 32,
                  '119': 32,
                  '120': 32,
                  '121': 32,
                  '122': 34,
                  '123': 108,
                  '124': 111,
                  '125': 111,
                  '126': 112,
                  '127': 98,
                  '128': 97,
                  '129': 99,
                  '130': 107,
                  '131': 34,
                  '132': 10,
                  '133': 32,
                  '134': 32,
                  '135': 93,
                  '136': 44,
                  '137': 10,
                  '138': 32,
                  '139': 32,
                  '140': 34,
                  '141': 109,
                  '142': 97,
                  '143': 105,
                  '144': 110,
                  '145': 34,
                  '146': 58,
                  '147': 32,
                  '148': 34,
                  '149': 100,
                  '150': 105,
                  '151': 115,
                  '152': 116,
                  '153': 47,
                  '154': 105,
                  '155': 110,
                  '156': 100,
                  '157': 101,
                  '158': 120,
                  '159': 46,
                  '160': 106,
                  '161': 115,
                  '162': 34,
                  '163': 44,
                  '164': 10,
                  '165': 32,
                  '166': 32,
                  '167': 34,
                  '168': 116,
                  '169': 121,
                  '170': 112,
                  '171': 101,
                  '172': 115,
                  '173': 34,
                  '174': 58,
                  '175': 32,
                  '176': 34,
                  '177': 100,
                  '178': 105,
                  '179': 115,
                  '180': 116,
                  '181': 47,
                  '182': 105,
                  '183': 110,
                  '184': 100,
                  '185': 101,
                  '186': 120,
                  '187': 46,
                  '188': 100,
                  '189': 46,
                  '190': 116,
                  '191': 115,
                  '192': 34,
                  '193': 44,
                  '194': 10,
                  '195': 32,
                  '196': 32,
                  '197': 34,
                  '198': 101,
                  '199': 110,
                  '200': 103,
                  '201': 105,
                  '202': 110,
                  '203': 101,
                  '204': 115,
                  '205': 34,
                  '206': 58,
                  '207': 32,
                  '208': 123,
                  '209': 10,
                  '210': 32,
                  '211': 32,
                  '212': 32,
                  '213': 32,
                  '214': 34,
                  '215': 110,
                  '216': 111,
                  '217': 100,
                  '218': 101,
                  '219': 34,
                  '220': 58,
                  '221': 32,
                  '222': 34,
                  '223': 49,
                  '224': 52,
                  '225': 32,
                  '226': 124,
                  '227': 124,
                  '228': 32,
                  '229': 49,
                  '230': 54,
                  '231': 32,
                  '232': 124,
                  '233': 124,
                  '234': 32,
                  '235': 49,
                  '236': 55,
                  '237': 32,
                  '238': 124,
                  '239': 124,
                  '240': 32,
                  '241': 49,
                  '242': 56,
                  '243': 34,
                  '244': 10,
                  '245': 32,
                  '246': 32,
                  '247': 125,
                  '248': 44,
                  '249': 10,
                  '250': 32,
                  '251': 32,
                  '252': 34,
                  '253': 115,
                  '254': 99,
                  '255': 114,
                  '256': 105,
                  '257': 112,
                  '258': 116,
                  '259': 115,
                  '260': 34,
                  '261': 58,
                  '262': 32,
                  '263': 123,
                  '264': 10,
                  '265': 32,
                  '266': 32,
                  '267': 32,
                  '268': 32,
                  '269': 34,
                  '270': 98,
                  '271': 117,
                  '272': 105,
                  '273': 108,
                  '274': 100,
                  '275': 34,
                  '276': 58,
                  '277': 32,
                  '278': 34,
                  '279': 108,
                  '280': 98,
                  '281': 45,
                  '282': 116,
                  '283': 115,
                  '284': 99,
                  '285': 34,
                  '286': 44,
                  '287': 10,
                  '288': 32,
                  '289': 32,
                  '290': 32,
                  '291': 32,
                  '292': 34,
                  '293': 98,
                  '294': 117,
                  '295': 105,
                  '296': 108,
                  '297': 100,
                  '298': 58,
                  '299': 119,
                  '300': 97,
                  '301': 116,
                  '302': 99,
                  '303': 104,
                  '304': 34,
                  '305': 58,
                  '306': 32,
                  '307': 34,
                  '308': 108,
                  '309': 98,
                  '310': 45,
                  '311': 116,
                  '312': 115,
                  '313': 99,
                  '314': 32,
                  '315': 45,
                  '316': 45,
                  '317': 119,
                  '318': 97,
                  '319': 116,
                  '320': 99,
                  '321': 104,
                  '322': 34,
                  '323': 44,
                  '324': 10,
                  '325': 32,
                  '326': 32,
                  '327': 32,
                  '328': 32,
                  '329': 34,
                  '330': 108,
                  '331': 105,
                  '332': 110,
                  '333': 116,
                  '334': 34,
                  '335': 58,
                  '336': 32,
                  '337': 34,
                  '338': 121,
                  '339': 97,
                  '340': 114,
                  '341': 110,
                  '342': 32,
                  '343': 114,
                  '344': 117,
                  '345': 110,
                  '346': 32,
                  '347': 101,
                  '348': 115,
                  '349': 108,
                  '350': 105,
                  '351': 110,
                  '352': 116,
                  '353': 32,
                  '354': 38,
                  '355': 38,
                  '356': 32,
                  '357': 121,
                  '358': 97,
                  '359': 114,
                  '360': 110,
                  '361': 32,
                  '362': 114,
                  '363': 117,
                  '364': 110,
                  '365': 32,
                  '366': 112,
                  '367': 114,
                  '368': 101,
                  '369': 116,
                  '370': 116,
                  '371': 105,
                  '372': 101,
                  '373': 114,
                  '374': 58,
                  '375': 99,
                  '376': 104,
                  '377': 101,
                  '378': 99,
                  '379': 107,
                  '380': 34,
                  '381': 44,
                  '382': 10,
                  '383': 32,
                  '384': 32,
                  '385': 32,
                  '386': 32,
                  '387': 34,
                  '388': 108,
                  '389': 105,
                  '390': 110,
                  '391': 116,
                  '392': 58,
                  '393': 102,
                  '394': 105,
                  '395': 120,
                  '396': 34,
                  '397': 58,
                  '398': 32,
                  '399': 34,
                  '400': 121,
                  '401': 97,
                  '402': 114,
                  '403': 110,
                  '404': 32,
                  '405': 114,
                  '406': 117,
                  '407': 110,
                  '408': 32,
                  '409': 101,
                  '410': 115,
                  '411': 108,
                  '412': 105,
                  '413': 110,
                  '414': 116,
                  '415': 58,
                  '416': 102,
                  '417': 105,
                  '418': 120,
                  '419': 32,
                  '420': 38,
                  '421': 38,
                  '422': 32,
                  '423': 121,
                  '424': 97,
                  '425': 114,
                  '426': 110,
                  '427': 32,
                  '428': 114,
                  '429': 117,
                  '430': 110,
                  '431': 32,
                  '432': 112,
                  '433': 114,
                  '434': 101,
                  '435': 116,
                  '436': 116,
                  '437': 105,
                  '438': 101,
                  '439': 114,
                  '440': 58,
                  '441': 102,
                  '442': 105,
                  '443': 120,
                  '444': 34,
                  '445': 44,
                  '446': 10,
                  '447': 32,
                  '448': 32,
                  '449': 32,
                  '450': 32,
                  '451': 34,
                  '452': 112,
                  '453': 114,
                  '454': 101,
                  '455': 116,
                  '456': 116,
                  '457': 105,
                  '458': 101,
                  '459': 114,
                  '460': 58,
                  '461': 99,
                  '462': 108,
                  '463': 105,
                  '464': 34,
                  '465': 58,
                  '466': 32,
                  '467': 34,
                  '468': 108,
                  '469': 98,
                  '470': 45,
                  '471': 112,
                  '472': 114,
                  '473': 101,
                  '474': 116,
                  '475': 116,
                  '476': 105,
                  '477': 101,
                  '478': 114,
                  '479': 32,
                  '480': 92,
                  '481': 34,
                  '482': 42,
                  '483': 42,
                  '484': 47,
                  '485': 42,
                  '486': 46,
                  '487': 116,
                  '488': 115,
                  '489': 92,
                  '490': 34,
                  '491': 32,
                  '492': 92,
                  '493': 34,
                  '494': 42,
                  '495': 42,
                  '496': 47,
                  '497': 42,
                  '498': 46,
                  '499': 106,
                  '500': 115,
                  '501': 92,
                  '502': 34,
                  '503': 34,
                  '504': 44,
                  '505': 10,
                  '506': 32,
                  '507': 32,
                  '508': 32,
                  '509': 32,
                  '510': 34,
                  '511': 112,
                  '512': 114,
                  '513': 101,
                  '514': 116,
                  '515': 116,
                  '516': 105,
                  '517': 101,
                  '518': 114,
                  '519': 58,
                  '520': 99,
                  '521': 104,
                  '522': 101,
                  '523': 99,
                  '524': 107,
                  '525': 34,
                  '526': 58,
                  '527': 32,
                  '528': 34,
                  '529': 121,
                  '530': 97,
                  '531': 114,
                  '532': 110,
                  '533': 32,
                  '534': 114,
                  '535': 117,
                  '536': 110,
                  '537': 32,
                  '538': 112,
                  '539': 114,
                  '540': 101,
                  '541': 116,
                  '542': 116,
                  '543': 105,
                  '544': 101,
                  '545': 114,
                  '546': 58,
                  '547': 99,
                  '548': 108,
                  '549': 105,
                  '550': 32,
                  '551': 45,
                  '552': 108,
                  '553': 34,
                  '554': 44,
                  '555': 10,
                  '556': 32,
                  '557': 32,
                  '558': 32,
                  '559': 32,
                  '560': 34,
                  '561': 112,
                  '562': 114,
                  '563': 101,
                  '564': 116,
                  '565': 116,
                  '566': 105,
                  '567': 101,
                  '568': 114,
                  '569': 58,
                  '570': 102,
                  '571': 105,
                  '572': 120,
                  '573': 34,
                  '574': 58,
                  '575': 32,
                  '576': 34,
                  '577': 121,
                  '578': 97,
                  '579': 114,
                  '580': 110,
                  '581': 32,
                  '582': 114,
                  '583': 117,
                  '584': 110,
                  '585': 32,
                  '586': 112,
                  '587': 114,
                  '588': 101,
                  '589': 116,
                  '590': 116,
                  '591': 105,
                  '592': 101,
                  '593': 114,
                  '594': 58,
                  '595': 99,
                  '596': 108,
                  '597': 105,
                  '598': 32,
                  '599': 45,
                  '600': 45,
                  '601': 119,
                  '602': 114,
                  '603': 105,
                  '604': 116,
                  '605': 101,
                  '606': 34,
                  '607': 44,
                  '608': 10,
                  '609': 32,
                  '610': 32,
                  '611': 32,
                  '612': 32,
                  '613': 34,
                  '614': 101,
                  '615': 115,
                  '616': 108,
                  '617': 105,
                  '618': 110,
                  '619': 116,
                  '620': 34,
                  '621': 58,
                  '622': 32,
                  '623': 34,
                  '624': 108,
                  '625': 98,
                  '626': 45,
                  '627': 101,
                  '628': 115,
                  '629': 108,
                  '630': 105,
                  '631': 110,
                  '632': 116,
                  '633': 32,
                  '634': 45,
                  '635': 45,
                  '636': 114,
                  '637': 101,
                  '638': 112,
                  '639': 111,
                  '640': 114,
                  '641': 116,
                  '642': 45,
                  '643': 117,
                  '644': 110,
                  '645': 117,
                  '646': 115,
                  '647': 101,
                  '648': 100,
                  '649': 45,
                  '650': 100,
                  '651': 105,
                  '652': 115,
                  '653': 97,
                  '654': 98,
                  '655': 108,
                  '656': 101,
                  '657': 45,
                  '658': 100,
                  '659': 105,
                  '660': 114,
                  '661': 101,
                  '662': 99,
                  '663': 116,
                  '664': 105,
                  '665': 118,
                  '666': 101,
                  '667': 115,
                  '668': 32,
                  '669': 46,
                  '670': 34,
                  '671': 44,
                  '672': 10,
                  '673': 32,
                  '674': 32,
                  '675': 32,
                  '676': 32,
                  '677': 34,
                  '678': 101,
                  '679': 115,
                  '680': 108,
                  '681': 105,
                  '682': 110,
                  '683': 116,
                  '684': 58,
                  '685': 102,
                  '686': 105,
                  '687': 120,
                  '688': 34,
                  '689': 58,
                  '690': 32,
                  '691': 34,
                  '692': 121,
                  '693': 97,
                  '694': 114,
                  '695': 110,
                  '696': 32,
                  '697': 114,
                  '698': 117,
                  '699': 110,
                  '700': 32,
                  '701': 101,
                  '702': 115,
                  '703': 108,
                  '704': 105,
                  '705': 110,
                  '706': 116,
                  '707': 32,
                  '708': 45,
                  '709': 45,
                  '710': 102,
                  '711': 105,
                  '712': 120,
                  '713': 34,
                  '714': 44,
                  '715': 10,
                  '716': 32,
                  '717': 32,
                  '718': 32,
                  '719': 32,
                  '720': 34,
                  '721': 112,
                  '722': 114,
                  '723': 101,
                  '724': 116,
                  '725': 101,
                  '726': 115,
                  '727': 116,
                  '728': 34,
                  '729': 58,
                  '730': 32,
                  '731': 34,
                  '732': 121,
                  '733': 97,
                  '734': 114,
                  '735': 110,
                  '736': 32,
                  '737': 114,
                  '738': 117,
                  '739': 110,
                  '740': 32,
                  '741': 114,
                  '742': 101,
                  '743': 98,
                  '744': 117,
                  '745': 105,
                  '746': 108,
                  '747': 100,
                  '748': 34,
                  '749': 44,
                  '750': 10,
                  '751': 32,
                  '752': 32,
                  '753': 32,
                  '754': 32,
                  '755': 34,
                  '756': 116,
                  '757': 101,
                  '758': 115,
                  '759': 116,
                  '760': 34,
                  '761': 58,
                  '762': 32,
                  '763': 34,
                  '764': 108,
                  '765': 98,
                  '766': 45,
                  '767': 109,
                  '768': 111,
                  '769': 99,
                  '770': 104,
                  '771': 97,
                  '772': 32,
                  '773': 45,
                  '774': 45,
                  '775': 97,
                  '776': 108,
                  '777': 108,
                  '778': 111,
                  '779': 119,
                  '780': 45,
                  '781': 99,
                  '782': 111,
                  '783': 110,
                  '784': 115,
                  '785': 111,
                  '786': 108,
                  '787': 101,
                  '788': 45,
                  '789': 108,
                  '790': 111,
                  '791': 103,
                  '792': 115,
                  '793': 32,
                  '794': 92,
                  '795': 34,
                  '796': 100,
                  '797': 105,
                  '798': 115,
                  '799': 116,
                  '800': 47,
                  '801': 95,
                  '802': 95,
                  '803': 116,
                  '804': 101,
                  '805': 115,
                  '806': 116,
                  '807': 115,
                  '808': 95,
                  '809': 95,
                  '810': 92,
                  '811': 34,
                  '812': 34,
                  '813': 44,
                  '814': 10,
                  '815': 32,
                  '816': 32,
                  '817': 32,
                  '818': 32,
                  '819': 34,
                  '820': 112,
                  '821': 111,
                  '822': 115,
                  '823': 116,
                  '824': 116,
                  '825': 101,
                  '826': 115,
                  '827': 116,
                  '828': 34,
                  '829': 58,
                  '830': 32,
                  '831': 34,
                  '832': 121,
                  '833': 97,
                  '834': 114,
                  '835': 110,
                  '836': 32,
                  '837': 114,
                  '838': 117,
                  '839': 110,
                  '840': 32,
                  '841': 108,
                  '842': 105,
                  '843': 110,
                  '844': 116,
                  '845': 34,
                  '846': 44,
                  '847': 10,
                  '848': 32,
                  '849': 32,
                  '850': 32,
                  '851': 32,
                  '852': 34,
                  '853': 116,
                  '854': 101,
                  '855': 115,
                  '856': 116,
                  '857': 58,
                  '858': 100,
                  '859': 101,
                  '860': 118,
                  '861': 34,
                  '862': 58,
                  '863': 32,
                  '864': 34,
                  '865': 108,
                  '866': 98,
                  '867': 45,
                  '868': 109,
                  '869': 111,
                  '870': 99,
                  '871': 104,
                  '872': 97,
                  '873': 32,
                  '874': 45,
                  '875': 45,
                  '876': 97,
                  '877': 108,
                  '878': 108,
                  '879': 111,
                  '880': 119,
                  '881': 45,
                  '882': 99,
                  '883': 111,
                  '884': 110,
                  '885': 115,
                  '886': 111,
                  '887': 108,
                  '888': 101,
                  '889': 45,
                  '890': 108,
                  '891': 111,
                  '892': 103,
                  '893': 115,
                  '894': 32,
                  '895': 100,
                  '896': 105,
                  '897': 115,
                  '898': 116,
                  '899': 47,
                  '900': 95,
                  '901': 95,
                  '902': 116,
                  '903': 101,
                  '904': 115,
                  '905': 116,
                  '906': 115,
                  '907': 95,
                  '908': 95,
                  '909': 47,
                  '910': 42,
                  '911': 42,
                  '912': 47,
                  '913': 42,
                  '914': 46,
                  '915': 106,
                  '916': 115,
                  '917': 32,
                  '918': 38,
                  '919': 38,
                  '920': 32,
                  '921': 121,
                  '922': 97,
                  '923': 114,
                  '924': 110,
                  '925': 32,
                  '926': 114,
                  '927': 117,
                  '928': 110,
                  '929': 32,
                  '930': 112,
                  '931': 111,
                  '932': 115,
                  '933': 116,
                  '934': 116,
                  '935': 101,
                  '936': 115,
                  '937': 116,
                  '938': 34,
                  '939': 44,
                  '940': 10,
                  '941': 32,
                  '942': 32,
                  '943': 32,
                  '944': 32,
                  '945': 34,
                  '946': 100,
                  '947': 111,
                  '948': 99,
                  '949': 107,
                  '950': 101,
                  '951': 114,
                  '952': 58,
                  '953': 98,
                  '954': 117,
                  '955': 105,
                  '956': 108,
                  '957': 100,
                  '958': 34,
                  '959': 58,
                  '960': 32,
                  '961': 34,
                  '962': 100,
                  '963': 111,
                  '964': 99,
                  '965': 107,
                  '966': 101,
                  '967': 114,
                  '968': 32,
                  '969': 98,
                  '970': 117,
                  '971': 105,
                  '972': 108,
                  '973': 100,
                  '974': 32,
                  '975': 45,
                  '976': 116,
                  '977': 32,
                  '978': 116,
                  '979': 101,
                  '980': 115,
                  '981': 116,
                  '982': 45,
                  '983': 97,
                  '984': 112,
                  '985': 112,
                  '986': 32,
                  '987': 46,
                  '988': 34,
                  '989': 44,
                  '990': 10,
                  '991': 32,
                  '992': 32,
                  '993': 32,
                  '994': 32,
                  '995': 34,
                  '996': 100,
                  '997': 111,
                  '998': 99,
                  '999': 107,
                  '1000': 101,
                  '1001': 114,
                  '1002': 58,
                  '1003': 114,
                  '1004': 117,
                  '1005': 110,
                  '1006': 34,
                  '1007': 58,
                  '1008': 32,
                  '1009': 34,
                  '1010': 100,
                  '1011': 111,
                  '1012': 99,
                  '1013': 107,
                  '1014': 101,
                  '1015': 114,
                  '1016': 32,
                  '1017': 114,
                  '1018': 117,
                  '1019': 110,
                  '1020': 32,
                  '1021': 45,
                  '1022': 112,
                  '1023': 32,
                  '1024': 51,
                  '1025': 48,
                  '1026': 48,
                  '1027': 48,
                  '1028': 58,
                  '1029': 51,
                  '1030': 48,
                  '1031': 48,
                  '1032': 48,
                  '1033': 32,
                  '1034': 45,
                  '1035': 100,
                  '1036': 32,
                  '1037': 116,
                  '1038': 101,
                  '1039': 115,
                  '1040': 116,
                  '1041': 45,
                  '1042': 97,
                  '1043': 112,
                  '1044': 112,
                  '1045': 34,
                  '1046': 44,
                  '1047': 10,
                  '1048': 32,
                  '1049': 32,
                  '1050': 32,
                  '1051': 32,
                  '1052': 34,
                  '1053': 112,
                  '1054': 114,
                  '1055': 101,
                  '1056': 109,
                  '1057': 105,
                  '1058': 103,
                  '1059': 114,
                  '1060': 97,
                  '1061': 116,
                  '1062': 101,
                  '1063': 34,
                  '1064': 58,
                  '1065': 32,
                  '1066': 34,
                  '1067': 121,
                  '1068': 97,
                  '1069': 114,
                  '1070': 110,
                  '1071': 32,
                  '1072': 114,
                  '1073': 117,
                  '1074': 110,
                  '1075': 32,
                  '1076': 98,
                  '1077': 117,
                  '1078': 105,
                  '1079': 108,
                  '1080': 100,
                  '1081': 34,
                  '1082': 44,
                  '1083': 10,
                  '1084': 32,
                  '1085': 32,
                  '1086': 32,
                  '1087': 32,
                  '1088': 34,
                  '1089': 109,
                  '1090': 105,
                  '1091': 103,
                  '1092': 114,
                  '1093': 97,
                  '1094': 116,
                  '1095': 101,
                  '1096': 34,
                  '1097': 58,
                  '1098': 32,
                  '1099': 34,
                  '1100': 110,
                  '1101': 111,
                  '1102': 100,
                  '1103': 101,
                  '1104': 32,
                  '1105': 46,
                  '1106': 47,
                  '1107': 100,
                  '1108': 105,
                  '1109': 115,
                  '1110': 116,
                  '1111': 47,
                  '1112': 109,
                  '1113': 105,
                  '1114': 103,
                  '1115': 114,
                  '1116': 97,
                  '1117': 116,
                  '1118': 101,
                  '1119': 34,
                  '1120': 44,
                  '1121': 10,
                  '1122': 32,
                  '1123': 32,
                  '1124': 32,
                  '1125': 32,
                  '1126': 34,
                  '1127': 112,
                  '1128': 114,
                  '1129': 101,
                  '1130': 111,
                  '1131': 112,
                  '1132': 101,
                  '1133': 110,
                  '1134': 97,
                  '1135': 112,
                  '1136': 105,
                  '1137': 45,
                  '1138': 115,
                  '1139': 112,
                  '1140': 101,
                  '1141': 99,
                  '1142': 34,
                  '1143': 58,
                  '1144': 32,
                  '1145': 34,
                  '1146': 121,
                  '1147': 97,
                  '1148': 114,
                  '1149': 110,
                  '1150': 32,
                  '1151': 114,
                  '1152': 117,
                  '1153': 110,
                  '1154': 32,
                  '1155': 98,
                  '1156': 117,
                  '1157': 105,
                  '1158': 108,
                  '1159': 100,
                  '1160': 34,
                  '1161': 44,
                  '1162': 10,
                  '1163': 32,
                  '1164': 32,
                  '1165': 32,
                  '1166': 32,
                  '1167': 34,
                  '1168': 111,
                  '1169': 112,
                  '1170': 101,
                  '1171': 110,
                  '1172': 97,
                  '1173': 112,
                  '1174': 105,
                  '1175': 45,
                  '1176': 115,
                  '1177': 112,
                  '1178': 101,
                  '1179': 99,
                  '1180': 34,
                  '1181': 58,
                  '1182': 32,
                  '1183': 34,
                  '1184': 110,
                  '1185': 111,
                  '1186': 100,
                  '1187': 101,
                  '1188': 32,
                  '1189': 46,
                  '1190': 47,
                  '1191': 100,
                  '1192': 105,
                  '1193': 115,
                  '1194': 116,
                  '1195': 47,
                  '1196': 111,
                  '1197': 112,
                  '1198': 101,
                  '1199': 110,
                  '1200': 97,
                  '1201': 112,
                  '1202': 105,
                  '1203': 45,
                  '1204': 115,
                  '1205': 112,
                  '1206': 101,
                  '1207': 99,
                  '1208': 34,
                  '1209': 44,
                  '1210': 10,
                  '1211': 32,
                  '1212': 32,
                  '1213': 32,
                  '1214': 32,
                  '1215': 34,
                  '1216': 112,
                  '1217': 114,
                  '1218': 101,
                  '1219': 115,
                  '1220': 116,
                  '1221': 97,
                  '1222': 114,
                  '1223': 116,
                  '1224': 34,
                  '1225': 58,
                  '1226': 32,
                  '1227': 34,
                  '1228': 121,
                  '1229': 97,
                  '1230': 114,
                  '1231': 110,
                  '1232': 32,
                  '1233': 114,
                  '1234': 117,
                  '1235': 110,
                  '1236': 32,
                  '1237': 114,
                  '1238': 101,
                  '1239': 98,
                  '1240': 117,
                  '1241': 105,
                  '1242': 108,
                  '1243': 100,
                  '1244': 34,
                  '1245': 44,
                  '1246': 10,
                  '1247': 32,
                  '1248': 32,
                  '1249': 32,
                  '1250': 32,
                  '1251': 34,
                  '1252': 115,
                  '1253': 116,
                  '1254': 97,
                  '1255': 114,
                  '1256': 116,
                  '1257': 34,
                  '1258': 58,
                  '1259': 32,
                  '1260': 34,
                  '1261': 110,
                  '1262': 111,
                  '1263': 100,
                  '1264': 101,
                  '1265': 32,
                  '1266': 45,
                  '1267': 114,
                  '1268': 32,
                  '1269': 115,
                  '1270': 111,
                  '1271': 117,
                  '1272': 114,
                  '1273': 99,
                  '1274': 101,
                  '1275': 45,
                  '1276': 109,
                  '1277': 97,
                  '1278': 112,
                  '1279': 45,
                  '1280': 115,
                  '1281': 117,
                  '1282': 112,
                  '1283': 112,
                  '1284': 111,
                  '1285': 114,
                  '1286': 116,
                  '1287': 47,
                  '1288': 114,
                  '1289': 101,
                  '1290': 103,
                  '1291': 105,
                  '1292': 115,
                  '1293': 116,
                  '1294': 101,
                  '1295': 114,
                  '1296': 32,
                  '1297': 46,
                  '1298': 34,
                  '1299': 44,
                  '1300': 10,
                  '1301': 32,
                  '1302': 32,
                  '1303': 32,
                  '1304': 32,
                  '1305': 34,
                  '1306': 99,
                  '1307': 108,
                  '1308': 101,
                  '1309': 97,
                  '1310': 110,
                  '1311': 34,
                  '1312': 58,
                  '1313': 32,
                  '1314': 34,
                  '1315': 108,
                  '1316': 98,
                  '1317': 45,
                  '1318': 99,
                  '1319': 108,
                  '1320': 101,
                  '1321': 97,
                  '1322': 110,
                  '1323': 32,
                  '1324': 100,
                  '1325': 105,
                  '1326': 115,
                  '1327': 116,
                  '1328': 32,
                  '1329': 42,
                  '1330': 46,
                  '1331': 116,
                  '1332': 115,
                  '1333': 98,
                  '1334': 117,
                  '1335': 105,
                  '1336': 108,
                  '1337': 100,
                  '1338': 105,
                  '1339': 110,
                  '1340': 102,
                  '1341': 111,
                  '1342': 32,
                  '1343': 46,
                  '1344': 101,
                  '1345': 115,
                  '1346': 108,
                  '1347': 105,
                  '1348': 110,
                  '1349': 116,
                  '1350': 99,
                  '1351': 97,
                  '1352': 99,
                  '1353': 104,
                  '1354': 101,
                  '1355': 34,
                  '1356': 44,
                  '1357': 10,
                  '1358': 32,
                  '1359': 32,
                  '1360': 32,
                  '1361': 32,
                  '1362': 34,
                  '1363': 114,
                  '1364': 101,
                  '1365': 98,
                  '1366': 117,
                  '1367': 105,
                  '1368': 108,
                  '1369': 100,
                  '1370': 34,
                  '1371': 58,
                  '1372': 32,
                  '1373': 34,
                  '1374': 121,
                  '1375': 97,
                  '1376': 114,
                  '1377': 110,
                  '1378': 32,
                  '1379': 114,
                  '1380': 117,
                  '1381': 110,
                  '1382': 32,
                  '1383': 99,
                  '1384': 108,
                  '1385': 101,
                  '1386': 97,
                  '1387': 110,
                  '1388': 32,
                  '1389': 38,
                  '1390': 38,
                  '1391': 32,
                  '1392': 121,
                  '1393': 97,
                  '1394': 114,
                  '1395': 110,
                  '1396': 32,
                  '1397': 114,
                  '1398': 117,
                  '1399': 110,
                  '1400': 32,
                  '1401': 98,
                  '1402': 117,
                  '1403': 105,
                  '1404': 108,
                  '1405': 100,
                  '1406': 34,
                  '1407': 10,
                  '1408': 32,
                  '1409': 32,
                  '1410': 125,
                  '1411': 44,
                  '1412': 10,
                  '1413': 32,
                  '1414': 32,
                  '1415': 34,
                  '1416': 114,
                  '1417': 101,
                  '1418': 112,
                  '1419': 111,
                  '1420': 115,
                  '1421': 105,
                  '1422': 116,
                  '1423': 111,
                  '1424': 114,
                  '1425': 121,
                  '1426': 34,
                  '1427': 58,
                  '1428': 32,
                  '1429': 123,
                  '1430': 10,
                  '1431': 32,
                  '1432': 32,
                  '1433': 32,
                  '1434': 32,
                  '1435': 34,
                  '1436': 116,
                  '1437': 121,
                  '1438': 112,
                  '1439': 101,
                  '1440': 34,
                  '1441': 58,
                  '1442': 32,
                  '1443': 34,
                  '1444': 103,
                  '1445': 105,
                  '1446': 116,
                  '1447': 34,
                  '1448': 44,
                  '1449': 10,
                  '1450': 32,
                  '1451': 32,
                  '1452': 32,
                  '1453': 32,
                  '1454': 34,
                  '1455': 117,
                  '1456': 114,
                  '1457': 108,
                  '1458': 34,
                  '1459': 58,
                  '1460': 32,
                  '1461': 34,
                  '1462': 34,
                  '1463': 10,
                  '1464': 32,
                  '1465': 32,
                  '1466': 125,
                  '1467': 44,
                  '1468': 10,
                  '1469': 32,
                  '1470': 32,
                  '1471': 34,
                  '1472': 97,
                  '1473': 117,
                  '1474': 116,
                  '1475': 104,
                  '1476': 111,
                  '1477': 114,
                  '1478': 34,
                  '1479': 58,
                  '1480': 32,
                  '1481': 34,
                  '1482': 77,
                  '1483': 117,
                  '1484': 104,
                  '1485': 97,
                  '1486': 109,
                  '1487': 109,
                  '1488': 97,
                  '1489': 100,
                  '1490': 32,
                  '1491': 65,
                  '1492': 97,
                  '1493': 113,
                  '1494': 105,
                  '1495': 108,
                  '1496': 32,
                  '1497': 60,
                  '1498': 97,
                  '1499': 97,
                  '1500': 113,
                  '1501': 105,
                  '1502': 108,
                  '1503': 110,
                  '1504': 105,
                  '1505': 122,
                  '1506': 64,
                  '1507': 121,
                  '1508': 97,
                  '1509': 104,
                  '1510': 111,
                  '1511': 111,
                  '1512': 46,
                  '1513': 99,
                  '1514': 111,
                  '1515': 109,
                  '1516': 62,
                  '1517': 34,
                  '1518': 44,
                  '1519': 10,
                  '1520': 32,
                  '1521': 32,
                  '1522': 34,
                  '1523': 108,
                  '1524': 105,
                  '1525': 99,
                  '1526': 101,
                  '1527': 110,
                  '1528': 115,
                  '1529': 101,
                  '1530': 34,
                  '1531': 58,
                  '1532': 32,
                  '1533': 34,
                  '1534': 34,
                  '1535': 44,
                  '1536': 10,
                  '1537': 32,
                  '1538': 32,
                  '1539': 34,
                  '1540': 102,
                  '1541': 105,
                  '1542': 108,
                  '1543': 101,
                  '1544': 115,
                  '1545': 34,
                  '1546': 58,
                  '1547': 32,
                  '1548': 91,
                  '1549': 10,
                  '1550': 32,
                  '1551': 32,
                  '1552': 32,
                  '1553': 32,
                  '1554': 34,
                  '1555': 82,
                  '1556': 69,
                  '1557': 65,
                  '1558': 68,
                  '1559': 77,
                  '1560': 69,
                  '1561': 46,
                  '1562': 109,
                  '1563': 100,
                  '1564': 34,
                  '1565': 44,
                  '1566': 10,
                  '1567': 32,
                  '1568': 32,
                  '1569': 32,
                  '1570': 32,
                  '1571': 34,
                  '1572': 100,
                  '1573': 105,
                  '1574': 115,
                  '1575': 116,
                  '1576': 34,
                  '1577': 44,
                  '1578': 10,
                  '1579': 32,
                  '1580': 32,
                  '1581': 32,
                  '1582': 32,
                  '1583': 34,
                  '1584': 115,
                  '1585': 114,
                  '1586': 99,
                  '1587': 34,
                  '1588': 44,
                  '1589': 10,
                  '1590': 32,
                  '1591': 32,
                  '1592': 32,
                  '1593': 32,
                  '1594': 34,
                  '1595': 33,
                  '1596': 42,
                  '1597': 47,
                  '1598': 95,
                  '1599': 95,
                  '1600': 116,
                  '1601': 101,
                  '1602': 115,
                  '1603': 116,
                  '1604': 115,
                  '1605': 95,
                  '1606': 95,
                  '1607': 34,
                  '1608': 10,
                  '1609': 32,
                  '1610': 32,
                  '1611': 93,
                  '1612': 44,
                  '1613': 10,
                  '1614': 32,
                  '1615': 32,
                  '1616': 34,
                  '1617': 100,
                  '1618': 101,
                  '1619': 112,
                  '1620': 101,
                  '1621': 110,
                  '1622': 100,
                  '1623': 101,
                  '1624': 110,
                  '1625': 99,
                  '1626': 105,
                  '1627': 101,
                  '1628': 115,
                  '1629': 34,
                  '1630': 58,
                  '1631': 32,
                  '1632': 123,
                  '1633': 10,
                  '1634': 32,
                  '1635': 32,
                  '1636': 32,
                  '1637': 32,
                  '1638': 34,
                  '1639': 64,
                  '1640': 108,
                  '1641': 111,
                  '1642': 111,
                  '1643': 112,
                  '1644': 98,
                  '1645': 97,
                  '1646': 99,
                  '1647': 107,
                  '1648': 47,
                  '1649': 98,
                  '1650': 111,
                  '1651': 111,
                  '1652': 116,
                  '1653': 34,
                  '1654': 58,
                  '1655': 32,
                  '1656': 34,
                  '1657': 94,
                  '1658': 53,
                  '1659': 46,
                  '1660': 48,
                  '1661': 46,
                  '1662': 51,
                  '1663': 34,
                  '1664': 44,
                  '1665': 10,
                  '1666': 32,
                  '1667': 32,
                  '1668': 32,
                  '1669': 32,
                  '1670': 34,
                  '1671': 64,
                  '1672': 108,
                  '1673': 111,
                  '1674': 111,
                  '1675': 112,
                  '1676': 98,
                  '1677': 97,
                  '1678': 99,
                  '1679': 107,
                  '1680': 47,
                  '1681': 99,
                  '1682': 111,
                  '1683': 114,
                  '1684': 101,
                  '1685': 34,
                  '1686': 58,
                  '1687': 32,
                  '1688': 34,
                  '1689': 94,
                  '1690': 52,
                  '1691': 46,
                  '1692': 48,
                  '1693': 46,
                  '1694': 51,
                  '1695': 34,
                  '1696': 44,
                  '1697': 10,
                  '1698': 32,
                  '1699': 32,
                  '1700': 32,
                  '1701': 32,
                  '1702': 34,
                  '1703': 64,
                  '1704': 108,
                  '1705': 111,
                  '1706': 111,
                  '1707': 112,
                  '1708': 98,
                  '1709': 97,
                  '1710': 99,
                  '1711': 107,
                  '1712': 47,
                  '1713': 114,
                  '1714': 101,
                  '1715': 112,
                  '1716': 111,
                  '1717': 115,
                  '1718': 105,
                  '1719': 116,
                  '1720': 111,
                  '1721': 114,
                  '1722': 121,
                  '1723': 34,
                  '1724': 58,
                  '1725': 32,
                  '1726': 34,
                  '1727': 94,
                  '1728': 53,
                  '1729': 46,
                  '1730': 48,
                  '1731': 46,
                  '1732': 51,
                  '1733': 34,
                  '1734': 44,
                  '1735': 10,
                  '1736': 32,
                  '1737': 32,
                  '1738': 32,
                  '1739': 32,
                  '1740': 34,
                  '1741': 64,
                  '1742': 108,
                  '1743': 111,
                  '1744': 111,
                  '1745': 112,
                  '1746': 98,
                  '1747': 97,
                  '1748': 99,
                  '1749': 107,
                  '1750': 47,
                  '1751': 114,
                  '1752': 101,
                  '1753': 115,
                  '1754': 116,
                  '1755': 34,
                  '1756': 58,
                  '1757': 32,
                  '1758': 34,
                  '1759': 94,
                  '1760': 49,
                  '1761': 50,
                  '1762': 46,
                  '1763': 48,
                  '1764': 46,
                  '1765': 51,
                  '1766': 34,
                  '1767': 44,
                  '1768': 10,
                  '1769': 32,
                  '1770': 32,
                  '1771': 32,
                  '1772': 32,
                  '1773': 34,
                  '1774': 64,
                  '1775': 108,
                  '1776': 111,
                  '1777': 111,
                  '1778': 112,
                  '1779': 98,
                  '1780': 97,
                  '1781': 99,
                  '1782': 107,
                  '1783': 47,
                  '1784': 114,
                  '1785': 101,
                  '1786': 115,
                  '1787': 116,
                  '1788': 45,
                  '1789': 101,
                  '1790': 120,
                  '1791': 112,
                  '1792': 108,
                  '1793': 111,
                  '1794': 114,
                  '1795': 101,
                  '1796': 114,
                  '1797': 34,
                  '1798': 58,
                  '1799': 32,
                  '1800': 34,
                  '1801': 94,
                  '1802': 53,
                  '1803': 46,
                  '1804': 48,
                  '1805': 46,
                  '1806': 51,
                  '1807': 34,
                  '1808': 44,
                  '1809': 10,
                  '1810': 32,
                  '1811': 32,
                  '1812': 32,
                  '1813': 32,
                  '1814': 34,
                  '1815': 64,
                  '1816': 108,
                  '1817': 111,
                  '1818': 111,
                  '1819': 112,
                  '1820': 98,
                  '1821': 97,
                  '1822': 99,
                  '1823': 107,
                  '1824': 47,
                  '1825': 115,
                  '1826': 101,
                  '1827': 114,
                  '1828': 118,
                  '1829': 105,
                  '1830': 99,
                  '1831': 101,
                  '1832': 45,
                  '1833': 112,
                  '1834': 114,
                  '1835': 111,
                  '1836': 120,
                  '1837': 121,
                  '1838': 34,
                  '1839': 58,
                  '1840': 32,
                  '1841': 34,
                  '1842': 94,
                  '1843': 53,
                  '1844': 46,
                  '1845': 48,
                  '1846': 46,
                  '1847': 51,
                  '1848': 34,
                  '1849': 44,
                  '1850': 10,
                  '1851': 32,
                  '1852': 32,
                  '1853': 32,
                  '1854': 32,
                  '1855': 34,
                  '1856': 108,
                  '1857': 111,
                  '1858': 111,
                  '1859': 112,
                  '1860': 98,
                  '1861': 97,
                  '1862': 99,
                  '1863': 107,
                  '1864': 45,
                  '1865': 99,
                  '1866': 111,
                  '1867': 110,
                  '1868': 110,
                  '1869': 101,
                  '1870': 99,
                  '1871': 116,
                  '1872': 111,
                  '1873': 114,
                  '1874': 45,
                  '1875': 109,
                  '1876': 121,
                  '1877': 115,
                  '1878': 113,
                  '1879': 108,
                  '1880': 34,
                  '1881': 58,
                  '1882': 32,
                  '1883': 34,
                  '1884': 94,
                  '1885': 53,
                  '1886': 46,
                  '1887': 51,
                  '1888': 46,
                  '1889': 48,
                  '1890': 34,
                  '1891': 44,
                  '1892': 10,
                  '1893': 32,
                  '1894': 32,
                  '1895': 32,
                  '1896': 32,
                  '1897': 34,
                  '1898': 116,
                  '1899': 115,
                  '1900': 108,
                  '1901': 105,
                  '1902': 98,
                  '1903': 34,
                  '1904': 58,
                  '1905': 32,
                  '1906': 34,
                  '1907': 94,
                  '1908': 50,
                  '1909': 46,
                  '1910': 48,
                  '1911': 46,
                  '1912': 48,
                  '1913': 34,
                  '1914': 10,
                  '1915': 32,
                  '1916': 32,
                  '1917': 125,
                  '1918': 44,
                  '1919': 10,
                  '1920': 32,
                  '1921': 32,
                  '1922': 34,
                  '1923': 100,
                  '1924': 101,
                  '1925': 118,
                  '1926': 68,
                  '1927': 101,
                  '1928': 112,
                  '1929': 101,
                  '1930': 110,
                  '1931': 100,
                  '1932': 101,
                  '1933': 110,
                  '1934': 99,
                  '1935': 105,
                  '1936': 101,
                  '1937': 115,
                  '1938': 34,
                  '1939': 58,
                  '1940': 32,
                  '1941': 123,
                  '1942': 10,
                  '1943': 32,
                  '1944': 32,
                  '1945': 32,
                  '1946': 32,
                  '1947': 34,
                  '1948': 64,
                  '1949': 108,
                  '1950': 111,
                  '1951': 111,
                  '1952': 112,
                  '1953': 98,
                  '1954': 97,
                  '1955': 99,
                  '1956': 107,
                  '1957': 47,
                  '1958': 98,
                  '1959': 117,
                  '1960': 105,
                  '1961': 108,
                  '1962': 100,
                  '1963': 34,
                  '1964': 58,
                  '1965': 32,
                  '1966': 34,
                  '1967': 94,
                  '1968': 57,
                  '1969': 46,
                  '1970': 48,
                  '1971': 46,
                  '1972': 51,
                  '1973': 34,
                  '1974': 44,
                  '1975': 10,
                  '1976': 32,
                  '1977': 32,
                  '1978': 32,
                  '1979': 32,
                  '1980': 34,
                  '1981': 64,
                  '1982': 108,
                  '1983': 111,
                  '1984': 111,
                  '1985': 112,
                  '1986': 98,
                  '1987': 97,
                  '1988': 99,
                  '1989': 107,
                  '1990': 47,
                  '1991': 101,
                  '1992': 115,
                  '1993': 108,
                  '1994': 105,
                  '1995': 110,
                  '1996': 116,
                  '1997': 45,
                  '1998': 99,
                  '1999': 111,
                  '2000': 110,
                  '2001': 102,
                  '2002': 105,
                  '2003': 103,
                  '2004': 34,
                  '2005': 58,
                  '2006': 32,
                  '2007': 34,
                  '2008': 94,
                  '2009': 49,
                  '2010': 51,
                  '2011': 46,
                  '2012': 48,
                  '2013': 46,
                  '2014': 51,
                  '2015': 34,
                  '2016': 44,
                  '2017': 10,
                  '2018': 32,
                  '2019': 32,
                  '2020': 32,
                  '2021': 32,
                  '2022': 34,
                  '2023': 64,
                  '2024': 108,
                  '2025': 111,
                  '2026': 111,
                  '2027': 112,
                  '2028': 98,
                  '2029': 97,
                  '2030': 99,
                  '2031': 107,
                  '2032': 47,
                  '2033': 116,
                  '2034': 101,
                  '2035': 115,
                  '2036': 116,
                  '2037': 108,
                  '2038': 97,
                  '2039': 98,
                  '2040': 34,
                  '2041': 58,
                  '2042': 32,
                  '2043': 34,
                  '2044': 94,
                  '2045': 53,
                  '2046': 46,
                  '2047': 48,
                  '2048': 46,
                  '2049': 51,
                  '2050': 34,
                  '2051': 44,
                  '2052': 10,
                  '2053': 32,
                  '2054': 32,
                  '2055': 32,
                  '2056': 32,
                  '2057': 34,
                  '2058': 64,
                  '2059': 116,
                  '2060': 121,
                  '2061': 112,
                  '2062': 101,
                  '2063': 115,
                  '2064': 47,
                  '2065': 110,
                  '2066': 111,
                  '2067': 100,
                  '2068': 101,
                  '2069': 34,
                  '2070': 58,
                  '2071': 32,
                  '2072': 34,
                  '2073': 94,
                  '2074': 49,
                  '2075': 52,
                  '2076': 46,
                  '2077': 49,
                  '2078': 56,
                  '2079': 46,
                  '2080': 50,
                  '2081': 54,
                  '2082': 34,
                  '2083': 44,
                  '2084': 10,
                  '2085': 32,
                  '2086': 32,
                  '2087': 32,
                  '2088': 32,
                  '2089': 34,
                  '2090': 101,
                  '2091': 115,
                  '2092': 108,
                  '2093': 105,
                  '2094': 110,
                  '2095': 116,
                  '2096': 34,
                  '2097': 58,
                  '2098': 32,
                  '2099': 34,
                  '2100': 94,
                  '2101': 56,
                  '2102': 46,
                  '2103': 50,
                  '2104': 50,
                  '2105': 46,
                  '2106': 48,
                  '2107': 34,
                  '2108': 44,
                  '2109': 10,
                  '2110': 32,
                  '2111': 32,
                  '2112': 32,
                  '2113': 32,
                  '2114': 34,
                  '2115': 115,
                  '2116': 111,
                  '2117': 117,
                  '2118': 114,
                  '2119': 99,
                  '2120': 101,
                  '2121': 45,
                  '2122': 109,
                  '2123': 97,
                  '2124': 112,
                  '2125': 45,
                  '2126': 115,
                  '2127': 117,
                  '2128': 112,
                  '2129': 112,
                  '2130': 111,
                  '2131': 114,
                  '2132': 116,
                  '2133': 34,
                  '2134': 58,
                  '2135': 32,
                  '2136': 34,
                  '2137': 94,
                  '2138': 48,
                  '2139': 46,
                  '2140': 53,
                  '2141': 46,
                  '2142': 50,
                  '2143': 49,
                  '2144': 34,
                  '2145': 44,
                  '2146': 10,
                  '2147': 32,
                  '2148': 32,
                  '2149': 32,
                  '2150': 32,
                  '2151': 34,
                  '2152': 116,
                  '2153': 121,
                  '2154': 112,
                  '2155': 101,
                  '2156': 115,
                  '2157': 99,
                  '2158': 114,
                  '2159': 105,
                  '2160': 112,
                  '2161': 116,
                  '2162': 34,
                  '2163': 58,
                  '2164': 32,
                  '2165': 34,
                  '2166': 126,
                  '2167': 52,
                  '2168': 46,
                  '2169': 55,
                  '2170': 46,
                  '2171': 52,
                  '2172': 34,
                  '2173': 10,
                  '2174': 32,
                  '2175': 32,
                  '2176': 125,
                  '2177': 10,
                  '2178': 125,
                  '2179': 10
                },
                history: [
                  '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/package.json'
                ],
                _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                _isVinyl: true,
                _symlink: null
              },
              '/home/aaqilniz/.yo-rc-global.json': {
                stat: null,
                _contents: null,
                history: [
                  '/home/aaqilniz/.yo-rc-global.json'
                ],
                _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                _isVinyl: true,
                _symlink: null
              },
              '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json': {
                stat: {
                  dev: 2055,
                  mode: 33279,
                  nlink: 1,
                  uid: 1000,
                  gid: 1000,
                  rdev: 0,
                  blksize: 4096,
                  ino: 2241690,
                  size: 82,
                  blocks: 1,
                  atimeMs: 1664468198390.669,
                  mtimeMs: 1664467890046.1177,
                  ctimeMs: 1664467890046.1177,
                  birthtimeMs: 0,
                  atime: new Date('2022-09-29T16:16:38.391Z'),
                  mtime: new Date('2022-09-29T16:11:30.046Z'),
                  ctime: new Date('2022-09-29T16:11:30.046Z'),
                  birthtime: new Date('1970-01-01T00:00:00.000Z')
                },
                _contents: {
                  '0': 123,
                  '1': 10,
                  '2': 32,
                  '3': 32,
                  '4': 34,
                  '5': 64,
                  '6': 108,
                  '7': 111,
                  '8': 111,
                  '9': 112,
                  '10': 98,
                  '11': 97,
                  '12': 99,
                  '13': 107,
                  '14': 47,
                  '15': 99,
                  '16': 108,
                  '17': 105,
                  '18': 34,
                  '19': 58,
                  '20': 32,
                  '21': 123,
                  '22': 10,
                  '23': 32,
                  '24': 32,
                  '25': 32,
                  '26': 32,
                  '27': 34,
                  '28': 112,
                  '29': 97,
                  '30': 99,
                  '31': 107,
                  '32': 97,
                  '33': 103,
                  '34': 101,
                  '35': 77,
                  '36': 97,
                  '37': 110,
                  '38': 97,
                  '39': 103,
                  '40': 101,
                  '41': 114,
                  '42': 34,
                  '43': 58,
                  '44': 32,
                  '45': 34,
                  '46': 121,
                  '47': 97,
                  '48': 114,
                  '49': 110,
                  '50': 34,
                  '51': 44,
                  '52': 10,
                  '53': 32,
                  '54': 32,
                  '55': 32,
                  '56': 32,
                  '57': 34,
                  '58': 118,
                  '59': 101,
                  '60': 114,
                  '61': 115,
                  '62': 105,
                  '63': 111,
                  '64': 110,
                  '65': 34,
                  '66': 58,
                  '67': 32,
                  '68': 34,
                  '69': 52,
                  '70': 46,
                  '71': 49,
                  '72': 46,
                  '73': 51,
                  '74': 34,
                  '75': 10,
                  '76': 32,
                  '77': 32,
                  '78': 125,
                  '79': 10,
                  '80': 125,
                  '81': 10
                },
                history: [
                  '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/.yo-rc.json'
                ],
                _cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
                _isVinyl: true,
                _symlink: null
              }
            },
            Symbol(kCapture): false
          }
        },
        indent: 2,
        lodashPath: false,
        disableCache: false,
        disableCacheByFile: false,
        sorted: false,
        _cachedStore: {},
        existed: false
      },
      _queues: {
        initializing: {
          priorityName: 'initializing',
          queueName: 'initializing'
        },
        prompting: {
          priorityName: 'prompting',
          queueName: 'prompting'
        },
        configuring: {
          priorityName: 'configuring',
          queueName: 'configuring'
        },
        default: {
          priorityName: 'default',
          queueName: 'default'
        },
        writing: {
          priorityName: 'writing',
          queueName: 'writing'
        },
        transform: {
          priorityName: 'transform',
          queueName: 'transform'
        },
        conflicts: {
          priorityName: 'conflicts',
          queueName: 'conflicts'
        },
        install: {
          priorityName: 'install',
          queueName: 'install'
        },
        end: {
          priorityName: 'end',
          queueName: 'end'
        }
      },
      compose: undefined,
      conflicter: {
        adapter: {
          promptModule: function (questions, answers) {
    let ui;
    try {
      ui = new inquirer.ui.Prompt(promptModule.prompts, opt);
    } catch (error) {
      return Promise.reject(error);
    }
    const promise = ui.run(questions, answers);

    // Monkey patch the UI on the promise object so
    // that it remains publicly accessible.
    promise.ui = ui;

    return promise;
  },
          console: {
            log: function () { [native code] },
            warn: function () { [native code] },
            dir: function () { [native code] },
            time: function () { [native code] },
            timeEnd: function () { [native code] },
            timeLog: function () { [native code] },
            trace: function () { [native code] },
            assert: function () { [native code] },
            clear: function () { [native code] },
            count: function () { [native code] },
            countReset: function () { [native code] },
            group: function () { [native code] },
            groupEnd: function () { [native code] },
            table: function () { [native code] },
            debug: function () { [native code] },
            info: function () { [native code] },
            dirxml: function () { [native code] },
            error: function () { [native code] },
            groupCollapsed: function () { [native code] }
          },
          log: function log(message, ctx) {
    message = message || '';

    if (typeof ctx === 'object' && !Array.isArray(ctx)) {
      customConsole.error(formatter(message, ctx));
    } else {
      customConsole.error.apply(customConsole, arguments);
    }

    return log;
  },
          tracker: {
            _events: {
              error: function () {}
            },
            _eventsCount: 1,
            _maxListeners: undefined,
            useColor: function () {
  return colorEnabled != null ? colorEnabled : stream.isTTY
},
            enableColor: function () {
  colorEnabled = true
  this.gauge.setTheme({hasColor: colorEnabled, hasUnicode: unicodeEnabled})
},
            disableColor: function () {
  colorEnabled = false
  this.gauge.setTheme({hasColor: colorEnabled, hasUnicode: unicodeEnabled})
},
            level: 'error',
            gauge: {
              _status: {
                spun: 0,
                section: '',
                subsection: ''
              },
              _paused: false,
              _disabled: true,
              _showing: false,
              _onScreen: false,
              _needsRedraw: false,
              _hideCursor: true,
              _fixedFramerate: true,
              _lastUpdateAt: null,
              _updateInterval: 50,
              _themes: function (opts) {
    return themeset.getDefault(opts)
  },
              _theme: {
                hasColor: true
              },
              _writeTo: {
                connecting: false,
                _hadError: false,
                _parent: null,
                _host: null,
                _readableState: {
                  objectMode: false,
                  highWaterMark: 16384,
                  buffer: {
                    head: null,
                    tail: null,
                    length: 0
                  },
                  length: 0,
                  pipes: [],
                  flowing: null,
                  ended: false,
                  endEmitted: false,
                  reading: false,
                  constructed: true,
                  sync: true,
                  needReadable: false,
                  emittedReadable: false,
                  readableListening: false,
                  resumeScheduled: false,
                  errorEmitted: false,
                  emitClose: false,
                  autoDestroy: true,
                  destroyed: false,
                  errored: null,
                  closed: false,
                  closeEmitted: false,
                  defaultEncoding: 'utf8',
                  awaitDrainWriters: null,
                  multiAwaitDrain: false,
                  readingMore: false,
                  decoder: null,
                  encoding: null,
                  readable: false,
                  Symbol(kPaused): null
                },
                _events: {
                  end: function onReadableStreamEnd() {
  if (!this.allowHalfOpen) {
    this.write = writeAfterFIN;
  }
}
                },
                _eventsCount: 1,
                _maxListeners: undefined,
                _writableState: {
                  objectMode: false,
                  highWaterMark: 16384,
                  finalCalled: false,
                  needDrain: false,
                  ending: false,
                  ended: false,
                  finished: false,
                  destroyed: false,
                  decodeStrings: false,
                  defaultEncoding: 'utf8',
                  length: 0,
                  writing: false,
                  corked: 0,
                  sync: true,
                  bufferProcessing: false,
                  onwrite: function () { [native code] },
                  writecb: null,
                  writelen: 0,
                  afterWriteTickInfo: null,
                  buffered: [],
                  bufferedIndex: 0,
                  allBuffers: true,
                  allNoop: true,
                  pendingcb: 0,
                  constructed: true,
                  prefinished: false,
                  errorEmitted: false,
                  emitClose: false,
                  autoDestroy: true,
                  errored: null,
                  closed: false,
                  closeEmitted: false,
                  Symbol(kOnFinished): []
                },
                allowHalfOpen: false,
                _sockname: null,
                _pendingData: null,
                _pendingEncoding: '',
                server: null,
                _server: null,
                columns: 150,
                rows: 36,
                _type: 'tty',
                fd: 2,
                _isStdio: true,
                destroySoon: function destroy(err, cb) {
  const r = this._readableState;
  const w = this._writableState;
  // With duplex streams we use the writable side for state.
  const s = w || r;

  if ((w && w.destroyed) || (r && r.destroyed)) {
    if (typeof cb === 'function') {
      cb();
    }

    return this;
  }


  // We set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks
  checkError(err, w, r);

  if (w) {
    w.destroyed = true;
  }
  if (r) {
    r.destroyed = true;
  }

  // If still constructing then defer calling _destroy.
  if (!s.constructed) {
    this.once(kDestroy, function(er) {
      _destroy(this, aggregateTwoErrors(er, err), cb);
    });
  } else {
    _destroy(this, err, cb);
  }

  return this;
},
                _destroy: function dummyDestroy(err, cb) {
  cb(err);

  // We need to emit 'close' anyway so that the closing
  // of the stream is observable. We just make sure we
  // are not going to do it twice.
  // The 'close' event is needed so that finished and
  // pipeline work correctly.
  if (!this._writableState.emitClose) {
    process.nextTick(() => {
      this.emit('close');
    });
  }
},
                Symbol(async_id_symbol): 2,
                Symbol(kHandle): {
                  Symbol(owner_symbol): "[Circular]"
                },
                Symbol(kSetNoDelay): false,
                Symbol(lastWriteQueueSize): 0,
                Symbol(timeout): null,
                Symbol(kBuffer): null,
                Symbol(kBufferCb): null,
                Symbol(kBufferGen): null,
                Symbol(kCapture): false,
                Symbol(kBytesRead): 0,
                Symbol(kBytesWritten): 0
              },
              _tty: {
                connecting: false,
                _hadError: false,
                _parent: null,
                _host: null,
                _readableState: {
                  objectMode: false,
                  highWaterMark: 16384,
                  buffer: {
                    head: null,
                    tail: null,
                    length: 0
                  },
                  length: 0,
                  pipes: [],
                  flowing: null,
                  ended: false,
                  endEmitted: false,
                  reading: false,
                  constructed: true,
                  sync: true,
                  needReadable: false,
                  emittedReadable: false,
                  readableListening: false,
                  resumeScheduled: false,
                  errorEmitted: false,
                  emitClose: false,
                  autoDestroy: true,
                  destroyed: false,
                  errored: null,
                  closed: false,
                  closeEmitted: false,
                  defaultEncoding: 'utf8',
                  awaitDrainWriters: null,
                  multiAwaitDrain: false,
                  readingMore: false,
                  decoder: null,
                  encoding: null,
                  readable: false,
                  Symbol(kPaused): null
                },
                _events: {
                  end: function onReadableStreamEnd() {
  if (!this.allowHalfOpen) {
    this.write = writeAfterFIN;
  }
}
                },
                _eventsCount: 1,
                _maxListeners: undefined,
                _writableState: {
                  objectMode: false,
                  highWaterMark: 16384,
                  finalCalled: false,
                  needDrain: false,
                  ending: false,
                  ended: false,
                  finished: false,
                  destroyed: false,
                  decodeStrings: false,
                  defaultEncoding: 'utf8',
                  length: 0,
                  writing: false,
                  corked: 0,
                  sync: true,
                  bufferProcessing: false,
                  onwrite: function () { [native code] },
                  writecb: null,
                  writelen: 0,
                  afterWriteTickInfo: null,
                  buffered: [],
                  bufferedIndex: 0,
                  allBuffers: true,
                  allNoop: true,
                  pendingcb: 0,
                  constructed: true,
                  prefinished: false,
                  errorEmitted: false,
                  emitClose: false,
                  autoDestroy: true,
                  errored: null,
                  closed: false,
                  closeEmitted: false,
                  Symbol(kOnFinished): []
                },
                allowHalfOpen: false,
                _sockname: null,
                _pendingData: null,
                _pendingEncoding: '',
                server: null,
                _server: null,
                columns: 150,
                rows: 36,
                _type: 'tty',
                fd: 1,
                _isStdio: true,
                destroySoon: function destroy(err, cb) {
  const r = this._readableState;
  const w = this._writableState;
  // With duplex streams we use the writable side for state.
  const s = w || r;

  if ((w && w.destroyed) || (r && r.destroyed)) {
    if (typeof cb === 'function') {
      cb();
    }

    return this;
  }


  // We set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks
  checkError(err, w, r);

  if (w) {
    w.destroyed = true;
  }
  if (r) {
    r.destroyed = true;
  }

  // If still constructing then defer calling _destroy.
  if (!s.constructed) {
    this.once(kDestroy, function(er) {
      _destroy(this, aggregateTwoErrors(er, err), cb);
    });
  } else {
    _destroy(this, err, cb);
  }

  return this;
},
                _destroy: function dummyDestroy(err, cb) {
  cb(err);

  // We need to emit 'close' anyway so that the closing
  // of the stream is observable. We just make sure we
  // are not going to do it twice.
  // The 'close' event is needed so that finished and
  // pipeline work correctly.
  if (!this._writableState.emitClose) {
    process.nextTick(() => {
      this.emit('close');
    });
  }
},
                Symbol(async_id_symbol): 4,
                Symbol(kHandle): {
                  Symbol(owner_symbol): "[Circular]"
                },
                Symbol(kSetNoDelay): false,
                Symbol(lastWriteQueueSize): 0,
                Symbol(timeout): null,
                Symbol(kBuffer): null,
                Symbol(kBufferCb): null,
                Symbol(kBufferGen): null,
                Symbol(kCapture): false,
                Symbol(kBytesRead): 0,
                Symbol(kBytesWritten): 0
              },
              _gauge: {
                showing: false,
                theme: {
                  activityIndicator: function (values, theme, width) {
    if (values.spun == null) return
    return spin(theme, values.spun)
  },
                  progressbar: function (values, theme, width) {
    if (values.completed == null) return
    return progressBar(theme, width, values.completed)
  },
                  preProgressbar: '⸨',
                  postProgressbar: '⸩',
                  progressbarTheme: {
                    preComplete: '[107;97m',
                    complete: '#',
                    postComplete: '[0m',
                    preRemaining: '[100;90m',
                    remaining: '⠂',
                    postRemaining: '[0m'
                  },
                  activityIndicatorTheme: '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏',
                  preSubsection: '>'
                },
                width: 149,
                template: [
                  {
                    type: 'progressbar',
                    length: 20
                  },
                  {
                    type: 'activityIndicator',
                    kerning: 1,
                    length: 1
                  },
                  {
                    type: 'section',
                    default: ''
                  },
                  ':',
                  {
                    type: 'logline',
                    kerning: 1,
                    default: ''
                  }
                ]
              },
              _$$doRedraw: function () {
    return method.call(obj)
  },
              _$$handleSizeChange: function () {
    return method.call(obj)
  },
              _cleanupOnExit: true,
              _removeOnExit: null
            },
            tracker: {
              _events: {},
              _eventsCount: 0,
              _maxListeners: undefined,
              id: 1,
              name: undefined,
              parentGroup: null,
              trackers: [],
              completion: {},
              weight: {},
              totalWeight: 0,
              finished: false,
              bubbleChange: function (name, completed, tracker) {
    trackerGroup.completion[tracker.id] = completed
    if (trackerGroup.finished) {
      return
    }
    trackerGroup.emit('change', name || trackerGroup.name, trackerGroup.completed(), trackerGroup)
  },
              Symbol(kCapture): false
            },
            progressEnabled: false,
            enableUnicode: function () {
  unicodeEnabled = true
  this.gauge.setTheme({hasColor: this.useColor(), hasUnicode: unicodeEnabled})
},
            disableUnicode: function () {
  unicodeEnabled = false
  this.gauge.setTheme({hasColor: this.useColor(), hasUnicode: unicodeEnabled})
},
            setGaugeThemeset: function (themes) {
  this.gauge.setThemeset(themes)
},
            setGaugeTemplate: function (template) {
  this.gauge.setTemplate(template)
},
            enableProgress: function () {
  if (this.progressEnabled) {
    return
  }

  this.progressEnabled = true
  this.tracker.on('change', this.showProgress)
  if (this._paused) {
    return
  }

  this.gauge.enable()
},
            disableProgress: function () {
  if (!this.progressEnabled) {
    return
  }
  this.progressEnabled = false
  this.tracker.removeListener('change', this.showProgress)
  this.gauge.disable()
},
            newGroup: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
            newItem: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
            newStream: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
            clearProgress: function (cb) {
  if (!this.progressEnabled) {
    return cb && process.nextTick(cb)
  }

  this.gauge.hide(cb)
},
            showProgress: function () { [native code] },
            pause: function () {
  this._paused = true
  if (this.progressEnabled) {
    this.gauge.disable()
  }
},
            resume: function () {
  if (!this._paused) {
    return
  }

  this._paused = false

  var b = this._buffer
  this._buffer = []
  b.forEach(function (m) {
    this.emitLog(m)
  }, this)
  if (this.progressEnabled) {
    this.gauge.enable()
  }
},
            _buffer: [],
            record: [],
            maxRecordSize: 10000,
            log: function () { [native code] },
            emitLog: function (m) {
  if (this._paused) {
    this._buffer.push(m)
    return
  }
  if (this.progressEnabled) {
    this.gauge.pulse(m.prefix)
  }

  var l = this.levels[m.level]
  if (l === undefined) {
    return
  }

  if (l < this.levels[this.level]) {
    return
  }

  if (l > 0 && !isFinite(l)) {
    return
  }

  // If 'disp' is null or undefined, use the lvl as a default
  // Allows: '', 0 as valid disp
  var disp = log.disp[m.level] != null ? log.disp[m.level] : m.level
  this.clearProgress()
  m.message.split(/\r?\n/).forEach(function (line) {
    if (this.heading) {
      this.write(this.heading, this.headingStyle)
      this.write(' ')
    }
    this.write(disp, log.style[m.level])
    var p = m.prefix || ''
    if (p) {
      this.write(' ')
    }

    this.write(p, this.prefixStyle)
    this.write(' ' + line + '\n')
  }, this)
  this.showProgress()
},
            _format: function (msg, style) {
  if (!stream) {
    return
  }

  var output = ''
  if (this.useColor()) {
    style = style || {}
    var settings = []
    if (style.fg) {
      settings.push(style.fg)
    }

    if (style.bg) {
      settings.push('bg' + style.bg[0].toUpperCase() + style.bg.slice(1))
    }

    if (style.bold) {
      settings.push('bold')
    }

    if (style.underline) {
      settings.push('underline')
    }

    if (style.inverse) {
      settings.push('inverse')
    }

    if (settings.length) {
      output += consoleControl.color(settings)
    }

    if (style.beep) {
      output += consoleControl.beep()
    }
  }
  output += msg
  if (this.useColor()) {
    output += consoleControl.color('reset')
  }

  return output
},
            write: function (msg, style) {
  if (!stream) {
    return
  }

  stream.write(this._format(msg, style))
},
            addLevel: function (lvl, n, style, disp) {
  // If 'disp' is null or undefined, use the lvl as a default
  if (disp == null) {
    disp = lvl
  }

  this.levels[lvl] = n
  this.style[lvl] = style
  if (!this[lvl]) {
    this[lvl] = function () {
      var a = new Array(arguments.length + 1)
      a[0] = lvl
      for (var i = 0; i < arguments.length; i++) {
        a[i + 1] = arguments[i]
      }

      return this.log.apply(this, a)
    }.bind(this)
  }
  this.disp[lvl] = disp
},
            prefixStyle: {
              fg: 'magenta'
            },
            headingStyle: {
              fg: 'white',
              bg: 'black'
            },
            style: {
              silly: {
                inverse: true
              },
              verbose: {
                fg: 'blue',
                bg: 'black'
              },
              info: {
                fg: 'green'
              },
              timing: {
                fg: 'green',
                bg: 'black'
              },
              http: {
                fg: 'green',
                bg: 'black'
              },
              notice: {
                fg: 'blue',
                bg: 'black'
              },
              warn: {
                fg: 'black',
                bg: 'yellow'
              },
              error: {
                fg: 'red',
                bg: 'black'
              },
              silent: undefined
            },
            levels: {
              silly: -Infinity,
              verbose: 1000,
              info: 2000,
              timing: 2500,
              http: 3000,
              notice: 3500,
              warn: 4000,
              error: 5000,
              silent: Infinity
            },
            disp: {
              silly: 'sill',
              verbose: 'verb',
              info: 'info',
              timing: 'timing',
              http: 'http',
              notice: 'notice',
              warn: 'WARN',
              error: 'ERR!',
              silent: 'silent'
            },
            silly: function () { [native code] },
            verbose: function () { [native code] },
            info: function () { [native code] },
            timing: function () { [native code] },
            http: function () { [native code] },
            notice: function () { [native code] },
            warn: function () { [native code] },
            error: function () { [native code] },
            silent: function () { [native code] },
            Symbol(kCapture): false
          }
        },
        force: undefined,
        bail: undefined,
        ignoreWhitespace: undefined,
        regenerate: undefined,
        dryRun: undefined,
        cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
        diffOptions: undefined,
        queue: {
          queueNames: [
            'log',
            'conflicts',
            'default'
          ],
          __queues__: {
            log: {
              __queue__: []
            },
            conflicts: {
              __queue__: []
            },
            default: {
              __queue__: []
            }
          },
          runOnAdd: false
        },
        generationStatus: {}
      },
      artifactInfo: {
        type: 'datasource',
        rootDir: 'src',
        outDir: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app/src/datasources',
        name: 'localmodels',
        relPath: 'src/datasources',
        sharedData: {},
        forwardErrorToEnvironment: false,
        skipLocalCache: true,
        _: [],
        c: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
        y: true,
        initialGenerator: true,
        env: "[Circular]",
        resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/index.js',
        namespace: 'loopback4:datasource',
        'skip-cache': false,
        'skip-install': false,
        'force-install': false,
        'ask-answered': false,
        config: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
        yes: true,
        connector: 'mysql',
        url: '',
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'asdf',
        database: 'quiz',
        settings: {
          sharedData: {},
          forwardErrorToEnvironment: false,
          skipLocalCache: true,
          _: [],
          c: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
          y: true,
          initialGenerator: true,
          env: "[Circular]",
          resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/index.js',
          namespace: 'loopback4:datasource',
          'skip-cache': false,
          'skip-install': false,
          'force-install': false,
          'ask-answered': false,
          config: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
          yes: true,
          name: 'localmodels',
          connector: 'mysql',
          url: '',
          host: 'localhost',
          port: 3306,
          user: 'root',
          password: 'asdf',
          database: 'quiz'
        },
        className: 'Localmodels',
        fileName: 'localmodels',
        outFile: 'localmodels.datasource.ts'
      },
      connectorChoices: [
        {
          name: 'In-memory db [90m(supported by StrongLoop)[39m',
          value: 'memory'
        },
        {
          name: 'In-memory key-value connector [90m(supported by StrongLoop)[39m',
          value: 'kv-memory'
        },
        {
          name: 'IBM Object Storage [90m(supported by StrongLoop)[39m',
          value: 'ibm-object-storage'
        },
        {
          name: 'IBM Db2 (for Linux, Unix, Windows) [90m(supported by StrongLoop)[39m',
          value: 'db2'
        },
        {
          name: 'IBM i (Db2 for i) [90m(supported by StrongLoop)[39m',
          value: 'ibmi'
        },
        {
          name: 'IBM Db2 for z/OS [90m(supported by StrongLoop)[39m',
          value: 'db2z'
        },
        {
          name: 'IBM DashDB [90m(supported by StrongLoop)[39m',
          value: 'dashdb'
        },
        {
          name: 'IBM MQ Light [90m(supported by StrongLoop)[39m',
          value: 'mqlight'
        },
        {
          name: 'IBM Cloudant DB [90m(supported by StrongLoop)[39m',
          value: 'cloudant'
        },
        {
          name: 'Couchdb 2.x [90m(supported by StrongLoop)[39m',
          value: 'couchdb2'
        },
        {
          name: 'IBM WebSphere eXtreme Scale key-value connector [90m(supported by StrongLoop)[39m',
          value: 'kv-extreme-scale'
        },
        {
          name: 'Cassandra [90m(supported by StrongLoop)[39m',
          value: 'cassandra'
        },
        {
          name: 'gRPC [90m(supported by StrongLoop)[39m',
          value: 'grpc'
        },
        {
          name: 'Redis key-value connector [90m(supported by StrongLoop)[39m',
          value: 'kv-redis'
        },
        {
          name: 'MongoDB [90m(supported by StrongLoop)[39m',
          value: 'mongodb'
        },
        {
          name: 'MySQL [90m(supported by StrongLoop)[39m',
          value: 'mysql'
        },
        {
          name: 'PostgreSQL [90m(supported by StrongLoop)[39m',
          value: 'postgresql'
        },
        {
          name: 'Oracle [90m(supported by StrongLoop)[39m',
          value: 'oracle'
        },
        {
          name: 'Microsoft SQL [90m(supported by StrongLoop)[39m',
          value: 'mssql'
        },
        {
          name: 'OpenAPI [90m(supported by StrongLoop)[39m',
          value: 'openapi'
        },
        {
          name: 'REST services [90m(supported by StrongLoop)[39m',
          value: 'rest'
        },
        {
          name: 'SOAP webservices [90m(supported by StrongLoop)[39m',
          value: 'soap'
        },
        {
          name: 'Couchbase [90m(provided by community)[39m',
          value: 'couchbase'
        },
        {
          name: 'Neo4j [90m(provided by community)[39m',
          value: 'neo4j'
        },
        {
          name: 'Twilio Connector [90m(provided by community)[39m',
          value: 'twilio'
        },
        {
          name: 'Kafka [90m(provided by community)[39m',
          value: 'kafka'
        },
        {
          name: 'SAP HANA [90m(provided by community)[39m',
          value: 'saphana'
        },
        {
          name: 'ElasticSearch [90m(provided by community)[39m',
          value: 'es'
        },
        {
          name: 'z/OS Connect Enterprise Edition [90m(supported by StrongLoop)[39m',
          value: 'zosconnectee'
        },
        'other'
      ],
      classNameSeparator: ', ',
      _environmentOptions: {
        sharedData: {},
        forwardErrorToEnvironment: false,
        skipLocalCache: true,
        env: "[Circular]",
        resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/index.js',
        namespace: 'loopback4:datasource'
      },
      _running: true,
      _taskStatus: {
        cancelled: false,
        timestamp: new Date('2022-09-29T17:59:09.605Z')
      },
      runningState: {
        namespace: 'loopback4:datasource',
        queueName: 'default',
        methodName: 'scaffold'
      },
      Symbol(kCapture): false
    },
    conflicter: {
      adapter: {
        promptModule: function (questions, answers) {
    let ui;
    try {
      ui = new inquirer.ui.Prompt(promptModule.prompts, opt);
    } catch (error) {
      return Promise.reject(error);
    }
    const promise = ui.run(questions, answers);

    // Monkey patch the UI on the promise object so
    // that it remains publicly accessible.
    promise.ui = ui;

    return promise;
  },
        console: {
          log: function () { [native code] },
          warn: function () { [native code] },
          dir: function () { [native code] },
          time: function () { [native code] },
          timeEnd: function () { [native code] },
          timeLog: function () { [native code] },
          trace: function () { [native code] },
          assert: function () { [native code] },
          clear: function () { [native code] },
          count: function () { [native code] },
          countReset: function () { [native code] },
          group: function () { [native code] },
          groupEnd: function () { [native code] },
          table: function () { [native code] },
          debug: function () { [native code] },
          info: function () { [native code] },
          dirxml: function () { [native code] },
          error: function () { [native code] },
          groupCollapsed: function () { [native code] }
        },
        log: function log(message, ctx) {
    message = message || '';

    if (typeof ctx === 'object' && !Array.isArray(ctx)) {
      customConsole.error(formatter(message, ctx));
    } else {
      customConsole.error.apply(customConsole, arguments);
    }

    return log;
  },
        tracker: {
          _events: {
            error: function () {}
          },
          _eventsCount: 1,
          _maxListeners: undefined,
          useColor: function () {
  return colorEnabled != null ? colorEnabled : stream.isTTY
},
          enableColor: function () {
  colorEnabled = true
  this.gauge.setTheme({hasColor: colorEnabled, hasUnicode: unicodeEnabled})
},
          disableColor: function () {
  colorEnabled = false
  this.gauge.setTheme({hasColor: colorEnabled, hasUnicode: unicodeEnabled})
},
          level: 'error',
          gauge: {
            _status: {
              spun: 0,
              section: '',
              subsection: ''
            },
            _paused: false,
            _disabled: true,
            _showing: false,
            _onScreen: false,
            _needsRedraw: false,
            _hideCursor: true,
            _fixedFramerate: true,
            _lastUpdateAt: null,
            _updateInterval: 50,
            _themes: function (opts) {
    return themeset.getDefault(opts)
  },
            _theme: {
              hasColor: true
            },
            _writeTo: {
              connecting: false,
              _hadError: false,
              _parent: null,
              _host: null,
              _readableState: {
                objectMode: false,
                highWaterMark: 16384,
                buffer: {
                  head: null,
                  tail: null,
                  length: 0
                },
                length: 0,
                pipes: [],
                flowing: null,
                ended: false,
                endEmitted: false,
                reading: false,
                constructed: true,
                sync: true,
                needReadable: false,
                emittedReadable: false,
                readableListening: false,
                resumeScheduled: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: true,
                destroyed: false,
                errored: null,
                closed: false,
                closeEmitted: false,
                defaultEncoding: 'utf8',
                awaitDrainWriters: null,
                multiAwaitDrain: false,
                readingMore: false,
                decoder: null,
                encoding: null,
                readable: false,
                Symbol(kPaused): null
              },
              _events: {
                end: function onReadableStreamEnd() {
  if (!this.allowHalfOpen) {
    this.write = writeAfterFIN;
  }
}
              },
              _eventsCount: 1,
              _maxListeners: undefined,
              _writableState: {
                objectMode: false,
                highWaterMark: 16384,
                finalCalled: false,
                needDrain: false,
                ending: false,
                ended: false,
                finished: false,
                destroyed: false,
                decodeStrings: false,
                defaultEncoding: 'utf8',
                length: 0,
                writing: false,
                corked: 0,
                sync: true,
                bufferProcessing: false,
                onwrite: function () { [native code] },
                writecb: null,
                writelen: 0,
                afterWriteTickInfo: null,
                buffered: [],
                bufferedIndex: 0,
                allBuffers: true,
                allNoop: true,
                pendingcb: 0,
                constructed: true,
                prefinished: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: true,
                errored: null,
                closed: false,
                closeEmitted: false,
                Symbol(kOnFinished): []
              },
              allowHalfOpen: false,
              _sockname: null,
              _pendingData: null,
              _pendingEncoding: '',
              server: null,
              _server: null,
              columns: 150,
              rows: 36,
              _type: 'tty',
              fd: 2,
              _isStdio: true,
              destroySoon: function destroy(err, cb) {
  const r = this._readableState;
  const w = this._writableState;
  // With duplex streams we use the writable side for state.
  const s = w || r;

  if ((w && w.destroyed) || (r && r.destroyed)) {
    if (typeof cb === 'function') {
      cb();
    }

    return this;
  }


  // We set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks
  checkError(err, w, r);

  if (w) {
    w.destroyed = true;
  }
  if (r) {
    r.destroyed = true;
  }

  // If still constructing then defer calling _destroy.
  if (!s.constructed) {
    this.once(kDestroy, function(er) {
      _destroy(this, aggregateTwoErrors(er, err), cb);
    });
  } else {
    _destroy(this, err, cb);
  }

  return this;
},
              _destroy: function dummyDestroy(err, cb) {
  cb(err);

  // We need to emit 'close' anyway so that the closing
  // of the stream is observable. We just make sure we
  // are not going to do it twice.
  // The 'close' event is needed so that finished and
  // pipeline work correctly.
  if (!this._writableState.emitClose) {
    process.nextTick(() => {
      this.emit('close');
    });
  }
},
              Symbol(async_id_symbol): 2,
              Symbol(kHandle): {
                Symbol(owner_symbol): "[Circular]"
              },
              Symbol(kSetNoDelay): false,
              Symbol(lastWriteQueueSize): 0,
              Symbol(timeout): null,
              Symbol(kBuffer): null,
              Symbol(kBufferCb): null,
              Symbol(kBufferGen): null,
              Symbol(kCapture): false,
              Symbol(kBytesRead): 0,
              Symbol(kBytesWritten): 0
            },
            _tty: {
              connecting: false,
              _hadError: false,
              _parent: null,
              _host: null,
              _readableState: {
                objectMode: false,
                highWaterMark: 16384,
                buffer: {
                  head: null,
                  tail: null,
                  length: 0
                },
                length: 0,
                pipes: [],
                flowing: null,
                ended: false,
                endEmitted: false,
                reading: false,
                constructed: true,
                sync: true,
                needReadable: false,
                emittedReadable: false,
                readableListening: false,
                resumeScheduled: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: true,
                destroyed: false,
                errored: null,
                closed: false,
                closeEmitted: false,
                defaultEncoding: 'utf8',
                awaitDrainWriters: null,
                multiAwaitDrain: false,
                readingMore: false,
                decoder: null,
                encoding: null,
                readable: false,
                Symbol(kPaused): null
              },
              _events: {
                end: function onReadableStreamEnd() {
  if (!this.allowHalfOpen) {
    this.write = writeAfterFIN;
  }
}
              },
              _eventsCount: 1,
              _maxListeners: undefined,
              _writableState: {
                objectMode: false,
                highWaterMark: 16384,
                finalCalled: false,
                needDrain: false,
                ending: false,
                ended: false,
                finished: false,
                destroyed: false,
                decodeStrings: false,
                defaultEncoding: 'utf8',
                length: 0,
                writing: false,
                corked: 0,
                sync: true,
                bufferProcessing: false,
                onwrite: function () { [native code] },
                writecb: null,
                writelen: 0,
                afterWriteTickInfo: null,
                buffered: [],
                bufferedIndex: 0,
                allBuffers: true,
                allNoop: true,
                pendingcb: 0,
                constructed: true,
                prefinished: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: true,
                errored: null,
                closed: false,
                closeEmitted: false,
                Symbol(kOnFinished): []
              },
              allowHalfOpen: false,
              _sockname: null,
              _pendingData: null,
              _pendingEncoding: '',
              server: null,
              _server: null,
              columns: 150,
              rows: 36,
              _type: 'tty',
              fd: 1,
              _isStdio: true,
              destroySoon: function destroy(err, cb) {
  const r = this._readableState;
  const w = this._writableState;
  // With duplex streams we use the writable side for state.
  const s = w || r;

  if ((w && w.destroyed) || (r && r.destroyed)) {
    if (typeof cb === 'function') {
      cb();
    }

    return this;
  }


  // We set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks
  checkError(err, w, r);

  if (w) {
    w.destroyed = true;
  }
  if (r) {
    r.destroyed = true;
  }

  // If still constructing then defer calling _destroy.
  if (!s.constructed) {
    this.once(kDestroy, function(er) {
      _destroy(this, aggregateTwoErrors(er, err), cb);
    });
  } else {
    _destroy(this, err, cb);
  }

  return this;
},
              _destroy: function dummyDestroy(err, cb) {
  cb(err);

  // We need to emit 'close' anyway so that the closing
  // of the stream is observable. We just make sure we
  // are not going to do it twice.
  // The 'close' event is needed so that finished and
  // pipeline work correctly.
  if (!this._writableState.emitClose) {
    process.nextTick(() => {
      this.emit('close');
    });
  }
},
              Symbol(async_id_symbol): 4,
              Symbol(kHandle): {
                Symbol(owner_symbol): "[Circular]"
              },
              Symbol(kSetNoDelay): false,
              Symbol(lastWriteQueueSize): 0,
              Symbol(timeout): null,
              Symbol(kBuffer): null,
              Symbol(kBufferCb): null,
              Symbol(kBufferGen): null,
              Symbol(kCapture): false,
              Symbol(kBytesRead): 0,
              Symbol(kBytesWritten): 0
            },
            _gauge: {
              showing: false,
              theme: {
                activityIndicator: function (values, theme, width) {
    if (values.spun == null) return
    return spin(theme, values.spun)
  },
                progressbar: function (values, theme, width) {
    if (values.completed == null) return
    return progressBar(theme, width, values.completed)
  },
                preProgressbar: '⸨',
                postProgressbar: '⸩',
                progressbarTheme: {
                  preComplete: '[107;97m',
                  complete: '#',
                  postComplete: '[0m',
                  preRemaining: '[100;90m',
                  remaining: '⠂',
                  postRemaining: '[0m'
                },
                activityIndicatorTheme: '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏',
                preSubsection: '>'
              },
              width: 149,
              template: [
                {
                  type: 'progressbar',
                  length: 20
                },
                {
                  type: 'activityIndicator',
                  kerning: 1,
                  length: 1
                },
                {
                  type: 'section',
                  default: ''
                },
                ':',
                {
                  type: 'logline',
                  kerning: 1,
                  default: ''
                }
              ]
            },
            _$$doRedraw: function () {
    return method.call(obj)
  },
            _$$handleSizeChange: function () {
    return method.call(obj)
  },
            _cleanupOnExit: true,
            _removeOnExit: null
          },
          tracker: {
            _events: {},
            _eventsCount: 0,
            _maxListeners: undefined,
            id: 1,
            name: undefined,
            parentGroup: null,
            trackers: [],
            completion: {},
            weight: {},
            totalWeight: 0,
            finished: false,
            bubbleChange: function (name, completed, tracker) {
    trackerGroup.completion[tracker.id] = completed
    if (trackerGroup.finished) {
      return
    }
    trackerGroup.emit('change', name || trackerGroup.name, trackerGroup.completed(), trackerGroup)
  },
            Symbol(kCapture): false
          },
          progressEnabled: false,
          enableUnicode: function () {
  unicodeEnabled = true
  this.gauge.setTheme({hasColor: this.useColor(), hasUnicode: unicodeEnabled})
},
          disableUnicode: function () {
  unicodeEnabled = false
  this.gauge.setTheme({hasColor: this.useColor(), hasUnicode: unicodeEnabled})
},
          setGaugeThemeset: function (themes) {
  this.gauge.setThemeset(themes)
},
          setGaugeTemplate: function (template) {
  this.gauge.setTemplate(template)
},
          enableProgress: function () {
  if (this.progressEnabled) {
    return
  }

  this.progressEnabled = true
  this.tracker.on('change', this.showProgress)
  if (this._paused) {
    return
  }

  this.gauge.enable()
},
          disableProgress: function () {
  if (!this.progressEnabled) {
    return
  }
  this.progressEnabled = false
  this.tracker.removeListener('change', this.showProgress)
  this.gauge.disable()
},
          newGroup: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
          newItem: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
          newStream: function () {
    return mixinLog(this.tracker[C].apply(this.tracker, arguments))
  },
          clearProgress: function (cb) {
  if (!this.progressEnabled) {
    return cb && process.nextTick(cb)
  }

  this.gauge.hide(cb)
},
          showProgress: function () { [native code] },
          pause: function () {
  this._paused = true
  if (this.progressEnabled) {
    this.gauge.disable()
  }
},
          resume: function () {
  if (!this._paused) {
    return
  }

  this._paused = false

  var b = this._buffer
  this._buffer = []
  b.forEach(function (m) {
    this.emitLog(m)
  }, this)
  if (this.progressEnabled) {
    this.gauge.enable()
  }
},
          _buffer: [],
          record: [],
          maxRecordSize: 10000,
          log: function () { [native code] },
          emitLog: function (m) {
  if (this._paused) {
    this._buffer.push(m)
    return
  }
  if (this.progressEnabled) {
    this.gauge.pulse(m.prefix)
  }

  var l = this.levels[m.level]
  if (l === undefined) {
    return
  }

  if (l < this.levels[this.level]) {
    return
  }

  if (l > 0 && !isFinite(l)) {
    return
  }

  // If 'disp' is null or undefined, use the lvl as a default
  // Allows: '', 0 as valid disp
  var disp = log.disp[m.level] != null ? log.disp[m.level] : m.level
  this.clearProgress()
  m.message.split(/\r?\n/).forEach(function (line) {
    if (this.heading) {
      this.write(this.heading, this.headingStyle)
      this.write(' ')
    }
    this.write(disp, log.style[m.level])
    var p = m.prefix || ''
    if (p) {
      this.write(' ')
    }

    this.write(p, this.prefixStyle)
    this.write(' ' + line + '\n')
  }, this)
  this.showProgress()
},
          _format: function (msg, style) {
  if (!stream) {
    return
  }

  var output = ''
  if (this.useColor()) {
    style = style || {}
    var settings = []
    if (style.fg) {
      settings.push(style.fg)
    }

    if (style.bg) {
      settings.push('bg' + style.bg[0].toUpperCase() + style.bg.slice(1))
    }

    if (style.bold) {
      settings.push('bold')
    }

    if (style.underline) {
      settings.push('underline')
    }

    if (style.inverse) {
      settings.push('inverse')
    }

    if (settings.length) {
      output += consoleControl.color(settings)
    }

    if (style.beep) {
      output += consoleControl.beep()
    }
  }
  output += msg
  if (this.useColor()) {
    output += consoleControl.color('reset')
  }

  return output
},
          write: function (msg, style) {
  if (!stream) {
    return
  }

  stream.write(this._format(msg, style))
},
          addLevel: function (lvl, n, style, disp) {
  // If 'disp' is null or undefined, use the lvl as a default
  if (disp == null) {
    disp = lvl
  }

  this.levels[lvl] = n
  this.style[lvl] = style
  if (!this[lvl]) {
    this[lvl] = function () {
      var a = new Array(arguments.length + 1)
      a[0] = lvl
      for (var i = 0; i < arguments.length; i++) {
        a[i + 1] = arguments[i]
      }

      return this.log.apply(this, a)
    }.bind(this)
  }
  this.disp[lvl] = disp
},
          prefixStyle: {
            fg: 'magenta'
          },
          headingStyle: {
            fg: 'white',
            bg: 'black'
          },
          style: {
            silly: {
              inverse: true
            },
            verbose: {
              fg: 'blue',
              bg: 'black'
            },
            info: {
              fg: 'green'
            },
            timing: {
              fg: 'green',
              bg: 'black'
            },
            http: {
              fg: 'green',
              bg: 'black'
            },
            notice: {
              fg: 'blue',
              bg: 'black'
            },
            warn: {
              fg: 'black',
              bg: 'yellow'
            },
            error: {
              fg: 'red',
              bg: 'black'
            },
            silent: undefined
          },
          levels: {
            silly: -Infinity,
            verbose: 1000,
            info: 2000,
            timing: 2500,
            http: 3000,
            notice: 3500,
            warn: 4000,
            error: 5000,
            silent: Infinity
          },
          disp: {
            silly: 'sill',
            verbose: 'verb',
            info: 'info',
            timing: 'timing',
            http: 'http',
            notice: 'notice',
            warn: 'WARN',
            error: 'ERR!',
            silent: 'silent'
          },
          silly: function () { [native code] },
          verbose: function () { [native code] },
          info: function () { [native code] },
          timing: function () { [native code] },
          http: function () { [native code] },
          notice: function () { [native code] },
          warn: function () { [native code] },
          error: function () { [native code] },
          silent: function () { [native code] },
          Symbol(kCapture): false
        }
      },
      force: undefined,
      bail: undefined,
      ignoreWhitespace: undefined,
      regenerate: undefined,
      dryRun: undefined,
      cwd: '/media/aaqilniz/data/working-space/freelancing/patrick/test-app',
      diffOptions: undefined,
      queue: {
        queueNames: [
          'log',
          'conflicts',
          'default'
        ],
        __queues__: {
          log: {
            __queue__: []
          },
          conflicts: {
            __queue__: []
          },
          default: {
            __queue__: []
          }
        },
        runOnAdd: false
      }
    },
    Symbol(kCapture): false
  },
  resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@loopback/cli/generators/datasource/index.js',
  namespace: 'loopback4:datasource',
  'skip-cache': false,
  'skip-install': false,
  'force-install': false,
  'ask-answered': false,
  config: '{"name":"localmodels","connector":"mysql","url":"","host":"localhost","port":"3306","user":"root","password":"asdf","database":"quiz"}',
  yes: true,
  url: '',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'asdf',
  database: 'quiz'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LocalmodelsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'localmodels';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.localmodels', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

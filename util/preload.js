const { NativeModule, mainModule, mainModule: { filename } } = process;

{ /* Loader */

    const module = mainModule;

    const base = module.base =
        `file://${filename.replace(/[^/]*([#?].*)?$/, '')}`;

    const Loader = NativeModule.require('internal/loader/Loader');

    const AsyncModule = 'async module'; // [Symbol.for('async module')];

    class NodeLoader extends Loader {
        async import(specifier, parentURL = this.base) {
            const job = await this.getModuleJob(specifier, parentURL);
            const module = await (job[AsyncModule] || (job[AsyncModule] = job.run()));
            return module.namespace();
        }
    }

    const loader = module.loader = new NodeLoader(base);

    module.import = (specifier, referrer) =>
        loader.import(specifier, referrer);
}
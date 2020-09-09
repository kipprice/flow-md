export const mode: string;
export const entry: string;
export namespace output {
    const path: string;
    const publicPath: string;
    const filename: string;
    const library: string;
    const libraryTarget: string;
    const umdNamedDefine: boolean;
}
export namespace module {
    const rules: ({
        test: RegExp;
        exclude: RegExp;
        use: {
            loader: string;
        };
    } | {
        test: RegExp;
        use: string[];
        exclude?: undefined;
    })[];
}
export namespace resolve {
    const extensions: string[];
    const alias: {
        react: string;
        'react-dom': string;
        'react-redux': string;
    };
}
export const externals: {
    react: {
        commonjs: string;
        commonjs2: string;
        amd: string;
        root: string;
    };
    "react-dom": {
        commonjs: string;
        commonjs2: string;
        amd: string;
        root: string;
    };
};
export const plugins: never[];

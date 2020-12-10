卧龙寺UID: 2558457966
主文件 src
一、hooks
useState、useEffect、useCallbck、useMemo、useRef、useContext、useReducer、
二、promise
异步编程解决方案
三、es6、es7、es8、es9、es10、es11

四、webpack配置 react-cli
执行 npm run eject 将封装隐藏的webpack配置弹出(不可逆操作);
1、使用less less-load 项目中配置有sass。
2、是使用 uglifyjs-webpack-plugin 去掉 console.log
3、解决 引入不同模块的 css 命名冲突 开启 modules: true, 通过import styles from './index.scss'引入
4、配置 import 引入路径问题，代替./../;添加  '@':path.resolve(__dirname,'../src'),
alias: {
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        'react-native': 'react-native-web',
        // Allows for better profiling with ReactDevTools
        ...(isEnvProductionProfile && {
          'react-dom$': 'react-dom/profiling',
          'scheduler/tracing': 'scheduler/tracing-profiling',
        }),
        ...(modules.webpackAliases || {}),
        '@':path.resolve(__dirname,'../src'),
      },
  添加vscode 提示：在settings.json 中添加   
  "path-intellisense.mappings": {
    "@": "${workspaceRoot}/src"
  }
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry : './src/index.js',//入口
	/*entry : {
		index : './src/index.js',
		comp : './src/component.js'
	},*/
	output : {
		path : 'build',//输出放置的路径
		filename : 'bundle.js'//输出到的文件名，可以是多个如果是多个的话用一个变量来表示例如[name].js，如果是一个的话就直接文件名.js
		//filename : '[name].js'//因为上面的entry是多个入口，所以下面的filename应该是多个		
	},
	module : {
		//noParse : [] 常用的可以去webpack.github.io官网查看
		loaders : [
			{
				test:/\.js$/,
				loader : 'babel-loader'//多个需要用loaders,也用数组表示['babel-loader','babel']
				//exclude : /node_modules/ //不需要编译的
			}
		]
	},
	resolve : {//用来提升加载速度，import的文件可以只写前缀不写后缀,要看一下
		extension : [".js",".jsx",".css"]
	},
	devServer : {//用来替换package.json中的dev:'webpack-dev-server'配置
		progress : true,
		contentBase : 'build',
		stats : {colors : true},
		inline : true,//实现热替换
		publicPath : '/static/'//在output的path配置下面新建一个文件夹，然后文件放到这个文件夹下
	},
	devtool : 'cheap-module-source-map',//在soure里面展示源码，可以调试
	plugins : [
		new HtmlWebpackPlugin({
				title : "zhaoxin-react",
				tmplate : "./src/index.html"
			})
	]
}
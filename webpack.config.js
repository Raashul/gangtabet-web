loaders: [
	{
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loaders: [ 'react-hot', 'babel?presets[]=es2015&presets[]=react' ]
	}
];

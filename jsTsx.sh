# for file in ./src/**/*.js
for file in $(find `pwd` -name "*.js");
do
	mv "$file" "${file%.js}.tsx"
done

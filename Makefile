THEME_NAME = wp-theme-boilerplate
OUTPUT_ZIP = $(THEME_NAME).zip

# Rule to create the zip
all: build zip

build:
	@echo "Building theme..."
	npm install
	npm run build
	@echo "Theme built!"

zip:
	@echo "Zipping theme..."
	zip -r $(OUTPUT_ZIP) . \
		--exclude=node_modules/\* \
		--exclude=.git/\* \
		--exclude=package-lock.json \
		--exclude=bundler/config.js \
	@echo "Theme zipped as $(OUTPUT_ZIP)"

clean:
	@echo "Cleaning up..."
	rm -f $(OUTPUT_ZIP)
	@echo "Done!"
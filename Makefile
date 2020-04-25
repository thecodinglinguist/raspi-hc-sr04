IP?=192.168.0.137
ROOT?=autowater/lib/raspi-sonar
SHELL=/bin/bash -eo pipefail

sync:
	@rsync . pi@${IP}:~/${ROOT} -r --verbose --exclude=node_modules --exclude=.git

install:
	ssh pi@${IP} " \
		cd ${ROOT}; \
			npm install"

buildr:
	ssh pi@${IP} " \
		 cd ${ROOT}; \
		 npm run build"

gulp:
	ssh pi@${IP} " \
		 cd ${ROOT}; \
		 ./node_modules/gulp/bin/gulp.js"

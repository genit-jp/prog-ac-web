#!/bin/sh
cd `dirname $0`

yarn generate

aws s3 sync --exact-timestamps --delete ./dist/ s3://www.prog-ac.jp/

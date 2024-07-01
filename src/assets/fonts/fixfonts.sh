#!/bin/bash
# fixfonts.sh

folder="$1"

if [[ -d "$folder" && ! -z "$folder" ]]; then
  pushd "$folder" || exit 1
  for file in *.ttf; do
    normalized="${file//-/_}"
    normalized=$(echo "$normalized" | tr '[:upper:]' '[:lower:]')
    if [[ "$file" != "$normalized" ]]; then
      mv "$file" "$normalized"
    fi
  done
  popd || exit 1
else
  if [[ -d "$folder" ]]; then
    echo "Check"
  else
    echo "$folder"
  fi
  echo "Usage: $0 <folder>"
fi
#!/bin/bash
cd /home/kavia/workspace/code-generation/autoparthub-16336-e26561bb/auto_part_hub
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


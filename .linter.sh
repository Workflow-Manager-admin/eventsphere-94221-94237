#!/bin/bash
cd /home/kavia/workspace/code-generation/eventsphere-94221-94237/main_container_for_eventsphere
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


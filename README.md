terrarium-stream
================

This is an interface to [terrarium](https://github.com/tmcw/terrarium) that provides a readable & writable stream.
Send it JavaScript code with instrumentation hints (`//=value`) and it sends you back messages when those values
are ready. Automatically it destroys and creates sandboxes to fix the problem of runaway `setInterval` usage.

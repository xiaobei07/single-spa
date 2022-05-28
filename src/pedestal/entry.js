import { registerApplication,start } from "single-spa";
import tasks from "../../lib"

tasks.forEach((module,i) => {
    const { name: mod, entry: {default: creat} } = module
    registerApplication(mod,creat(mod),prefix(`/${mod}`))
})

function prefix(pre) {
    return function(location) {
        return location.pathname.startsWith(pre)
    }
}

start()
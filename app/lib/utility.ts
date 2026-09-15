import {type ClassValue, clsx} from 'clsx/lite';

function merge(...args: ClassValue[]) {
    return clsx(...args)
}

export {
    merge
}
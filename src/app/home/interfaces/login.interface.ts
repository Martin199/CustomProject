export interface Register {
    password:        string;
    email:           string;
    name:            string;
    surname:         string;
    phone:           string;
    dni:             string;
    direction:       string;
    directionNumber: string;
    location:        string;
}


export interface RegisterErrorMessage {
    headers:    Headers;
    status:     number;
    statusText: string;
    url:        string;
    ok:         boolean;
    name:       string;
    message:    string;
    error:      Error;
}

export interface Error {
    ok:     boolean;
    errors: Errors;
}

export interface Errors {
    name:            Direction;
    email:           Direction;
    surname:         Direction;
    phone:           Direction;
    dni:             Direction;
    direction:       Direction;
    directionNumber: Direction;
    location:        Direction;
}

export interface Direction {
    value:    string;
    msg:      string;
    param:    string;
    location: string;
}

export interface Headers {
    normalizedNames: NormalizedNames;
    lazyUpdate:      null;
}

export interface NormalizedNames {
}

declare module 'react-odometerjs' {
    import { Component } from 'react';

    interface OdometerProps {
        value: number;
        format?: string;
        theme?: string;
        duration?: number;
        animation?: string;
        className?: string;
    }

    export default class Odometer extends Component<OdometerProps> {}
}

/// <reference types="react" />
import PropTypes from 'prop-types';
import './button.css';
export declare const Button: {
    ({ primary, backgroundColor, size, label, ...props }: {
        [x: string]: any;
        primary: any;
        backgroundColor: any;
        size: any;
        label: any;
    }): JSX.Element;
    propTypes: {
        primary: PropTypes.Requireable<boolean>;
        backgroundColor: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        label: PropTypes.Validator<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        backgroundColor: any;
        primary: boolean;
        size: string;
        onClick: any;
    };
};

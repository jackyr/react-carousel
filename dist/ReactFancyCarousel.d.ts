import { default as React_2 } from 'react';

declare const _default: React_2.NamedExoticComponent<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLElement>, HTMLElement>>;

declare const MemoizedCarousel: React_2.NamedExoticComponent<Omit<PropsType, "ref"> & React_2.RefAttributes<RefType>> & {
    readonly type: React_2.ForwardRefExoticComponent<Omit<PropsType, "ref"> & React_2.RefAttributes<RefType>>;
} & {
    Item: typeof _default;
};
export default MemoizedCarousel;

declare interface PropsType extends Omit<JSX.IntrinsicElements['div'], 'className' | 'children'> {
    className?: React.ClassAttributes;
    children?: React.ReactElement | Array<React.ReactElement>;

    /**
     * @description show default indicator
     * @default true
     */
    showIndicator?: boolean;

    /**
     * @description autoplay
     * @default false
     */
    autoplay?: boolean;

    /**
     * @description autoplay time duration
     * @unit ms
     * @default 3000
     */
    duration?: number;

    /**
     * @description transition speed
     * @unit ms
     * @default 500
     */
    speed?: number;

    /**
     * @description transition timing function
     * @enum 'linear' | 'ease' | 'ease-in'.. reference to css property 'transition-timing-function'
     * @default 'ease'
     */
    timingFunction?: string;

    /**
     * @description active item change handler
     * @param currentIndex current active item index
     * @param prevIndex previous active item index
     * @returns void
     * @default () => {}
     */
    onChange?: (currentIndex: number, prevIndex: number) => void;

    /**
     * @description customize indicator render function
     * @param currentIndex current active item index
     * @param itemCount item total count
     * @returns ReactNode
     * @default () => {}
     */
    indicatorRender?: (currentIndex: number, itemCount: number) => React.ReactNode;
}

declare interface RefType {
    /**
     * @description change to next item
     * @returns void
     */
    next: () => void;
    /**
     * @description change to previous item
     * @returns void
     */
    prev: () => void;
    /**
     * @description change to item given by index
     * @returns void
     */
    goTo: (index: number) => void;
}

export { }

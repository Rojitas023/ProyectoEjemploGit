import { AnimationController, Animation } from '@ionic/angular';

export const enterAnimation = (baseEl: HTMLElement, opts?: any): Animation => {
    const DURATION = 1000;

    console.log('baseEl: ', baseEl)
    console.log('opts: ', opts)

    const AnimationController = new AnimationController

    if (opts.direction === 'forward') {
        return AnimationController.create()
        .addElement(opts.enteringEl)
        .duration(DURATION)
        .easing('ease-in')
        .fromTo('opacity', 0, 1)
    } else {
            const rootAnimation = AnimationController.create()
            .addElement(opts.enteringEl)
            .duration(DURATION)
            .easing('ease-in')
            .fromTo('opacity', 0, 1)

            const leavingAnimation = AnimationController.create()
            .addElement(opts.leavingEl)
            .duration(DURATION)
            .easing('ease-out')
            .fromTo('opacity', 1, 0)

            return AnimationController.create().addAnimation([rootAnimation, leavingAnimation]);
    }

}
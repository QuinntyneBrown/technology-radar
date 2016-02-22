import { IDispatcher } from "../../libs/store";

export class TabActionCreator {
    constructor(private dispatcher: IDispatcher) { }

    setCurrentTab = options => this.dispatcher.dispatch(new SetCurrentTabAction(options.tabName, options.index));
}


export class SetCurrentTabAction { constructor(public tabName: string, public index:number) { } }

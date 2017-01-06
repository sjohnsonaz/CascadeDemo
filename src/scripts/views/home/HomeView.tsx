import Cascade, { Component } from 'cascade';

import { Button, ButtonGroup, Modal, Section, Tab } from 'cascade-components';

import ViewModel from '../../applications/ViewModel';

export interface IMainViewProps {
    viewModel: ViewModel;
}

export default class MainView extends Component<IMainViewProps> {
    render() {
        let {viewModel} = this.props;
        return (
            <div>
                <h1>Cascade</h1>
                <p>
                    <strong>A modern library for creating user interfaces.</strong><br />
                    <br />
                    Your data and views are synchronized automatically, so you can focus on what you're doing, not on your framework.
                </p>
                <Section title="Reactive State">
                    Cascade State uses observable and computed properties to synchronize data.  Once a property is marked observable, any computed properties that reference it will be updated atomatically.  Updates are carefully batched to reduce computations.  Even better, if you need to read from a value that hasn't been computed yet, just read it!  Everything is ready when you need it!
                </Section>
                <Section title="Functional DOM Components">
                    Cascade uses either JSX or direct JavaScript calls to create Components and VirtualNodes, which be rendered to real DOM Nodes.  Components use computed properties to synchronize with your State, so any State updates will update your views along with everything else!  Plus, only changes to the VirtualNodes are rendered to the DOM, so all re-renders are minimized!
                </Section>
            </div>
        );
    }
}
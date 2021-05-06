import { Story } from '@storybook/react';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAlt2, VscExtensions, VscAccount, VscGear} from 'react-icons/vsc';
import NavBar, { NavBarProps } from './NavBar';

export default {
    component: NavBar,
    title: 'NavBar'
};

const Template: Story<NavBarProps> = (args) => <NavBar {...args}/>;

const itemClass = {
    marginBottom: '0.75rem',
    color: '#7E7E7E'
};

const TOP_ICONS = [
    <VscFiles />,
    <VscSearch />,
    <VscSourceControl />,
    <VscDebugAlt2 />,
    <VscExtensions />
];

const BOTTOM_ICONS = [
    <VscAccount />,
    <VscGear />
];

export const TopOnly = Template.bind({});
TopOnly.args = { topElements: TOP_ICONS, bottomElements: [], itemClass };

export const BottomOnly = Template.bind({});
BottomOnly.args = { topElements: [], bottomElements: BOTTOM_ICONS, itemClass };

export const TopAndBottom = Template.bind({});
TopAndBottom.args = { topElements: TOP_ICONS, bottomElements: BOTTOM_ICONS, itemClass };
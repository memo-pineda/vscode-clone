import { Story } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faSearch, faCodeBranch, faPlay, faThLarge, faUserCircle, faCog } from '@fortawesome/free-solid-svg-icons';
import NavBar, { NavBarProps } from './NavBar';

export default {
    component: NavBar,
    title: 'NavBar'
};

const Template: Story<NavBarProps> = (args) => <NavBar {...args}/>;

const TOP_ICONS = [
    <FontAwesomeIcon icon={faCopy} size={'2x'} />,
    <FontAwesomeIcon icon={faSearch} size={'2x'} />,
    <FontAwesomeIcon icon={faCodeBranch} size={'2x'} />,
    <FontAwesomeIcon icon={faPlay} size={'2x'} />,
    <FontAwesomeIcon icon={faThLarge} size={'2x'} />,
];

const BOTTOM_ICONS = [
    <FontAwesomeIcon icon={faUserCircle} size={'2x'} />,
    <FontAwesomeIcon icon={faCog} size={'2x'} />,
];

export const Default = Template.bind({});
Default.args = { topElements: TOP_ICONS, bottomElements: [] };

export const BottomOnly = Template.bind({});
BottomOnly.args = { topElements: [], bottomElements: BOTTOM_ICONS };

export const TopAndBottom = Template.bind({});
TopAndBottom.args = { topElements: TOP_ICONS, bottomElements: BOTTOM_ICONS };
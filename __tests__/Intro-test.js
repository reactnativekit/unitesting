import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../src/utils/Intro';

// Snapshot Test
//import { Flatlist, Text } from 'react-native';

test('renders correctly', () => {
    const tree = renderer.create(<Intro />).toJSON();
    expect(tree).toMatchSnapshot();
});

// Snapshot Test for Flatlist

// it('renders the Flatlist component', () => {
//     const tree = renderer.create(
//         <Flatlist
//             data={['Item1', 'Item2', 'Item3']}
//             keyExtractor={item => item}
//             renderItem={({ item }) => <Text>{item}</Text>}
//         />
//     ).toJSON();
//     expect(tree).toMatchSnapshot();
// });
'use strict';

import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from "react-native";

class Tabs extends React.Component {
    onSelect(el){
        if (el.props.onSelect) {
            el.props.onSelect(el);
        }
        if (this.props.onSelect) {
            this.props.onSelect(el);
        }
    }

    render(){
        var self = this;
        return (
            <View style={[styles.tabbarView, this.props.style]}>
                {this.props.children.map((el)=> {
                    let CustomView = el.props.disabled ? View : TouchableOpacity;
                    return (
                        <CustomView key={el.props.name+"touch"}
                           style={[styles.iconView, this.props.iconStyle, (el.props.name || el.key) == selected ? this.props.selectedIconStyle || el.props.selectedIconStyle || {} : {} ]}
                           onPress={()=>!el.props.disabled && self.onSelect(el)}
                           onLongPress={()=>self.onSelect(el)}
                           activeOpacity={el.props.pressOpacity}>
                             {selected == (el.props.name || el.key) ? React.cloneElement(el, {selected: true, style: [el.props.style, this.props.selectedStyle, el.props.selectedStyle]}) : el}
                        </CustomView>
                    )
                })}
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabbarView: {
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        height:50,
        opacity:1,
        backgroundColor:'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconView: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentView: {
        flex: 1
    }
});

export default Tabs;
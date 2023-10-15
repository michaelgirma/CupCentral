export const ConvertValues = (value: any) => {

    if (typeof value === 'number') {

        const returnColor = (id: any) => {
            if (id === 1) {
                return '#000000';
            } else if (id === 2) {
                return '#012169';
            } else if (id === 3) {
                return '#2F6F3E';
            } else {
                return ''
            }
        }

        return returnColor(value);
    }

    else if (typeof value === 'string') {

        if (value === 'Small' || value === 'Medium' || value === 'Large') {
            
            const returnSize = (size: any) => {
                if (size === 'Small') {
                    return 1;
                } else if (size === 'Medium') {
                    return 2;
                } else if (size === 'Large') {
                    return 3;
                } else {
                    return 0
                }
            }

            return returnSize(value);
        }

        else if (value === '#000000' || value === '#012169' || value === '#2F6F3E') {

            const returnID = (color: any) => {
                if (color === '#000000') {
                    return 1;
                } else if (color === '#012169') {
                    return 2;
                } else if (color === '#2F6F3E') {
                    return 3;
                } else {
                    return 0
                }
            }

            return returnID(value);
        }

        else if (value === 'CupCentralImages/Lid#000000andCup#000000.png' || value === "CupCentralImages/Lid#000000andCup#012169.png" || value === "CupCentralImages/Lid#000000andCup#2F6F3E.png" || value === "CupCentralImages/Lid#012169andCup#000000.png" || value === "CupCentralImages/Lid#012169andCup#012169.png" || value === "CupCentralImages/Lid#012169andCup#2F6F3E.png" || value === "CupCentralImages/Lid#2F6F3EandCup#000000.png" || value === "CupCentralImages/Lid#2F6F3EandCup#012169.png" || value === "CupCentralImages/Lid#2F6F3EandCup#2F6F3E.png" ) {

            const returnImage = (image: any) => {
                if (image === 'CupCentralImages/Lid#000000andCup#000000.png') {
                    return 'CupCentralImages/LidBlackandCupBlack.png'
                } else if (image === 'CupCentralImages/Lid#000000andCup#012169.png') {
                    return 'CupCentralImages/LidBlackandCupBlue.png'
                } else if (image === 'CupCentralImages/Lid#000000andCup#2F6F3E.png') {
                    return 'CupCentralImages/LidBlackandCupGreen.png'
                } else if (image === 'CupCentralImages/Lid#012169andCup#000000.png') {
                    return 'CupCentralImages/LidBlueandCupBlack.png'
                } else if (image === 'CupCentralImages/Lid#012169andCup#012169.png') {
                    return 'CupCentralImages/LidBlueandCupBlue.png'
                } else if (image === 'CupCentralImages/Lid#012169andCup#2F6F3E.png') {
                    return 'CupCentralImages/LidBlueandCupGreen.png'
                } else if (image === 'CupCentralImages/Lid#2F6F3EandCup#000000.png') {
                    return 'CupCentralImages/LidGreenandCupBlack.png'
                } else if (image === 'CupCentralImages/Lid#2F6F3EandCup#012169.png') {
                    return 'CupCentralImages/LidGreenandCupBlue.png'
                } else if (image === 'CupCentralImages/Lid#2F6F3EandCup#2F6F3E.png') {
                    return 'CupCentralImages/LidGreenandCupGreen.png'
                } else {
                    return ''
                }
            }

            return returnImage(value);
        }
    }

    else {
        return value;
    }

}

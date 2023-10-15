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

        if (value === 'Black' || value === 'Blue' || value === 'Green' || value === '#000000' || value === '#012169' || value === '#2F6F3E') {

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
    }

    else {
        return value;
    }

}

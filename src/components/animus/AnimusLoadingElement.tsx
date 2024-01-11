
export function AnimusLoadingElement({marginBottom = '1px'}: {marginBottom: string}) {
    return (
        <div style={{
            width: '10px',
            marginInline: '1px',
            marginBottom: marginBottom,
            borderBottom: '1px solid white',
            borderRadius: '1px',
            boxShadow: '2px'
        }}></div>
    );
}
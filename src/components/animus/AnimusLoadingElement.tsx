
export function AnimusLoadingElement({marginBottom}: {marginBottom: string}) {
    return (
        <div style={{
            width: '24px',
            marginInline: '1px',
            marginBottom: marginBottom,
            borderBottom: '2px solid #a0a0a1',
            borderRadius: '2px',
            boxShadow: '2px'
        }}></div>
    );
}
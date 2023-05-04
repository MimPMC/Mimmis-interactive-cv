import { StatsRing } from "../components/stats"

 const data =  [
    { 
        label: "html",
        stats: "100",
        progress: 70,
        color: "pink",
        icon: 'up',
      }

 ]
 


export function StartPage() {

    return (
        <div>
            StartPage
            <StatsRing data={data} ></StatsRing>
                
            
        </div>
    )
}
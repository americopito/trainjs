function bubble(arr)
{
    var aux=0;
          for (let i = 0; i < arr.length; i++) 
            {
                for (let j = i+1; j < arr.length; j++) {
                    if(arr[j]<arr[i])
                        {
                            aux=arr[j];
                            arr[j]=arr[i];
                            arr[i]=aux;

                        }
                    
                }
            
          }

          console.log(arr);
        
}





type SettledResult<T> = PromiseSettledResult<T> & {
    value?: T;
    reason?: any;
  };


export default function handleError<T>(
    results: SettledResult<T>[]
  ): [T[], any[]] {
    const fulfilledValues: T[] = [];
    const rejectedReasons: any[] = [];
  
    results.forEach((result) => {
      if (result.status === 'fulfilled' && result.value) {
        fulfilledValues.push(result.value);
      } else if (result.status === 'rejected' && result.reason) {
        rejectedReasons.push(result.reason);
        // Handle the error here, or store the reasons for further processing
        // ...
      }
    });
  
    return [fulfilledValues, rejectedReasons];
  }
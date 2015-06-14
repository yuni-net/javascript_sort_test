/**
 * Created by yuni.net.liberty on 2015/06/14.
 */

function bubble_sort(array)
{
    var unsettled_num = array.length
    var unsettled_final_No = unsettled_num - 1
    while(unsettled_final_No > 0) {
        for(var focus=0; focus < unsettled_final_No; focus += 1) {
            if(array[focus] > array[focus + 1]) {
                var work = array[focus]
                array[focus] = array[focus + 1]
                array[focus + 1] = work
            }
        }
        unsettled_final_No -= 1
    }
}

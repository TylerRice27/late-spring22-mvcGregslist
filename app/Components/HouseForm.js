
export function getHouseForm() {
  return /*html*/ ` 
<form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.housesController.createHouse()">
                <h3> List a House</h3>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Address</label>
                  <input type="text" class="form-control" name="address" id="address" aria-described by="emailHelp">
                  <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3 col-md-12">
                  <label for="bedrooms" class="form-label">Bedrooms</label>
                  <input type="number" class="form-control" name="rooms" id="rooms">
                 
                  <div class="mb-3 col-md-12">
                   <label for="year" class="form-label">Year</label>
                   <input type="number" class="form-control" name="year" id="year">
                   </div>
                    <div class="mb-3 col-md-12">
                     <label for="exampleInputPassword1" class="form-label">Price</label>
                     <input type="number" class="form-control" name="price" id="price">
                   </div>
                    <div class="mb-3 col-md-12">
                     <label for="Image" class="form-label">Image</label>
                     <input type="text" class="form-control" name="imgUrl" id="imgUrl">
                   </div>
                     
                     <div class="mb-3 col-md-12">
                     <label for="Image" class="form-label">Description</label>
                     <input type="text" class="form-control" name="description" id="description">
                   </div>
                   
                 </div>
                 
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              `



}


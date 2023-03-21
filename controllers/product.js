import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getProducts = (req, res) => {
    const q = "SELECT * FROM unicircleproduct"

    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
};

export const getProduct = (req, res) => {
    const q = "SELECT * FROM unicircleproduct WHERE id = ?";

    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
};

export const addProduct = (req, res) => {
    const q = "INSERT INTO unicircleproduct (`productName`, `category`, `productImageOne`, `productImageTwo`, `productImageThree`, `productImageFour`, `materials`, `standards`, `finisher`, `diameterOne`, `lengthOne`, `dsOne`, `hlOne`, `diameterTwo`, `lengthTwo`, `dsTwo`, `hlTwo`, `diameterThree`, `lengthThree`, `dsThree`, `hlThree`, `diameterFour`, `lengthFour`, `dsFour`, `hlFour`, `diameterFive`, `lengthFive`, `dsFive`, `hlFive`, `diameterSix`, `lengthSix`, `dsSix`, `hlSix`, `description`) VALUES (?)";
    
    const values = [
        req.body.productName,
        req.body.category,
        req.body.productImageOne,
        req.body.productImageTwo,
        req.body.productImageThree,
        req.body.productImageFour,
        req.body.materials,
        req.body.standards,
        req.body.finisher,
        req.body.diameterOne,
        req.body.lengthOne,
        req.body.dsOne,
        req.body.hlOne,
        req.body.diameterTwo,
        req.body.lengthTwo,
        req.body.dsTwo,
        req.body.hlTwo,
        req.body.diameterThree,
        req.body.lengthThree,
        req.body.dsThree,
        req.body.hlThree,
        req.body.diameterFour,
        req.body.lengthFour,
        req.body.dsFour,
        req.body.hlFour,
        req.body.diameterFive,
        req.body.lengthFive,
        req.body.dsFive,
        req.body.hlFive,
        req.body.diameterSix,
        req.body.lengthSix,
        req.body.dsSix,
        req.body.hlSix,
        req.body.description,
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("product have been created");
    });
};
   
export const deleteProduct = (req, res) => {
    const productId = req.params.id;
    const q = " DELETE FROM unicircleproduct WHERE id = ? ";
  
    db.query(q, [productId], (err, data) => {
        if (err) return res.send(err);
        return res.json("product have been deleted");
      });
};

export const updateProduct = (req, res) => {
    const productId = req.params.id;
    const q = "UPDATE unicircleproduct SET `productName`=?, `category`=?, `productImageOne`=?, `productImageTwo`=?, `productImageThree`=?, `productImageFour`=?,`materials`=?, `standards`=?, `finisher`=?, `diameterOne`=?, `lengthOne`=?, `dsOne`=?, `hlOne`=?, `diameterTwo`=?, `lengthTwo`=?, `dsTwo`=?, `hlTwo`=?, `diameterThree`=?, `lengthThree`=?, `dsThree`=?, `hlThree`=?, `diameterFour`=?, `lengthFour`=?, `dsFour`=?, `hlFour`=?, `diameterFive`=?, `lengthFive`=?, `dsFive`=?, `hlFive`=?, `diameterSix`=?, `lengthSix`=?, `dsSix`=?, `hlSix`=?,`description`=? WHERE id = ?";
    
    const values = [
        req.body.productName,
        req.body.category,
        req.body.productImageOne,
        req.body.productImageTwo,
        req.body.productImageThree,
        req.body.productImageFour,
        req.body.materials,
        req.body.standards,
        req.body.finisher,
        req.body.diameterOne,
        req.body.lengthOne,
        req.body.dsOne,
        req.body.hlOne,
        req.body.diameterTwo,
        req.body.lengthTwo,
        req.body.dsTwo,
        req.body.hlTwo,
        req.body.diameterThree,
        req.body.lengthThree,
        req.body.dsThree,
        req.body.hlThree,
        req.body.diameterFour,
        req.body.lengthFour,
        req.body.dsFour,
        req.body.hlFour,
        req.body.diameterFive,
        req.body.lengthFive,
        req.body.dsFive,
        req.body.hlFive,
        req.body.diameterSix,
        req.body.lengthSix,
        req.body.dsSix,
        req.body.hlSix,
        req.body.description,
    ];
  
    db.query(q, [...values,productId], (err, data) => {
      if (err) return res.send(err);
      return res.json("product have been updated");
    });
}


export const getGuides = (req, res) => {
    const q = "SELECT * FROM unicircleguide"

    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
};

export const getGuide = (req, res) => {
    const q = "SELECT * FROM unicircleguide WHERE id = ?";

    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
};

export const addGuide = (req, res) => {
    const q = "INSERT INTO unicircleguide (`newsImage`, `title`, `subTitle`, `postBy`, `description`) VALUES (?)";
    
    const values = [
        req.body.newsImage,
        req.body.title,
        req.body.subTitle,
        req.body.postBy,
        req.body.description,
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("guide have been created");
    });
};
   
export const deleteGuide = (req, res) => {
    const productId = req.params.id;
    const q = " DELETE FROM unicircleguide WHERE id = ? ";
  
    db.query(q, [productId], (err, data) => {
        if (err) return res.send(err);
        return res.json("guide have been deleted");
      });
};

export const updateGuide = (req, res) => {
    const productId = req.params.id;
    const q = "UPDATE unicircleguide SET `newsImage`=?, `title`=?, `subTitle`=?, `postBy`=?, `description`=? WHERE id = ?";
    
    const values = [
        req.body.newsImage,
        req.body.title,
        req.body.subTitle,
        req.body.postBy,
        req.body.description,
    ];
  
    db.query(q, [...values,productId], (err, data) => {
      if (err) return res.send(err);
      return res.json("guide have been updated");
    });
}


export const login = (req, res) => {
    //CHECK USER
  
    const q = "SELECT * FROM adminunicircle WHERE username = ?";
  
    db.query(q, [req.body.username], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found!");
  
  
        if (req.body.password === data[0].password)
       {
        const token = jwt.sign({ id: data[0].id }, "jwtkey");
        const { password, ...other } = data[0];
  
        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json(other);
       }
       else
       return res.status(400).json("Wrong password or username!")
      });
};

export const logout = (req, res) => {
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
    }).status(200).json("User has been logged out.")
    };
    

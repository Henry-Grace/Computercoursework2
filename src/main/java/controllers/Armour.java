package controllers;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import server.Main;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@Path("Armour/")
@Consumes(MediaType.MULTIPART_FORM_DATA)
@Produces(MediaType.APPLICATION_JSON)

public class Armour{
    @GET
    @Path("list")
    public String Armourlist() {
        System.out.println("Invoked Armour.ArmourList()");
        JSONArray response = new JSONArray();
        try {
            PreparedStatement ps = Main.db.prepareStatement("SELECT ArmourID, Name, Description, Durability, Material, Class, ArModsID FROM Armlists");
            ResultSet results = ps.executeQuery();
            while (results.next()==true) {
                JSONObject row = new JSONObject();
                row.put("ArmourID", results.getInt(1));
                row.put("Name", results.getString(2));
                row.put("Description", results.getString(3));
                row.put("Durability", results.getString(4));
                row.put("Material", results.getString(5));
                row.put("Class", results.getString(6));
                row.put("ArModsID", results.getString(7));
                response.add(row);
            }
            return response.toString();
        } catch (Exception exception) {
            System.out.println("Database error: " + exception.getMessage());
            return "{\"Error\": \"Unable to list items.  Error code xx.\"}";
        }
    }
}
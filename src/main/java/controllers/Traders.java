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

@Path("Traders/")
@Consumes(MediaType.MULTIPART_FORM_DATA)
@Produces(MediaType.APPLICATION_JSON)

public class Traders{
    @GET
    @Path("list")
    public String TraderList() {
        System.out.println("Invoked Trader.TraderList()");
        JSONArray response = new JSONArray();
        try {
            PreparedStatement ps = Main.db.prepareStatement("SELECT TraderID, Name, Description, AmmoID, WeaponID, MedID, ArmourID, TraderURL, QuestID, FROM Traders");
            ResultSet results = ps.executeQuery();
            while (results.next()==true) {
                JSONObject row = new JSONObject();
                row.put("TraderID", results.getInt(1));
                row.put("Name", results.getString(2));
                row.put("Description", results.getString(3));
                row.put("AmmoID", results.getString(4));
                row.put("WeaponID", results.getString(5));
                row.put("MedID", results.getString(6));
                row.put("ArmourID", results.getString(7));
                row.put("TraderURL", results.getString(8));
                row.put("QuestID", results.getString(9));
                response.add(row);
            }
            return response.toString();
        } catch (Exception exception) {
            System.out.println("Database error: " + exception.getMessage());
            return "{\"Error\": \"Unable to list items.  Error code xx.\"}";
        }
    }
}